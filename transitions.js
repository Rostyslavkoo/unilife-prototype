export function bindPageTransitions() {
  if (window.__unilifeTransitionsBound) return;
  window.__unilifeTransitionsBound = true;
  document.addEventListener("click", function (e) {
    const a = e.target.closest('a[href$=".dc.html"], a[href*=".dc.html?"]');
    if (!a || e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || a.target === "_blank") return;
    const href = a.getAttribute("href");
    if (!href) return;
    e.preventDefault();
    document.body.style.transition = "opacity .16s ease-in";
    document.body.style.opacity = "0";
    setTimeout(() => { window.location.href = href; }, 150);
  }, true);
}
