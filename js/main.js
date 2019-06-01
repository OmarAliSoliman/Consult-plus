$(function(){
    'use strict';
    //Adjust Slider Height;
    var winh = $(window).height(),
    upperh = $('.upper-bar').innerHeight();
    $('.slider, .carousel-item').height(winh-upperh);



    // adjust testimonial slider
    $("#testimonail-slider").owlCarousel({
        items:1,
        itemsDesktop:[1000,1],
        itemsDesktopSmall:[979,1],
        pagination:false,
        navigation:true,
        dotsEach:true,
        navigationText:["",""],
        slideSpeed:1000,
        autoplay:true,
        loop:true,
    });

    //Adjust-modal to cards evry modal has diffrent id and datat-target
    $('#myModal-1').on('shown.bs.modal', function () {
        $('#myInput').trigger('focus')
      });

      $('#myModal-2').on('shown.bs.modal', function () {
        $('#myInput').trigger('focus')
      });

      $('#myModal-3').on('shown.bs.modal', function () {
        $('#myInput').trigger('focus')
      });

      $('#myModal-4').on('shown.bs.modal', function () {
        $('#myInput').trigger('focus')
      });

       $('.bd-example-modal-lg').on('shown.bs.modal', function () {
        $('#myInput').trigger('focus')
      });

      $('.bd-example-modal-xl').on('shown.bs.modal', function () {
        $('#myInput').trigger('focus')
      });

      $('.bd-example-modal-sm').on('shown.bs.modal', function () {
        $('#myInput').trigger('focus')
      });

      

});  



