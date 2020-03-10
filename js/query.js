$(document).ready(function(){
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



});