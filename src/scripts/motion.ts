export type MotionWindow = Pick<Window, "matchMedia"> & {
  IntersectionObserver?: typeof IntersectionObserver;
};

export function prefersReducedMotion(win: MotionWindow = window): boolean {
  return win.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function revealAll(root: ParentNode): void {
  root.querySelectorAll("[data-reveal]").forEach((node) => {
    node.classList.add("is-in");
  });
}

export function watchReveals(doc: Document = document, win: MotionWindow = window): void {
  const nodes = doc.querySelectorAll<HTMLElement>("[data-reveal]");
  if (!nodes.length) return;

  const Observer = win.IntersectionObserver;
  if (typeof Observer !== "function") {
    revealAll(doc);
    return;
  }

  const io = new Observer(
    (entries, observer) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add("is-in");
        observer.unobserve(entry.target);
      }
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
  );

  nodes.forEach((node) => io.observe(node));
}

export function initMotion(doc: Document = document, win: MotionWindow = window) {
  const root = doc.documentElement;

  if (prefersReducedMotion(win)) {
    root.classList.remove("motion", "ready");
    revealAll(doc);
    return { reduced: true, ready: false };
  }

  root.classList.add("motion");
  watchReveals(doc, win);
  root.classList.add("ready");
  return { reduced: false, ready: true };
}

export function bindMotionLifecycle(doc: Document = document, win: MotionWindow = window): void {
  initMotion(doc, win);
  doc.addEventListener("astro:page-load", () => initMotion(doc, win));
}
