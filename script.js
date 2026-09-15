/* ==========================================================================
   BISMILLAH HANAN FAST FOOD — SCRIPT
   Handles: mobile hamburger navigation + gentle scroll-reveal animation.
   No frameworks, no server code — safe for static hosting on Netlify.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function () {

  /* ---------- Mobile navigation toggle ---------- */
  var navToggle = document.getElementById('navToggle');
  var navMenu = document.getElementById('navMenu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function () {
      var isOpen = navMenu.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      navToggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
    });

    // Close the mobile menu after a link is tapped
    navMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navMenu.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.setAttribute('aria-label', 'Open menu');
      });
    });

    // Close the mobile menu if the viewport is resized back to desktop
    window.addEventListener('resize', function () {
      if (window.innerWidth >= 900) {
        navMenu.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ---------- Gentle scroll-reveal for sections ---------- */
  var revealTargets = document.querySelectorAll(
    '.choose, .featured, .about, .steps, .site-footer'
  );

  revealTargets.forEach(function (el) { el.classList.add('reveal'); });

  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if ('IntersectionObserver' in window && !prefersReducedMotion) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealTargets.forEach(function (el) { observer.observe(el); });
  } else {
    // No IntersectionObserver support, or the user prefers reduced motion:
    // just show everything immediately.
    revealTargets.forEach(function (el) { el.classList.add('is-visible'); });
  }

});
