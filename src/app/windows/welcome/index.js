

function pushCover() {
  $( "#hide" ).fadeOut( 1800, function() {
    // Animation complete.
  });
  $(".cvr-img").css("min-width", "180px"); 
  $( ".side_menu" ).fadeOut( 500, function() {
    // Animation complete.
  });
  $("#cont").animate({
    left: '-84vw'
  },2000, function() {});

  $(".main-menu").animate({
    left: '18vw'
  },2000, function() {});
  $(".cvr-img").css("min-width","180px");
  console.log("asfawf");
  $(".side-bar").css("z-index","-1"); 
  $(".main-menu").css("z-index","1");

  setTimeout(function() {
  $( ".side_description" ).fadeIn( 1000, function() {
    // Animation complete.
  });
}, 500);
  
}