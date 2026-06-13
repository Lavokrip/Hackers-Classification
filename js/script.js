/**
 * script.js — Burger / Navigation menu
 *
 * Opens and closes the slide-in navigation panel.
 * Active links receive the class 'is-active' on click.
 */

(function () {
    'use strict';

    const hamburger  = document.getElementById('hamburger');
    const navPanel   = document.getElementById('navPanel');
    const navOverlay = document.getElementById('navOverlay');
    const navClose   = document.getElementById('navClose');
    const navLinks   = document.querySelectorAll('.nav-links a');

    /** Open the navigation panel */
    function openNav() {
        navPanel.classList.add('is-open');
        navOverlay.classList.add('is-active');
        hamburger.classList.add('is-hidden');
        document.body.style.overflow = 'hidden';
        navClose.focus();
    }

    /** Close the navigation panel */
    function closeNav() {
        navPanel.classList.remove('is-open');
        navOverlay.classList.remove('is-active');
        hamburger.classList.remove('is-hidden');
        document.body.style.overflow = '';
        hamburger.focus();
    }

    /* ---- Event listeners ---- */

    // Open on hamburger click
    hamburger.addEventListener('click', openNav);

    // Close on X button click
    navClose.addEventListener('click', closeNav);

    // Close when clicking the overlay (outside panel)
    navOverlay.addEventListener('click', closeNav);

    // Close on Escape key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && navPanel.classList.contains('is-open')) {
            closeNav();
        }
    });

    // Mark clicked link as active, then close panel
    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            // Remove active from all links
            navLinks.forEach(function (l) { l.classList.remove('is-active'); });
            // Set active on current
            link.classList.add('is-active');
            closeNav();
        });
    });
})();
