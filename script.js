
const scrollLinks = document.querySelectorAll('nav ul li a');
scrollLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});


const hero = document.querySelector('.hero');
window.addEventListener('scroll', () => {
    if (window.scrollY > hero.clientHeight - 100) {
        document.querySelector('nav').classList.add('scrolled');
    } else {
        document.querySelector('nav').classList.remove('scrolled');
    }
});
