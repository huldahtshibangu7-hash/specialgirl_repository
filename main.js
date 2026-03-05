// Hamburger Menu
const hamburger = 
document.querySelector(".hamburger");
const navLinks = 
document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});

// Counter Animation
const counters = 
document.querySelectorAll(".counter");
counters.forEach(counter => {
    const update = () => {
        const target =
        +counter.getAttribute("data-target");
        const count = 
        +counter.innerText;
        const increment = target / 100;
        if (count < target) {
            counter.innerText =
            Math.ceil(count + increment);
            setTimeout(update, 20);
        } else {
            counter.innerText = target
        }
    };
});