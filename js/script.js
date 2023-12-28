function hideAllPirates() {
    const pirates = document.querySelectorAll('.pirata');
    pirates.forEach(pirate => pirate.classList.remove('show'));
    document.querySelectorAll('.overlay-image, .effects-image, .green-image, .florest-image, .water-image').forEach(element => {
        element.style.display = 'none';
    });
}

document.getElementById('jrluffy').addEventListener('click', function() {
    hideAllPirates();
    document.getElementById('imgLuffy').classList.add('show');
    document.getElementById('overlayRed').style.display = 'block';
    document.getElementById('redSmoke').style.display = 'block';
});

document.getElementById('jrzoro').addEventListener('click', function() {
    hideAllPirates();
    document.getElementById('imgZoro').classList.add('show');
    document.getElementById('overlayGreen').style.display = 'block';
    document.getElementById('greenSmoke').style.display = 'block';
});

document.getElementById('jrnami').addEventListener('click', function() {
    hideAllPirates();
    document.getElementById('imgNami').classList.add('show');
    document.getElementById('overlayOrange').style.display = 'block';
    document.getElementById('yellowEffect').style.display = 'block';
});

document.getElementById('jrusopp').addEventListener('click', function() {
    hideAllPirates();
    document.getElementById('imgUsopp').classList.add('show');
    document.getElementById('overlayBrown').style.display = 'block';
    document.getElementById('florestEffect').style.display = 'block';
});

document.getElementById('jrsanji').addEventListener('click', function() {
    hideAllPirates();
    document.getElementById('imgSanji').classList.add('show');
    document.getElementById('overlayYellow').style.display = 'block';
    document.getElementById('fireEffect').style.display = 'block';
});

document.getElementById('jrchopper').addEventListener('click', function() {
    hideAllPirates();
    document.getElementById('imgChopper').classList.add('show');
    document.getElementById('overlayPink').style.display = 'block';
    document.getElementById('petalasEffect').style.display = 'block';
});

document.getElementById('jrrobin').addEventListener('click', function() {
    hideAllPirates();
    document.getElementById('imgRobin').classList.add('show');
    document.getElementById('overlayPurple').style.display = 'block';
    document.getElementById('purpleEffect').style.display = 'block';
});

document.getElementById('jrfranky').addEventListener('click', function() {
    hideAllPirates();
    document.getElementById('imgFranky').classList.add('show');
    document.getElementById('overlayBlue').style.display = 'block';
    document.getElementById('blueEffect').style.display = 'block';
});

document.getElementById('jrbrook').addEventListener('click', function() {
    hideAllPirates();
    document.getElementById('imgBrook').classList.add('show');
    document.getElementById('overlayWhite').style.display = 'block';
    document.getElementById('notasEffect').style.display = 'block';
});

document.getElementById('jrjinbei').addEventListener('click', function() {
    hideAllPirates();
    document.getElementById('imgJinbei').classList.add('show');
    document.getElementById('overlayDarkBlue').style.display = 'block';
    document.getElementById('ondasEffect').style.display = 'block';
});