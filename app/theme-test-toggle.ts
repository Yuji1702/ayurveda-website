"use client";

/**
 * Toggle helper for switching between the default palette and the readability A/B test variant.
 * Adds or removes the `data-theme="test"` attribute on the root <html> element.
 */
export function toggleThemeTestMode(force?: boolean) {
  if (typeof document === "undefined") {
    return;
  }

  const html = document.documentElement;
  const isTestActive = html.getAttribute("data-theme") === "test";
  const shouldEnable = force ?? !isTestActive;

  if (shouldEnable) {
    html.setAttribute("data-theme", "test");
    console.warn("A/B test mode enabled — compare readability.");
    return;
  }

  html.removeAttribute("data-theme");
}
