$(document).ready(function () {
	
	$(document).on("scroll", onScroll);

    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();
        $('a[href^="#"]').removeClass("active");
        $(this).addClass("active");
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    });
});


function onScroll(event) {
	var scrollPosition = $(document).scrollTop();
	$('.navbar a').each(function () {
		var currentLink = $(this);
		var refElement = $(currentLink.attr("href"));
		if (refElement.position().top <= scrollPosition && refElement.position().top + refElement.height() > scrollPosition) {
			$('navbar a').removeClass("active");
			currentLink.addClass("active");
		}
		else {
			currentLink.removeClass("active");
		}
	});
};


$('.img-carousel').slick({
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
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

//footer
function setYear(){
    let d = new Date();
    return document.querySelector("#footerYear").textContent = d.getFullYear();
}
setYear();
