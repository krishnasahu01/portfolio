const toggleButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');
const revealItems = document.querySelectorAll('.reveal');

if (toggleButton && nav) {
    toggleButton.addEventListener('click', () => {
        nav.classList.toggle('open');
    });
}

const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    revealItems.forEach((item) => {
        const elementTop = item.getBoundingClientRect().top;
        if (elementTop < windowHeight * 0.85) {
            item.classList.add('visible');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

const types = [
    'frontend developer',
    'UI designer',
    'creative thinker',
];

let typeIndex = 0;
let char = 0;
const typeElement = document.querySelector('.typed-text');

const typeText = () => {
    if (!typeElement) return;

    const current = types[typeIndex];
    typeElement.textContent = current.slice(0, char);
    char++;

    if (char > current.length) {
        setTimeout(() => {
            char = 0;
            typeIndex = (typeIndex + 1) % types.length;
            typeText();
        }, 1800);
    } else {
        setTimeout(typeText, 80);
    }
};

typeText();
