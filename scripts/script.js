var pageState = "home";

document.addEventListener('DOMContentLoaded', () => {
    const topLeftBox        = document.getElementById('top_left_box');
    const topMiddleBox      = document.getElementById('top_middle_box');
    const topRightBox       = document.getElementById('top_right_box');
    const bottomLeftBox     = document.getElementById('bottom_left_box');
    const bottomMiddleBox   = document.getElementById('bottom_middle_box');
    const bottomRightBox    = document.getElementById('bottom_right_box');

    const allImages= document.getElementsByTagName('img');

    const introText= document.getElementById('intro');
    const secondaryText= document.getElementById('secondary_text');

    const personalTitleText= document.getElementById('personal_title');
    const flagDiv= document.getElementById('flag_div');
    const personalContentText= document.getElementById('personal_content');

    const educationTitleText= document.getElementById('education_title');
    const schoolLogoDiv= document.getElementById('schools_logos_div');

    const workTitleText= document.getElementById('work_title');
    const workExpDiv= document.getElementById('work_logos_div');


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


    // Home page to about me page
    topLeftBox.addEventListener('click', () => {
        if (pageState === "home") {
            pageState = "about-me";
            topLeftBox.classList.remove('clickable');
            bottomLeftBox.classList.add('clickable');
            bottomMiddleBox.classList.add('clickable');
            bottomRightBox.classList.add('clickable');

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
                bottomMiddleBox.style.width = 'calc(25% - var(--grid-gap))';
                bottomMiddleBox.style.left = 'calc(30% + var(--grid-gap))';
                bottomLeftBox.style.width = '30%';

                bottomLeftBox.style.background = 'white';

                setTimeout(() => {
                    introText.innerHTML = "Jaiveer&nbsp;Chadda";
                    introText.style.translate = '0 -35%';
                    topLeftBox.style.justifyContent = 'center';
                    introText.style.fontSize = '5vw';

                    secondaryText.textContent = "Computer Science & Philosophy Student";
                    secondaryText.style.translate = '0 150%';

                    [
                        introText,
                        secondaryText,
                        personalTitleText,
                        flagDiv,
                        educationTitleText,
                        schoolLogoDiv,
                        workTitleText,
                        workExpDiv
                    ]
                        .forEach(element => {
                        element.style.opacity = '1';
                    });
                }, 500);
            }, 350);
        }
    });


    // About me page to Personal page
    bottomLeftBox.addEventListener('click', () => {
        if (pageState === "about-me") {
            pageState = "about-me/personal";

            bottomLeftBox.classList.remove('clickable');
            bottomLeftBox.classList.remove('expandable');

            [
                personalTitleText,
                flagDiv,
                topLeftBox,
                bottomMiddleBox,
                bottomRightBox
            ]
                .forEach(element => {
                    element.style.opacity = '0';
            });

            setTimeout(() => {
                [
                    topLeftBox,
                    topMiddleBox,
                    topRightBox,
                    bottomMiddleBox,
                    bottomRightBox
                ]
                    .forEach(box => {
                        box.style.width = '0';
                });

                bottomLeftBox.style.width = '100%';
                bottomLeftBox.style.height = '100%';
                bottomLeftBox.style.background = 'gray';

                bottomLeftBox.style.overflow = 'scroll';

                bottomLeftBox.style.justifyContent = 'space-between';
                personalContentText.style.paddingLeft = '4%';
                personalContentText.style.paddingRight = '4%';
                personalContentText.style.textAlign = 'left';

                flagDiv.style.height = '0';

                Array.from(allImages).forEach(img => {
                    img.style.height = '0';
                });

                personalTitleText.textContent = "Personal Profile";
                console.log("ran");

                setTimeout(() => {
                    personalTitleText.style.opacity = '1';
                    personalContentText.style.opacity = '1';
                }, 500);

            }, 500);

        }
    });


});