
let mybutton = document.getElementById("scroll-to-top");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 24 || document.documentElement.scrollTop > 24) {
        mybutton.style.display = "block";
        mybutton.classList.remove("slide-out-right");
    } else {
        mybutton.classList.add("slide-out-right");
    }
	
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}