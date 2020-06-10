AOS.init();

$({ Counter: 0 }).animate({
    Counter: $('.count-num').text()
}, {
    duration: 1000,
    easing: 'swing',
    step: function() {
        $('.Single').text((this.Counter));
    }
});

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

	ga('create', 'UA-7742845-9', 'inorganik.github.io');
    ga('send', 'pageview');
    
// Carousel
function carousel(){
    var swiper = new Swiper('.swiper-container', {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}
//Navbar color chnage
function scroll(){
    $(document).ready(function(){
        $(window).scroll(function(){
            var scroll = $(window).scrollTop();
            if (scroll > 60) {
                $('#menu').css("background" , "#020712");
            }
            else{
                $('#menu').css("background" , "transparent");
            }
        })
    })
}

// Button Click
function btnClick(){
    $('#menu').css("background" , "#020712");
}
function focusout(){
    $('#menu').css("background" , "transparent");
}
