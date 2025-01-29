function blurInput(){
    var menu = document.getElementById('menu');
    menu.blur();
}

function openPopUp(source, text) {
    var popUp = document.getElementById('imagepopover');
    var image = document.getElementById('imagelarge');
    image.src = source;
    popUp.style.display = 'unset';
}
function closePopUp() {
    var popUp = document.getElementById('imagepopover');
    var image = document.getElementById('imagelarge');
    image.src = '';
    popUp.style.display = 'none';
}