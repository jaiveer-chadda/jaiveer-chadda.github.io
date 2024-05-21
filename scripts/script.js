document.addEventListener('DOMContentLoaded', () => {
    const topLeftBox        = document.getElementById('top_left_box');
    // const topMiddleBox      = document.getElementById('top_middle_box');
    // const topRightBox       = document.getElementById('top_right_box');
    // const bottomLeftBox     = document.getElementById('bottom_left_box');
    // const bottomMiddleBox   = document.getElementById('bottom_middle_box');
    // const bottomRightBox    = document.getElementById('bottom_right_box');

    const introText = document.getElementById('intro');

    topLeftBox.addEventListener('mouseenter', () => {
        introText.style.opacity = '0';
        setTimeout(() => {
            introText.textContent = 'About me...';
            introText.style.fontSize = '6vw';
            introText.style.opacity = '1';
        }, 350);
    });

    topLeftBox.addEventListener('mouseleave', () => {
        introText.style.opacity = '0';
        setTimeout(() => {
            introText.textContent = "Hi, I'm JV!";
            introText.style.fontSize = '6.5vw';
            introText.style.opacity = '1';
        }, 350);
    });
});