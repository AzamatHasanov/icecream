const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
});
document.addEventListener('DOMContentLoaded', function () {
    const cakeBoxes = document.querySelectorAll('.cake-box');
    let delay = 0;
    const delayIncrement = 200;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('animate');
                }, delay);

                delay += delayIncrement;
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    cakeBoxes.forEach(box => {
        observer.observe(box);
    });
}); document.querySelector('.menu-toggle').addEventListener('click', function () {
    document.querySelector('.main-txt2').classList.toggle('active');
});