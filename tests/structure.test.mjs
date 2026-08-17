import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import { sectionHref, siteData } from "../src/data/site.ts";

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), "utf8");

test("homepage IA and first-viewport artifacts stay in the shipped source", () => {
  const hero = read("src/components/Hero.astro");
  const nebula = read("src/components/NebulaField.astro");
  const index = read("src/pages/index.astro");
  const layout = read("src/layouts/Layout.astro");
  const data = read("src/data/site.ts");
  const config = read("astro.config.mjs");
  const css = read("src/styles/global.css");

  assert.match(hero, /siteData\.name/);
  assert.match(hero, /siteData\.photo\.(jpeg|webp)/);
  assert.match(hero, /siteData\.title/);
  assert.match(hero, /href="#projects"/);
  assert.match(hero, /siteData\.socials\.github\.url/);
  assert.match(hero, /hero-arc/);
  assert.match(hero, /<NebulaField/);
  assert.match(nebula, /data-nebula/);
  assert.doesNotMatch(nebula, /data-nebula-video/);
  assert.doesNotMatch(nebula, /<video/);

  assert.match(index, /<Hero/);
  assert.match(index, /<About/);
  assert.match(index, /<Experience/);
  assert.match(index, /<Projects/);
  assert.match(index, /<Capabilities/);
  assert.match(index, /<Principles/);
  assert.match(index, /<Contact/);

  assert.match(layout, /Skip to content/);
  assert.match(layout, /href="#main-content"/);
  assert.match(layout, /seed 6d3ca14b/);

  assert.match(data, /name: "Fahmi Harun"/);
  assert.match(data, /https:\/\/github.com\/kuker24/);
  assert.match(data, /https:\/\/www.linkedin.com\/in\/fahmiharun123\//);
  assert.match(data, /https:\/\/x.com\/FahmiPossible/);
  assert.match(data, /jpeg: "\/portfolio\/images\/myself.jpeg"/);
  assert.match(data, /jpeg: "\/portfolio\/images\/nebula.jpg"/);
  assert.doesNotMatch(data, /nebula\.(mp4|webm)/);

  assert.match(config, /site: 'https:\/\/kuker24.github.io'/);
  assert.match(config, /base: '\/portfolio\/'/);

  assert.match(css, /prefers-reduced-motion: reduce/);
  assert.match(css, /html\.motion\.ready \[data-reveal\]/);
  assert.match(css, /#mobile-menu:not\(\[data-open="true"\]\)/);
  assert.doesNotMatch(css, /nebula-spin|nebula-drift|hero-nebula-video/);
});

test("sectionHref builds GitHub Pages paths that work from 404", () => {
  assert.equal(sectionHref("about"), "/portfolio/#about");
  assert.equal(sectionHref("projects"), `${siteData.basePath}/#projects`);
  assert.equal(sectionHref("contact", "/portfolio/"), "/portfolio/#contact");

  const header = read("src/components/Header.astro");
  assert.match(header, /sectionHref\('about'\)/);
  assert.match(header, /sectionHref\('projects'\)/);
  assert.match(header, /sectionHref\('contact'\)/);
  assert.doesNotMatch(header, /href: '#about'/);
});
