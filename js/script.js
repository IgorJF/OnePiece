function hideAllPirates() {
    document.getElementById('imgLuffy').style.display = 'none';
    document.getElementById('imgZoro').style.display = 'none';
}

document.getElementById('jrluffy').addEventListener('click', function() {
    hideAllPirates();
    document.getElementById('imgLuffy').style.display = 'block'; 
});

document.getElementById('jrzoro').addEventListener('click', function() {
    hideAllPirates(); // Primeiro, esconde todas as imagens
    document.getElementById('imgZoro').style.display = 'block'; 
});