var parralax = (function() {
  const bg = document.querySelector(".hero__parralax");
  const user = document.querySelector(".hero__user");
  const sectionText = document.querySelector(".hero__title-pic");

  return {
    moveUp: function(block, windowScroll, strafeAmount) {
      var strafe = windowScroll / -strafeAmount + "%";
      var transformString = "translate3d(0," + strafe + ", 0)";
      var style = block.style;
      style.transform = transformString;
      style.webkitTransform = transformString;
    },
    moveDown: function(block, windowScroll, strafeAmount) {
      var strafe = windowScroll / strafeAmount + "%";
      var transformString = "translate3d(0," + strafe + ", 0)";
      var style = block.style;
      style.transform = transformString;
      style.webkitTransform = transformString;
    },
    init: function(wScroll) {
      this.moveUp(bg, wScroll, 40);
      this.moveDown(user, wScroll, 20);
      this.moveDown(sectionText, wScroll, 10);
    }
  };
})();
window.onscroll = function() {
  var wScroll = window.pageYOffset;
  parralax.init(wScroll);
};
