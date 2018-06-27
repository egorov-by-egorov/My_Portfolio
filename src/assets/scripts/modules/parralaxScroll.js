var parralax = (function() {
  var bg = document.querySelector(".hero__parralax");
  var user = document.querySelector(".hero__user");
  var sectionText = document.querySelector(".hero__title-pic");
  return {
    move: function(block, windowScroll, strafeAmount) {
      var strafe = windowScroll / -strafeAmount + "%";
      var style = block.style;
      style.top = strafe;
    },
    init: function(wScroll) {
      this.move(bg, wScroll, 25);
    }
  };
}());
window.onscroll = function() {
  var wScroll = window.pageYOffset;
  parralax.init(wScroll);
  // console.log(wScroll);
};
