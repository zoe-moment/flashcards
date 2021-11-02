$(document).ready(function() {
  $(".clickable-js").click(function() {
    $("#js-showing").toggle();
    $("#js-hidden").toggle();
  });
});
$(document).ready(function() {
  $(".clickable").click(function() {
    $("#fun-showing").toggle();
    $("#fun-hidden").toggle();
  });
});