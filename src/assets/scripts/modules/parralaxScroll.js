var parralax = (function() {
  const bg = document.querySelector(".hero__parralax");
  const user = document.querySelector(".hero__user");
  const sectionText = document.querySelector(".hero__title-pic");

  return {
    move: function(block, windowScroll, strafeAmount) {
      var strafe = windowScroll / -strafeAmount + "%";
      var transformString = "translate3d(0," + strafe + ", 0)";
      var style = block.style;
      style.transform = transformString;
      style.webkitTransform = transformString;
    },
    init: function(wScroll) {
      this.move(bg, wScroll, 1000);
      this.move(user, wScroll, 25);
      this.move(sectionText, wScroll, 8);
    }
  };
})();
window.onscroll = function() {
  var wScroll = window.pageYOffset;
  parralax.init(wScroll);
};
