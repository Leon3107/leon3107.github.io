function blurInput(){
    var menu = document.getElementById('menu');
    menu.blur();
}

function closePopUp() {
    var popup = document.getElementById('gallery-popover');
    popup.classList.remove("active");

}

function openPopUp(source, description) {
    var popup = document.getElementById('gallery-popover');
    popup.classList.add("active");

}