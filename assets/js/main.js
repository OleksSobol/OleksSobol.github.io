$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();
    $('a[href^="#"]').removeClass("active");
    $(this).addClass("active");
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});

$('.img-carousel').slick({
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    variableWidth: true,
    //   autoplay: true,
    //   autoplaySpeed: 2500,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});

function navbar() {
    var x = document.getElementById("myNavbar");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'assets/js/particles.json', function () {
    console.log('callback - particles.js config loaded');
});
/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */


// animation
const contact = document.querySelector("#contact_menu");

contact.addEventListener("click",function() {
    animate();
});

function animate() {
    anime({
        targets: '.social-network ul li a img ',
        scale: {value: 1.2, duration: 2500},
        // paddingRight: 50,
        marginTop: 20,
        delay: 900,
        translateX: -50,
        direction: 'alternate',
        // loop: true,
        delay: function(el, i, l) {
            return 500 + (i * 500);
        }
    });


}
// end of animation