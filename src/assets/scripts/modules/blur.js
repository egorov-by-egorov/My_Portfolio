var blur = (function() {
  var wrapper = document.querySelector(".about-me__form-blur"),
    form = document.querySelector(".about-me__form");
  function getCoords(elem) {
    const box = elem.getBoundingClientRect();
    return {
      top: box.top + window.pageYOffset,
      left: box.left + window.pageXOffset
    };
  }
  return {
    set: function() {
      let top = getCoords(wrapper).top - getCoords(wrapper.parentNode).top;
      var imgWidth = document.querySelector(".about-me").offsetWidth,
        posLeft = -wrapper.offsetLeft,
        blurCSS = form.style;
      blurCSS.backgroundPosition = posLeft + "px" + " " + -top + "px";
    }
  };
})();
blur.set();
window.onresize = function() {
  blur.set();
};
