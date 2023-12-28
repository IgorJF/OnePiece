function hideAllPirates() {
    document.getElementById('imgLuffy').style.display = 'none';
    document.getElementById('imgZoro').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function() {
    hideAllPirates();
});

document.getElementById('jrluffy').addEventListener('click', function() {
    hideAllPirates();
    document.getElementById('imgLuffy').style.display = 'block'; 
});

document.getElementById('jrzoro').addEventListener('click', function() {
    hideAllPirates(); 
    document.getElementById('imgZoro').style.display = 'block'; 
});