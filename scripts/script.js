var pageState = "home";

document.addEventListener('DOMContentLoaded', () => {
    const topLeftBox        = document.getElementById('top_left_box');
    const topMiddleBox      = document.getElementById('top_middle_box');
    const topRightBox       = document.getElementById('top_right_box');
    const bottomLeftBox     = document.getElementById('bottom_left_box');
    const bottomMiddleBox   = document.getElementById('bottom_middle_box');
    const bottomRightBox    = document.getElementById('bottom_right_box');

    const introText = document.getElementById('intro');
    const secondaryText = document.getElementById('secondary_text');

    topLeftBox.addEventListener('mouseenter', () => {
        if (pageState === "home") {
            introText.style.opacity = '0';
            setTimeout(() => {
                introText.textContent = 'About me...';
                introText.style.fontSize = '6vw';
                introText.style.opacity = '1';
            }, 350);
        }
    });

    topLeftBox.addEventListener('mouseleave', () => {
        if (pageState === "home") {
            introText.style.opacity = '0';
            setTimeout(() => {
                introText.textContent = "Hi, I'm JV!";
                introText.style.fontSize = '6.5vw';
                introText.style.opacity = '1';
            }, 350);
        }
    });


    topLeftBox.addEventListener('click', () => {
        if (pageState === "home") {
            pageState = "about";

            introText.style.opacity = '0';
            secondaryText.style.opacity = '0';

            topMiddleBox.style.opacity = '0';
            topRightBox.style.opacity = '0';

            setTimeout(() => {
                introText.style.opacity = '0';
                topMiddleBox.style.width = '0';
                topRightBox.style.width = '0';

                topLeftBox.style.width = '55%';
                bottomRightBox.style.height = '100%';

                setTimeout(() => {
                    introText.innerHTML = "Jaiveer&nbsp;Chadda";
                    introText.style.translate = '0 -35%';
                    topLeftBox.style.justifyContent = 'center';
                    introText.style.fontSize = '5vw';
                    introText.style.opacity = '1';

                    secondaryText.textContent = "Computer Science & Philosophy Student";
                    secondaryText.style.translate = '0 140%';
                    secondaryText.style.opacity = '1'; // Fade in secondary text
                }, 700);
            }, 350);
        }
    });
});