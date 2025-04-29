function typeEffect(element, text, speed) {
    let i = 0;

    function typing() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        } else {
            setTimeout(() => {
                element.innerHTML = '';
                i = 0;
                typing();
            }, 2000); // Wait 2s before restarting
        }
    }

    typing();
}

document.addEventListener("DOMContentLoaded", () => {
    let sections = document.querySelectorAll("section");
    sections.forEach(section => {
        let observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = 1;
                    entry.target.style.transform = "translateY(0)";
                }
            });
        }, { threshold: 0.2 });
        observer.observe(section);
    });

    // Start the continuous typing effect after DOM is loaded
    typeEffect(
        document.getElementById("typing"),
        "SOFTWARE ENGINEER | PROGRAMMER | AI&ML ENTHUSIAST",
        100
    );
});
