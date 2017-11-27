// Automatic date for footer
var today = new Date();
var year = today.getFullYear();
var el = document.getElementById('date');
el.innerHTML = "Copyright &copy;" + year + ", Maverick Wire, LLC. All rights reserved.";

// Preloader
$(window).on('load', function() { // makes sure the whole site is loaded 
  $('#status').fadeOut(); // will first fade out the loading animation 
  $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website. 
  $('body').delay(350).css({'overflow':'visible'});
})
