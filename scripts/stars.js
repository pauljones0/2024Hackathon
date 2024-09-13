function stars() {
    const count = 444;
    const stars = document.querySelector('.stars');
    let i = 0;

    const totalHeight = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
    );

    while (i < count) {
        const star = document.createElement('i');
        const x = Math.floor(Math.random() * window.innerWidth);
        const y = Math.floor(Math.random() * totalHeight);

        const size = Math.random() * 4;
        star.style.left = x + 'px';
        star.style.top = y + 'px';
        star.style.width = 1 + size + 'px';
        star.style.height = 1 + size + 'px';

        const duration = Math.random() * 6;

        star.style.animationDuration = 6 + duration + 's';
        star.style.animationDelay = duration + 's';

        stars.appendChild(star);
        i++
    }
}

stars();

window.addEventListener('resize', function() {
    if (!('ontouchstart' in window)) {
        document.querySelector('.stars').innerHTML = '';
        stars();
    }
})