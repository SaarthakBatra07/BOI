var $window = $(window);
var $elem = $(".my-image-container");
var $gotOutOfFrame = false;

function isScrolledIntoView($elem, $window) {
  var docViewTop = $window.scrollTop();
  var docViewBottom = docViewTop + $window.height();

  var elemTop = $elem.offset().top;
  var elemBottom = elemTop + $elem.height();

  return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop) && $gotOutOfFrame);
}

function isScrolledOutView($elem, $window) {
  var docViewTop = $window.scrollTop();
  var docViewBottom = docViewTop + $window.height();

  var elemTop = $elem.offset().top;
  var elemBottom = elemTop + $elem.height();

  return ((elemBottom < docViewBottom) && (elemTop < docViewTop));
}
$(document).on("scroll", function() {
  if (isScrolledIntoView($elem, $window)) {
    $gotOutOfFrame = false;
    $elem.addClass("animate");
    $(function() {
      setTimeout(function() {
        $elem.removeClass("animate");

      }, 1500);
    });
  }
  if (isScrolledOutView($elem, $window)) {
     $gotOutOfFrame = true;
    $elem.removeClass("animate");
  }
});