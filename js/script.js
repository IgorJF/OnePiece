function hideAllPirates() {
    document.getElementById('imgLuffy').style.display = 'none';
    document.getElementById('imgZoro').style.display = 'none';
    document.getElementById('imgNami').style.display = 'none';
    document.getElementById('overlayRed').style.display = 'none';
    document.getElementById('overlayGreen').style.display = 'none';
    document.getElementById('overlayOrange').style.display = 'none';
    document.getElementById('greenSmoke').style.display = 'none';
    document.getElementById('redSmoke').style.display = 'none';
    document.getElementById('yellowEffect').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function() {
    hideAllPirates();
});

// ...seu código JavaScript existente...

document.getElementById('jrluffy').addEventListener('click', function() {
    hideAllPirates();
    document.getElementById('imgLuffy').style.display = 'block';
    document.getElementById('overlayRed').style.display = 'block'; 
    document.getElementById('redSmoke').style.display = 'block';
});

document.getElementById('jrzoro').addEventListener('click', function() {
    hideAllPirates();
    document.getElementById('imgZoro').style.display = 'block';
    document.getElementById('overlayGreen').style.display = 'block'; 
    document.getElementById('greenSmoke').style.display = 'block';
});

document.getElementById('jrnami').addEventListener('click', function() {
    hideAllPirates();
    document.getElementById('imgNami').style.display = 'block';
    document.getElementById('overlayOrange').style.display = 'block'; 
    document.getElementById('yellowEffect').style.display = 'block';
});


