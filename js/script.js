document.addEventListener("DOMContentLoaded", function(){
    // make it as accordion for smaller screens
    if (window.innerWidth < 992) {
    
      // close all inner dropdowns when parent is closed
      document.querySelectorAll('.navbar .dropdown').forEach(function(everydropdown){
        everydropdown.addEventListener('hidden.bs.dropdown', function () {
          // after dropdown is hidden, then find all submenus
            this.querySelectorAll('.submenu').forEach(function(everysubmenu){
              // hide every submenu as well
              everysubmenu.style.display = 'none';
            });
        })
      });
    
      document.querySelectorAll('.dropdown-menu a').forEach(function(element){
        element.addEventListener('click', function (e) {
            let nextEl = this.nextElementSibling;
            if(nextEl && nextEl.classList.contains('submenu')) {	
              // prevent opening link if link needs to open dropdown
              e.preventDefault();
              if(nextEl.style.display == 'block'){
                nextEl.style.display = 'none';
              } else {
                nextEl.style.display = 'block';
              }
    
            }
        });
      })
    }
    // end if innerWidth
    }); 
    // DOMContentLoaded  end
// carousel 
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true, 
    nav:false,
    dot:true,
    autoplay:true,
    smartspeed:2000,
    autoplayTimeout:4000,
    autoplaySpeed:1000,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:1,
        },
        1000:{
            items:1,
        }
    }
})

// coutner up 

$('.counter').counterUp({
    delay: 10,
    time: 1000
});

var mixer = mixitup('.container-ga');


// light box 
lightbox.option({
    'resizeDuration':200,
    'wrapAround':true,
    nav:true
})

// wow 
new WOW().init();


// toggle 
$(document).ready(function(){
    $(".dropdown").hover(function(){
        var dropdownMenu = $(this).children(".dropdown-menu");
        if(dropdownMenu.is(":visible")){
            dropdownMenu.parent().toggleClass("open");
        }
    });
}); 


// sticky nav 
$(document).ready(function(){
    $("#sticker").sticky({topSpacing:0});
  });

// stick 
$(document).ready(function(){
    $(window).on('scroll', function(){
        if ($(window).scrollTop()) {
            $("header").addClass('bgc');
        }else{
            $("header").removeClass('bgc');
        }
    });
});

function myFunction(x) {
    x.classList.toggle("change");
}
$(".toggler-btn").click(function(){
    $("nav").toggleClass("open-nav");
});


// back to top 





(function($) { "use strict";

	//Switch dark/light
	
	$(".switch").on('click', function () {
		if ($("body").hasClass("light")) {
			$("body").removeClass("light");
			$(".switch").removeClass("switched");
		}
		else {
			$("body").addClass("light");
			$(".switch").addClass("switched");
		}
	});
		
	$(document).ready(function(){"use strict";
	
		//Scroll back to top
		
		var progressPath = document.querySelector('.progress-wrap path');
		var pathLength = progressPath.getTotalLength();
		progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
		progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
		progressPath.style.strokeDashoffset = pathLength;
		progressPath.getBoundingClientRect();
		progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';		
		var updateProgress = function () {
			var scroll = $(window).scrollTop();
			var height = $(document).height() - $(window).height();
			var progress = pathLength - (scroll * pathLength / height);
			progressPath.style.strokeDashoffset = progress;
		}
		updateProgress();
		$(window).scroll(updateProgress);	
		var offset = 50;
		var duration = 550;
		jQuery(window).on('scroll', function() {
			if (jQuery(this).scrollTop() > offset) {
				jQuery('.progress-wrap').addClass('active-progress');
			} else {
				jQuery('.progress-wrap').removeClass('active-progress');
			}
		});				
		jQuery('.progress-wrap').on('click', function(event) {
			event.preventDefault();
			jQuery('html, body').animate({scrollTop: 0}, duration);
			return false;
		})
		
		
	});
	
})(jQuery); 

// nav

$('.btn-sidebar').click(function(){
  $(this).toggleClass("click");
  $('.side-bar').toggleClass("show");
});
$('.serv-btn').click(function(){
  $('nav ul .serv-show').toggleClass("show");
  $('nav ul .first').toggleClass("rotate");
});
$('.cont-btn').click(function(){
  $('nav ul .cont-show').toggleClass("show1");
  $('nav ul .third').toggleClass("rotate");
});
$('.fus-btn').click(function(){
  $('nav ul .fus-show').toggleClass("show2");
  $('nav ul .socund').toggleClass("rotate");
});
$('nav ul li').click(function(){
  $(this).addClass("active").siblings().removeClass("active");
})

// Contact form