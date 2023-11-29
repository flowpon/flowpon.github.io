const heading = document.querySelector('#heading');

const keyframes = {
    opacity: [0,1],
    rotate: ['x 360deg', '0deg'],
};
const options = {
    duration: 1000,
    easing: 'ease',
};

heading.animate(keyframes, options);

