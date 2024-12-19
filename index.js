function blurInput(){
    var menu = document.getElementById('menu');
    menu.blur();
}

function openPopUp(source, text) {
    var popUp = document.getElementById('imagepopover');
    var image = document.getElementById('imagelarge');
    var imageText = document.getElementById('imagetext');
    image.src = source;
    imageText.innerHTML = text;
    popUp.style.display = 'block';
}
function closePopUp() {
    var popUp = document.getElementById('imagepopover');
    var image = document.getElementById('imagelarge');
    var imageText = document.getElementById('imagetext');
    image.src = '';
    imageText.innerHTML = '';
    popUp.style.display = 'none';
}