document.addEventListener("DOMContentLoaded", () => {
    const animatedElements = document.querySelectorAll(".fade-in, .slide-in-left, .slide-in-right");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible"); // Add the visible class when in view
            } else {
                entry.target.classList.remove("visible"); // Remove the visible class when out of view
            }
        });
    }, { threshold: 0.1 }); // Trigger when 10% of the element is visible

    animatedElements.forEach((el) => observer.observe(el));

    // Typing effect for the hero section
    const dynamicText = document.getElementById("dynamic-text");
    const phrases = ["Built for Students.", "Built for Teachers.", "Built for Professionals."];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        const currentPhrase = phrases[phraseIndex];
        if (isDeleting) {
            dynamicText.textContent = currentPhrase.substring(0, charIndex--);
        } else {
            dynamicText.textContent = currentPhrase.substring(0, charIndex++);
        }

        if (!isDeleting && charIndex === currentPhrase.length) {
            isDeleting = true;
            setTimeout(typeEffect, 700); // Shorter pause before deleting
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length; // Move to the next phrase
            setTimeout(typeEffect, 300); // Shorter pause before typing the next phrase
        } else {
            setTimeout(typeEffect, isDeleting ? 40 : 80); // Faster typing and deleting speed
        }
    }

    typeEffect(); // Start the typing effect
});

// Ensure the page starts at the top on load
window.scrollTo(0, 0);


document.addEventListener("DOMContentLoaded", () => {
    const animatedElements = document.querySelectorAll(".fade-in, .slide-in-left, .slide-in-right");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible"); // Add the visible class when in view
            } else {
                entry.target.classList.remove("visible"); // Remove the visible class when out of view
            }
        });
    }, { threshold: 0.1 }); // Trigger when 10% of the element is visible

    animatedElements.forEach((el) => observer.observe(el));
});


