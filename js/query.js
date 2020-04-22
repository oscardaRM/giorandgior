$(document).ready(function(){

  //SLIDE ANCLA
   $('.ancla').click(function(){
        $('.list-menu').hide();
        $('.header-menu').css('width', '0px');
        $('#nav-icon2').fadeIn();

        var link = $(this);
        var anchor  = link.attr('href');
        $('html, body').stop().animate({
            scrollTop: jQuery(anchor).offset().top
        }, 2000);
        return false;
    });

    //MENU
    $('#nav-icon2').click(function(){
        //$(this).toggleClass('open');
        $(this).fadeOut();
        $('.header-menu').css('width', '350px');
        $('.list-menu').fadeIn(700);
    });
    
    $('.close-button').click(function(){
        $('.list-menu').hide();
        $('.header-menu').css('width', '0px');
        $('#nav-icon2').fadeIn();

    });

    ///END MENU

//SLIDER HOME
    $('.owl-carousel').owlCarousel({
        autoplay:true,
        loop:true,
        nav:false,
        margin:0,
        singleItem:true,
        autoHeight: true,
        stagePadding: 0,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

//END SLIDER HOME


//SCROLL MAGIC
// init controller
var controller = new ScrollMagic.Controller();
// build scene
var scene = new ScrollMagic.Scene({triggerElement: "#trigger1"})
// trigger animation by adding a css class
.setClassToggle("#celular", "bounceInLeft")

// .addIndicators({name: "1 - add a class"}) // add indicators (requires plugin)
.addTo(controller);

var scene2 = new ScrollMagic.Scene({triggerElement: "#trigger1"})
.setClassToggle("#txt-pedido", "bounceInRight")
.addTo(controller);
//END SCROLL MAGIC

$(".promo").mouseenter(function(){
    $(this).find('img').addClass('tada');
    $(this).find('.num-promo').addClass('tada');
});

$(".promo").mouseleave(function(){
    $(this).find('img').removeClass('tada');
    $(this).find('.num-promo').removeClass('tada');
});

$('.item-familia').mouseenter(function(){
    $(this).find('img').addClass('pulse');
});

$('.item-familia').mouseleave(function(){
    $(this).find('img').removeClass('pulse');
});


});


function initMap() {
  // The location of Uluru
  var ptoAereo = {lat: 19.433221, lng: -99.089326};
  var aragon = {lat: 19.457147, lng: -99.068936};
  var snJose = {lat: 19.370806, lng: -99.186093};
  var icon = {
    url: '../gior-dev/img/home/Pizza.png', // url
    scaledSize: new google.maps.Size(50, 50), // scaled size
    origin: new google.maps.Point(0,0), // origin
    anchor: new google.maps.Point(0, 0) // anchor
};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 12, center: ptoAereo});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: ptoAereo, map: map, icon:icon});
  var marker2 = new google.maps.Marker({position: aragon, map: map, icon:icon});
  var marker3 = new google.maps.Marker({position: snJose, map: map, icon:icon});
}