var pageState = "home";

const loremIpsum = `
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum metus ipsum, convallis quis porta vulputate, tincidunt nec dui. Integer ac augue quis felis vulputate mollis. Aenean enim est, dignissim vel pellentesque consectetur, dictum fringilla tellus. Aenean lobortis tempus fringilla. In dignissim, erat nec tempor lacinia, risus orci aliquet mauris, a sollicitudin massa enim eu dui. Vestibulum posuere erat sagittis tristique euismod. Donec quam elit, ultricies id posuere vitae, facilisis eu metus. Integer eu ante fermentum, vestibulum ipsum a, dictum sem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque scelerisque posuere interdum. Nulla in sapien libero. In ut ipsum ac mauris efficitur tempus. Duis varius, metus a scelerisque convallis, nibh turpis elementum ligula, et posuere massa purus nec purus. Nullam dapibus rhoncus diam, at ultricies augue efficitur sit amet. Nunc neque quam, pulvinar ac elit quis, consectetur finibus ligula. In quis orci purus.
                    <br><br>
                    Donec lectus ante, interdum vitae sagittis in, pharetra nec tellus. Curabitur ac mi leo. Donec vel tortor quis elit consequat fermentum. Pellentesque ac rhoncus tellus, sed venenatis diam. Donec et sem non lacus convallis efficitur. Etiam bibendum ut lacus in semper. Ut a velit eget justo egestas venenatis eget at massa. Duis vitae arcu sapien. Curabitur nec euismod velit. Praesent quis placerat dolor. Praesent pulvinar commodo turpis sit amet sodales. Aliquam posuere metus a est rhoncus, quis fermentum mi condimentum. Vestibulum pretium interdum congue. Aliquam tempor lorem et eros tristique, sed imperdiet turpis facilisis.
                    <br><br>
                    Nam feugiat augue eu bibendum rutrum. Nulla elit ligula, posuere at mauris sed, facilisis pharetra velit. In turpis tortor, venenatis sed tempor ac, feugiat id nisl. Nullam fermentum felis vitae mollis hendrerit. Sed nec porta risus, nec luctus metus. Cras eu augue a quam sollicitudin convallis gravida et lorem. Nunc lectus purus, cursus sed maximus eget, ullamcorper ut lorem. Nulla in malesuada massa, nec laoreet est. Aenean condimentum quam ac massa gravida, a rutrum dui pellentesque. Sed auctor vitae neque at cursus. Curabitur turpis felis, mattis nec elit ac, auctor tincidunt orci. Phasellus tristique, arcu et consequat maximus, magna magna varius nibh, nec pulvinar leo neque sit amet nisl.
                    <br><br>
                    Etiam rutrum porta tristique. Suspendisse ultricies enim in tincidunt venenatis. Phasellus odio sapien, ultrices sit amet dignissim nec, fringilla quis felis. Proin sit amet mattis ante. Sed consectetur eget erat non ornare. Mauris sagittis turpis eu ligula congue tempor. Curabitur vehicula at nisi quis ornare. Fusce eu purus at nunc malesuada tempus in vel tortor. Ut semper et ipsum sit amet imperdiet. Ut posuere molestie tellus quis consequat. Nulla porttitor, justo sed dignissim ultrices, velit est lacinia dolor, vel elementum risus metus vel urna. Curabitur tempus ultricies leo in posuere. Etiam condimentum mollis urna, quis lobortis diam ullamcorper et. Fusce elementum at mi eu pulvinar.
                    <br><br>
                    Sed non quam nisl. Suspendisse cursus felis vel aliquam faucibus. Cras non libero sed mauris facilisis fringilla sit amet sed risus. Donec euismod at diam sed eleifend. Vivamus magna tortor, molestie vitae pulvinar eget, tempor a massa. Maecenas vestibulum purus augue, at molestie arcu accumsan et. Quisque sed eros ipsum. Nullam placerat enim eget erat dignissim volutpat. Mauris non interdum elit, sit amet sodales diam.
                    <br><br>
                    Integer odio enim, imperdiet euismod erat et, dapibus luctus lorem. Mauris non diam mi. Cras tempor ante urna, eget consequat nisl varius sit amet. Donec mattis eget quam et iaculis. Pellentesque ultricies nisl a odio ornare, non posuere justo tempor. Mauris ac euismod nisl. Nunc gravida accumsan ipsum, eget congue turpis ultrices non. Morbi ultrices nunc finibus, feugiat arcu id, egestas urna. Pellentesque quis volutpat erat. Integer consequat felis tortor, eget mollis ligula lacinia id. Morbi sodales volutpat nunc eu tincidunt. Suspendisse convallis euismod euismod. Nunc nisl quam, tempor ac rhoncus ut, malesuada ut libero. Aenean augue eros, convallis sit amet lacus vel, bibendum elementum nisl. Aliquam eu eleifend libero, sed pulvinar metus.
                    <br><br>
                    Vestibulum suscipit maximus vehicula. Quisque vitae velit sed ante interdum mollis sit amet at erat. Donec quis feugiat augue, eget aliquam nibh. Vivamus suscipit ligula convallis mi hendrerit tempus. Morbi fermentum porttitor dui, ut sodales lectus efficitur non. Aliquam commodo libero nisi, a pharetra justo tincidunt porttitor. Quisque tristique, est non pharetra venenatis, felis nunc vehicula eros, volutpat luctus est orci aliquam purus. Maecenas condimentum ipsum mauris, nec posuere sem euismod lacinia. Praesent vehicula mattis felis, lacinia venenatis quam scelerisque non. Nullam pellentesque purus id massa tincidunt bibendum. Sed ornare euismod sollicitudin. Nam dapibus ante vitae est aliquet consectetur. Ut commodo orci lorem, in blandit leo volutpat id. In ornare ac nulla vel ullamcorper. Nulla facilisi.
                    <br><br>
                    Fusce vulputate dui id dolor tincidunt auctor. Morbi facilisis augue in tincidunt dictum. In commodo condimentum ultrices. Sed eget efficitur mauris. Nunc leo nibh, pretium at enim ac, venenatis tempor orci. Etiam tempor ornare odio, id suscipit nunc consequat nec. Sed in massa eu sem sollicitudin dictum. Vestibulum cursus urna eu gravida condimentum. Sed interdum ut nibh quis ullamcorper. Duis rutrum tincidunt tortor in tempor. Pellentesque vitae dolor sit amet dolor laoreet dapibus sit amet eget mi. Mauris ac consectetur tellus, a convallis dolor. Praesent efficitur felis id ullamcorper fringilla. Proin ultricies, dolor a fermentum suscipit, neque ligula consectetur ipsum, placerat rutrum sapien felis ac orci.
                    <br><br>
                    Fusce aliquet pellentesque malesuada. Nullam id nulla ut erat accumsan porta a a dolor. Cras commodo egestas consectetur. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum elementum justo non ligula ullamcorper luctus. Proin ac ante justo. Nullam velit purus, auctor at venenatis ut, accumsan eget ante. Nam vel massa lobortis, ultricies massa sed, malesuada enim. Integer facilisis nulla nec quam semper auctor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi vitae sapien magna.
                    <br><br>
                    Suspendisse potenti. Morbi interdum lobortis mattis. Donec convallis volutpat lacus. Fusce faucibus eros eu lectus tincidunt, et maximus lorem rhoncus. Morbi non arcu mollis, lacinia lorem eu, luctus neque. Suspendisse id suscipit ipsum. Curabitur sit amet nisl porta eros ultricies volutpat. Vivamus feugiat, ipsum eget viverra placerat, nulla turpis gravida mi, ac bibendum leo purus non lectus.
                    <br><br>
                    Curabitur quis dictum orci, nec sodales massa. Donec massa justo, euismod non tincidunt quis, mollis sit amet neque. Mauris a ultricies est. Pellentesque dolor nisi, faucibus ultrices massa id, venenatis malesuada dui. In hac habitasse platea dictumst. Mauris sed volutpat augue. Maecenas in sagittis tellus.
                    <br><br>
                    Curabitur eu velit sed nisl elementum rutrum et vehicula odio. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque id arcu quis mauris luctus vehicula at a ipsum. Sed placerat felis tortor, sed tincidunt risus egestas vel. Nullam arcu ipsum, consequat ut lacus id, laoreet efficitur nisl. Nunc ac scelerisque sapien. Suspendisse dignissim enim vel dignissim dictum. Nunc varius nisl faucibus semper porttitor. Donec finibus purus magna, eu congue urna viverra sit amet. Donec gravida, augue sit amet molestie posuere, dui tortor laoreet ex, vitae tempus magna nibh ac ligula. Aliquam erat volutpat.
                    <br><br>
                    Nullam nec massa maximus, maximus arcu ut, scelerisque eros. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur nulla libero, sodales quis velit ut, volutpat pretium nisl. Cras gravida fringilla libero a laoreet. In viverra congue arcu. Aenean nec enim ornare, dapibus metus eu, porttitor felis. Sed ut congue ante, dignissim efficitur turpis. Fusce sit amet blandit nisi, auctor consequat ligula. In eleifend vestibulum metus, vel interdum nulla rhoncus ut. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris vel nisl elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed nec augue imperdiet, interdum quam sed, euismod neque. Nunc dolor lorem, luctus eu faucibus vitae, vulputate in felis. Ut mattis, sapien vitae lobortis accumsan, tellus diam interdum metus, nec blandit nisl erat non sapien.
                    <br><br>
                    Sed congue ornare volutpat. Curabitur eu libero dapibus, semper massa vitae, vehicula nisl. Nullam scelerisque, nibh quis dignissim eleifend, sem purus ornare sem, sit amet iaculis quam sem nec nunc. Proin sed elit at odio ultricies aliquet a vel sem. Nulla urna eros, cursus a semper in, convallis vel odio. Pellentesque commodo nunc sit amet rutrum viverra. Suspendisse convallis, neque vitae interdum porttitor, felis quam imperdiet massa, eu elementum dui nibh nec ipsum. Nunc pharetra porta magna ut facilisis. Curabitur iaculis nulla eu orci tempus, at sodales sem volutpat. Aliquam at enim nec nunc volutpat imperdiet eget et libero. Duis et finibus dolor. Vivamus ac risus eget sem tristique egestas. Donec quis ipsum nec ipsum tristique bibendum id non enim. Vestibulum at tincidunt tellus.
                    <br><br>
                    Fusce sagittis pretium maximus. In blandit tellus eu cursus tincidunt. Duis in ipsum a justo consequat pretium. Donec id metus in augue imperdiet mollis sit amet ac quam. Maecenas a neque scelerisque, pharetra arcu sit amet, vestibulum ligula. Vivamus purus ipsum, euismod a purus eget, blandit luctus nisi. Ut viverra elementum risus, eget facilisis orci imperdiet ac. In sem quam, ultricies ac neque non, pretium sodales ligula. Fusce varius vestibulum leo, egestas gravida arcu rhoncus at. Praesent non nisi finibus, scelerisque turpis mattis, fringilla lorem. Aliquam eget sem eleifend, sollicitudin est quis, accumsan lectus. Nam molestie blandit metus sed bibendum. Praesent ut tincidunt sapien, eget tincidunt magna. Donec libero mi, euismod nec diam in, vestibulum laoreet neque.
          `

const topLeftBox        = document.getElementById('top_left_box');
const topMiddleBox      = document.getElementById('top_middle_box');
const topRightBox       = document.getElementById('top_right_box');
const bottomLeftBox     = document.getElementById('bottom_left_box');
const bottomMiddleBox   = document.getElementById('bottom_middle_box');
const bottomRightBox    = document.getElementById('bottom_right_box');

const allImages= document.getElementsByTagName('img');

const backDiv= document.getElementById('back_div');
const backImg= document.getElementById('back_button');

const introText= document.getElementById('intro');
const secondaryText= document.getElementById('secondary_text');

const personalTitleText= document.getElementById('bottom_left_title');
const flagDiv= document.getElementById('flag_div');

const educationTitleText= document.getElementById('bottom_middle_title');
const schoolLogoDiv= document.getElementById('schools_logos_div');

const workTitleText= document.getElementById('bottom_right_title');
const workExpDiv= document.getElementById('work_logos_div');


const allBoxes = [topLeftBox, topMiddleBox, topRightBox, bottomLeftBox, bottomMiddleBox, bottomRightBox];


function makeBoxFullscreen(boxToExpand, title, content, newBackgroundColour= null, doFromRight= false) {
    const titleIdFromBoxId = boxToExpand.id.slice(0, -3) + "title";
    const contentTitle= document.getElementById(titleIdFromBoxId);

    const contentIdFromBoxId = boxToExpand.id.slice(0, -3) + "content";
    const contentText= document.getElementById(contentIdFromBoxId);

    const boxesToHide= allBoxes.filter(item => item !== boxToExpand);
    boxesToHide.forEach(box => { box.style.width = '0'; });

    boxToExpand.style.width = '100%';
    boxToExpand.style.height = '100%';
    if (doFromRight) {
        boxToExpand.style.right = '0';
    } else {
        boxToExpand.style.left = '0';
    }
    if (newBackgroundColour !== null) { boxToExpand.style.background = newBackgroundColour; }
    boxToExpand.style.overflow = 'scroll';
    boxToExpand.style.justifyContent = 'space-between';

    contentText.style.paddingLeft = '4%';
    contentText.style.paddingRight = '4%';
    contentText.style.textAlign = 'left';

    Array.from(allImages).filter(item => item !== backImg).forEach(img => { img.style.height = '0'; });

    contentTitle.textContent = title;
    contentText.innerHTML = content;

    setTimeout(() => {
        contentTitle.style.opacity = '1';
        contentText.style.opacity = '1';
    }, 500);
}

function enterNewPage() {
    console.log('runs');
    if (pageState === "home") {
        console.log('invis');
        backDiv.style.opacity = '0';
        backDiv.classList.remove('clickable');
    } else {
        backDiv.style.opacity = '1';
        console.log('vis');
        backDiv.classList.add('clickable');
    }
}


document.addEventListener('DOMContentLoaded', () => {
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
            enterNewPage();
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
            enterNewPage();

            bottomLeftBox.classList.remove('clickable');
            bottomLeftBox.classList.remove('expandable');

            [
                personalTitleText,
                flagDiv,
                topLeftBox,
                bottomMiddleBox,
                bottomRightBox
            ].forEach(element => {
                    element.style.opacity = '0';
            });

            setTimeout(() => {
                flagDiv.style.height = '0';
                makeBoxFullscreen(bottomLeftBox, "Personal Profile", loremIpsum, 'gray');
            }, 500);
        }
    });


    // About me page to Education page
    bottomMiddleBox.addEventListener('click', () => {
        if (pageState === "about-me") {
            pageState = "about-me/education";
            enterNewPage();

            bottomMiddleBox.classList.remove('clickable');
            bottomMiddleBox.classList.remove('expandable');

            [
                educationTitleText,
                schoolLogoDiv,
                topLeftBox,
                bottomLeftBox,
                bottomRightBox
            ].forEach(element => {
                element.style.opacity = '0';
            });

            setTimeout(() => {
                schoolLogoDiv.style.height = '0';
                makeBoxFullscreen(bottomMiddleBox, "Educational History", loremIpsum);
            }, 500);
        }
    });


    // About me page to Work page
    bottomRightBox.addEventListener('click', () => {
        if (pageState === "about-me") {
            pageState = "about-me/work";
            enterNewPage();

            bottomRightBox.classList.remove('clickable');
            bottomRightBox.classList.remove('expandable');

            [
                workTitleText,
                workExpDiv,
                topLeftBox,
                bottomLeftBox,
                bottomMiddleBox
            ].forEach(element => {
                element.style.opacity = '0';
            });

            setTimeout(() => {
                workExpDiv.style.height = '0';
                makeBoxFullscreen(bottomRightBox, "Work Experience", loremIpsum, null, true);
            }, 500);
        }
    });
});