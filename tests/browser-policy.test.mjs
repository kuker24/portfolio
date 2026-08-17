import assert from "node:assert/strict";
import { test } from "node:test";
import { initMotion, prefersReducedMotion } from "../src/scripts/motion.ts";
import { bindMenu, isMenuOpen, setMenuOpen } from "../src/scripts/menu.ts";

class TokenList {
  constructor() {
    this._ = new Set();
  }

  add(...tokens) {
    tokens.forEach((token) => this._.add(token));
  }

  remove(...tokens) {
    tokens.forEach((token) => this._.delete(token));
  }

  contains(token) {
    return this._.has(token);
  }

  toggle(token, force) {
    if (force === true) {
      this._.add(token);
      return true;
    }
    if (force === false) {
      this._.delete(token);
      return false;
    }
    if (this._.has(token)) {
      this._.delete(token);
      return false;
    }
    this._.add(token);
    return true;
  }
}

class IdleObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

function makeEl(id = "", attrs = {}) {
  const attributes = { ...attrs };
  const listeners = {};
  const dataset = {};
  const children = [];

  return {
    id,
    dataset,
    children,
    classList: new TokenList(),
    muted: false,
    defaultMuted: false,
    playsInline: false,
    paused: true,
    hidden: false,
    loop: false,
    ended: false,
    currentTime: 0,
    duration: 0,
    _host: null,
    ownerDocument: null,
    getAttribute(name) {
      return Object.hasOwn(attributes, name) ? attributes[name] : null;
    },
    setAttribute(name, value) {
      attributes[name] = String(value);
    },
    addEventListener(type, fn) {
      (listeners[type] ||= []).push(fn);
    },
    emit(type) {
      for (const fn of listeners[type] || []) fn();
    },
    closest(selector) {
      return selector === "[data-nebula]" ? this._host : null;
    },
    appendChild(node) {
      children.push(node);
      return node;
    },
    load() {
      this.loaded = true;
    },
    play() {
      this.paused = false;
      return Promise.resolve();
    },
    pause() {
      this.paused = true;
    },
    click() {
      for (const fn of listeners.click || []) fn();
    },
  };
}

function createDocument() {
  const html = { classList: new TokenList(), dataset: {} };
  const reveals = [makeEl(), makeEl()];
  const nebula = makeEl();
  const video = makeEl();
  video.dataset.webm = "/portfolio/images/nebula.webm";
  video.dataset.mp4 = "/portfolio/images/nebula.mp4";
  video._host = nebula;
  const doc = {
    documentElement: html,
    hidden: false,
    button: makeEl("mobile-menu-btn", {
      "aria-expanded": "false",
      "aria-label": "Open menu",
    }),
    menu: makeEl("mobile-menu"),
    links: [makeEl("", { class: "mobile-nav-link" })],
    html,
    reveals,
    nebula,
    video,
    createElement(tag) {
      return { tag, src: "", type: "" };
    },
    getElementById(id) {
      if (id === "mobile-menu-btn") return doc.button;
      if (id === "mobile-menu") return doc.menu;
      return null;
    },
    querySelector(selector) {
      if (selector === "[data-nebula]") return nebula;
      if (selector === "[data-nebula-video]") return video;
      return null;
    },
    querySelectorAll(selector) {
      if (selector === "[data-reveal]") return reveals;
      if (selector === ".mobile-nav-link") return doc.links;
      return [];
    },
    addEventListener() {},
  };
  video.ownerDocument = doc;
  doc.menu.dataset.open = "false";
  return doc;
}

function fakeWindow(reduced, Observer) {
  return {
    matchMedia(query) {
      return {
        matches: Boolean(reduced && query.includes("prefers-reduced-motion")),
      };
    },
    IntersectionObserver: Observer,
  };
}

test("prefersReducedMotion reads the real matchMedia query", () => {
  assert.equal(prefersReducedMotion(fakeWindow(true)), true);
  assert.equal(prefersReducedMotion(fakeWindow(false)), false);
});

test("reduced-motion start state leaves content visible and skips decorative classes", () => {
  const doc = createDocument();
  const result = initMotion(doc, fakeWindow(true, IdleObserver));

  assert.deepEqual(result, { reduced: true, ready: false });
  assert.equal(doc.html.classList.contains("motion"), false);
  assert.equal(doc.html.classList.contains("ready"), false);
  assert.equal(
    doc.reveals.every((node) => node.classList.contains("is-in")),
    true,
  );
});

test("motion-allowed start state installs the authored reveal path", () => {
  const doc = createDocument();
  const result = initMotion(doc, fakeWindow(false, IdleObserver));

  assert.deepEqual(result, { reduced: false, ready: true });
  assert.equal(doc.html.classList.contains("motion"), true);
  assert.equal(doc.html.classList.contains("ready"), true);
  assert.equal(
    doc.reveals.every((node) => node.classList.contains("is-in")),
    false,
  );
});

test("mobile menu starts closed and only opens when asked", () => {
  const doc = createDocument();
  const bound = bindMenu(doc);

  assert.equal(bound.bound, true);
  assert.equal(doc.button.getAttribute("aria-expanded"), "false");
  assert.equal(doc.button.getAttribute("aria-label"), "Open menu");
  assert.equal(isMenuOpen(doc.menu), false);

  doc.button.click();
  assert.equal(doc.button.getAttribute("aria-expanded"), "true");
  assert.equal(isMenuOpen(doc.menu), true);

  doc.links[0].click();
  assert.equal(isMenuOpen(doc.menu), false);

  setMenuOpen(doc.button, doc.menu, true);
  assert.equal(isMenuOpen(doc.menu), true);

  const again = bindMenu(doc);
  assert.equal(again.bound, true);
  assert.equal(isMenuOpen(doc.menu), false);
  doc.button.click();
  assert.equal(isMenuOpen(doc.menu), true);
});

test("persisted hamburger opens the live menu after the drawer is replaced", () => {
  const doc = createDocument();
  const detached = doc.menu;
  bindMenu(doc);
  doc.button.click();
  assert.equal(isMenuOpen(detached), true);

  const live = makeEl("mobile-menu");
  live.dataset.open = "false";
  const freshLink = makeEl("", { class: "mobile-nav-link" });
  doc.menu = live;
  doc.links = [freshLink];

  doc.button.click();
  assert.equal(isMenuOpen(live), true);
  assert.equal(isMenuOpen(detached), true);

  bindMenu(doc);
  assert.equal(isMenuOpen(live), false);
  assert.equal(doc.button.getAttribute("aria-expanded"), "false");

  doc.button.click();
  assert.equal(isMenuOpen(live), true);
  freshLink.click();
  assert.equal(isMenuOpen(live), false);
});
