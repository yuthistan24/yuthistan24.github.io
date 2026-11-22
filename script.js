
document.addEventListener("DOMContentLoaded", () => {

    // Current year in footer

    const yearElement = document.getElementById("year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }


    // Mobile navigation

    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    navLinks.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });
    });


    // Cursor glow

    const cursorGlow = document.getElementById("cursorGlow");

    if (window.matchMedia("(pointer: fine)").matches) {

        document.addEventListener("mousemove", (event) => {

            cursorGlow.style.left = `${event.clientX}px`;
            cursorGlow.style.top = `${event.clientY}px`;

        });

    } else {
        cursorGlow.style.display = "none";
    }


    // Reveal sections when they enter the viewport

    const elements = document.querySelectorAll(
        ".section-heading, .about-main, .about-details, " +
        ".interest-card, .technology-group, .project-card, " +
        ".research-card, .timeline-item, .contact-content"
    );

    elements.forEach(element => {
        element.classList.add("reveal");
    });

    const observer = new IntersectionObserver((entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    }, {
        threshold: 0.12
    });

    elements.forEach(element => {
        observer.observe(element);
    });


    // Close mobile menu when clicking outside

    document.addEventListener("click", (event) => {

        const clickedInsideMenu = navLinks.contains(event.target);
        const clickedToggle = menuToggle.contains(event.target);

        if (!clickedInsideMenu && !clickedToggle) {
            navLinks.classList.remove("active");
        }

    });

});
