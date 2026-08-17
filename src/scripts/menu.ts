export function setMenuOpen(button: HTMLElement, menu: HTMLElement, open: boolean): void {
  button.setAttribute("aria-expanded", open ? "true" : "false");
  button.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  menu.dataset.open = open ? "true" : "false";
}

export function isMenuOpen(menu: HTMLElement): boolean {
  return menu.dataset.open === "true";
}

function liveMenu(doc: Document): HTMLElement | null {
  return doc.getElementById("mobile-menu");
}

function bindDrawerLinks(doc: Document, button: HTMLElement): void {
  doc.querySelectorAll(".mobile-nav-link").forEach((link) => {
    const node = link as HTMLElement;
    if (node.dataset.menuBound === "true") return;
    node.dataset.menuBound = "true";
    node.addEventListener("click", () => {
      const menu = liveMenu(doc);
      if (!menu) return;
      setMenuOpen(button, menu, false);
    });
  });
}

export function bindMenu(doc: Document = document) {
  const button = doc.getElementById("mobile-menu-btn");
  const menu = liveMenu(doc);

  if (!button || !menu) {
    return { button, menu, bound: false as const };
  }

  setMenuOpen(button, menu, false);
  bindDrawerLinks(doc, button);

  if (button.dataset.bound === "true") {
    return { button, menu, bound: true as const };
  }

  button.dataset.bound = "true";
  button.addEventListener("click", () => {
    const current = liveMenu(doc);
    if (!current) return;
    setMenuOpen(button, current, !isMenuOpen(current));
  });

  return { button, menu, bound: true as const };
}
