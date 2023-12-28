function hideAllPirates() {
    document.getElementById('imgLuffy').style.display = 'none';
    document.getElementById('imgZoro').style.display = 'none';
    document.getElementById('imgNami').style.display = 'none';
    document.getElementById('overlayRed').style.display = 'none';
    document.getElementById('overlayGreen').style.display = 'none';
    document.getElementById('overlayOrange').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function() {
    hideAllPirates();
});

// ...seu código JavaScript existente...

document.getElementById('jrluffy').addEventListener('click', function() {
    hideAllPirates();
    document.getElementById('imgLuffy').style.display = 'block';
    document.getElementById('overlayRed').style.display = 'block'; // Exibe a imagem de sobreposição vermelha
});

document.getElementById('jrzoro').addEventListener('click', function() {
    hideAllPirates();
    document.getElementById('imgZoro').style.display = 'block';
    document.getElementById('overlayGreen').style.display = 'block'; // Exibe a imagem de sobreposição verde
});

document.getElementById('jrnami').addEventListener('click', function() {
    hideAllPirates();
    document.getElementById('imgNami').style.display = 'block';
    document.getElementById('overlayOrange').style.display = 'block'; // Exibe a imagem de sobreposição laranja
});


