function hideAllPirates() {
    const pirates = document.querySelectorAll('.pirata');
    pirates.forEach(pirate => pirate.classList.remove('show'));
    document.querySelectorAll('.overlay-image, .effects-image, .green-image').forEach(element => {
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
