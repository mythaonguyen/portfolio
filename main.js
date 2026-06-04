document.querySelectorAll(".reveal").forEach((el) => {
    new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) entry.target.classList.add("visible");
            });
        },
        { threshold: 0.1, rootMargin: "0px 0px -30px 0px" }
    ).observe(el);
});

document.getElementById("contactForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("firstName").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const subject = encodeURIComponent(`Portfolio · ${name}`);
    const body = encodeURIComponent(`${name}\n${email}\n\n${message}`);
    window.location.href = `mailto:mythaonguyen.work@gmail.com?subject=${subject}&body=${body}`;
});
