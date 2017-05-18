function changeView(btnId) {
    if(btnId == "about") {
        jQuery('#about-text').css("display", "block");
        jQuery('#about-text').css({'opacity':0}).animate({'opacity':1});
        jQuery('#our-mission').css("display", "none");
        jQuery('#our-goals').css("display", "none");
    }
    else if(btnId == "mission") {
        jQuery('#our-mission').css("display", "block");
        jQuery('#our-mission').css({'opacity':0}).animate({'opacity':1});
        jQuery('#about-text').css("display", "none");
        jQuery('#our-goals').css("display", "none");
    }
    else if(btnId == "goals") {
        jQuery('#our-goals').css("display", "block");
        jQuery('#our-goals').css({'opacity':0}).animate({'opacity':1});
        jQuery('#about-text').css("display", "none");
        jQuery('#our-mission').css("display", "none");
    }
  console.log(btnId);
}

jQuery("#about [role='group'] button").on('click', function(){
    jQuery(this).siblings().removeClass('btn-active')
    jQuery(this).addClass('btn-active');
  console.log("btnId");
});

// hide menu on clicking on link
jQuery('.page-scroll').on('click', function() {
  jQuery('.navbar-main-collapse').collapse('hide');
});

jQuery(document).ready(function () {
  jQuery(document).on("scroll", onScroll);
});

function onScroll(event){
  var scrollPos =jQuery(document).scrollTop() + 50;
   jQuery('#menu-center a').each(function () {
        var currLink =jQuery(this);
        var refElement =jQuery(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
           jQuery('#menu-center ul li a').removeClass("nav-active");
            currLink.addClass(" nav-active");
        }
        else{
            currLink.removeClass(" nav-active");
        }
    });
  }