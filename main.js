let slideIndex = 1;
let dot1 = document.querySelector('#dot1');
let dot2 = document.querySelector('#dot2');
let dot3 = document.querySelector('#dot3');
let dot4 = document.querySelector('#dot4');
let prevBtn = document.querySelector('.prev');
let nextBtn = document.querySelector('.next');
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}
dot1.addEventListener('click', () => currentSlide(1));
dot2.addEventListener('click', () => currentSlide(2));
dot3.addEventListener('click', () => currentSlide(3));
dot4.addEventListener('click', () => currentSlide(4));
prevBtn.addEventListener('click', () => plusSlides(-1));
nextBtn.addEventListener('click', () => plusSlides(1));

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n === 1) {
        prevBtn.className += " showoff";
    } else {
        prevBtn.className = "prev";
    }

    if (n === slides.length) {
        nextBtn.className += " showoff";
    } else {
        nextBtn.className = "next";
    }

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}




//header navbar scroll
$(function () {
    menu = $('nav ul');

    $('#openup').on('click', function (e) {
        e.preventDefault();
        menu.slideToggle();
    });

    $(window).resize(function () {
        var w = $(this).width();
        if (w > 480 && menu.is(':hidden')) {
            menu.removeAttr('style');
        }
    });

    $('nav li').on('click', function (e) {
        var w = $(window).width();
        if (w < 480) {
            menu.slideToggle();
        }
    });
    $('.open-menu').height($(window).height());
});