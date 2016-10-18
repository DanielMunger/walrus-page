$(document).ready(function() {
  $(".click-walrus").click(function() {
    $("#walrus-showing").slideToggle();
    $("#walrus-hidden").slideToggle();
    $("#walrus").slideDown();
  });
  $(".click-penguin").click(function() {
    $("#penguin-showing").toggle();
    $("#penguin-hidden").toggle();
      $("#penguin").slideUp();
      $("#penguin").slideDown();
  });
});
