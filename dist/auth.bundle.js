webpackJsonp([3],{100:function(module,exports,__webpack_require__){"use strict";eval("\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIxMDAuanMiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///100\n")},98:function(module,exports,__webpack_require__){"use strict";eval("\n\n__webpack_require__(99);\n\n__webpack_require__(100);\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvYXV0aC5qcz84MWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0EiLCJmaWxlIjoiOTguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuL21vZHVsZXMvZmxpcHBlci5qc1wiO1xuaW1wb3J0IFwiLi9tb2R1bGVzL3BhcnJhbGF4TW92ZS5qc1wiO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Fzc2V0cy9zY3JpcHRzL2F1dGguanMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///98\n")},99:function(module,exports,__webpack_require__){"use strict";eval('\n\n// flipper\n\nvar btn = document.querySelector(".auth__btn");\nvar frontSide = document.querySelector(".flipper__user-card");\nvar backSide = document.querySelector(".flipper__authorization");\nvar goMain = document.querySelector(".flipper__link--back-btn");\n\nbtn.addEventListener("click", function (e) {\n  e.preventDefault();\n  frontSide.style.transform = "rotateY(180deg)";\n  backSide.style.transform = "rotateY(360deg)";\n});\n\ngoMain.addEventListener("click", function (e) {\n  e.preventDefault();\n  frontSide.style.transform = "rotateY(0deg)";\n  backSide.style.transform = "rotateY(180deg)";\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9mbGlwcGVyLmpzPzgwMWMiXSwibmFtZXMiOlsiYnRuIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZnJvbnRTaWRlIiwiYmFja1NpZGUiLCJnb01haW4iLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic3R5bGUiLCJ0cmFuc2Zvcm0iXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBRUEsSUFBTUEsTUFBTUMsU0FBU0MsYUFBVCxDQUF1QixZQUF2QixDQUFaO0FBQ0EsSUFBTUMsWUFBWUYsU0FBU0MsYUFBVCxDQUF1QixxQkFBdkIsQ0FBbEI7QUFDQSxJQUFNRSxXQUFXSCxTQUFTQyxhQUFULENBQXVCLHlCQUF2QixDQUFqQjtBQUNBLElBQU1HLFNBQVNKLFNBQVNDLGFBQVQsQ0FBdUIsMEJBQXZCLENBQWY7O0FBRUFGLElBQUlNLGdCQUFKLENBQXFCLE9BQXJCLEVBQThCLGFBQUs7QUFDakNDLElBQUVDLGNBQUY7QUFDQUwsWUFBVU0sS0FBVixDQUFnQkMsU0FBaEIsR0FBNEIsaUJBQTVCO0FBQ0FOLFdBQVNLLEtBQVQsQ0FBZUMsU0FBZixHQUEyQixpQkFBM0I7QUFDRCxDQUpEOztBQU1BTCxPQUFPQyxnQkFBUCxDQUF3QixPQUF4QixFQUFpQyxhQUFLO0FBQ3BDQyxJQUFFQyxjQUFGO0FBQ0FMLFlBQVVNLEtBQVYsQ0FBZ0JDLFNBQWhCLEdBQTRCLGVBQTVCO0FBQ0FOLFdBQVNLLEtBQVQsQ0FBZUMsU0FBZixHQUEyQixpQkFBM0I7QUFDRCxDQUpEIiwiZmlsZSI6Ijk5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZmxpcHBlclxuXG5jb25zdCBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmF1dGhfX2J0blwiKTtcbmNvbnN0IGZyb250U2lkZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmxpcHBlcl9fdXNlci1jYXJkXCIpO1xuY29uc3QgYmFja1NpZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZsaXBwZXJfX2F1dGhvcml6YXRpb25cIik7XG5jb25zdCBnb01haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZsaXBwZXJfX2xpbmstLWJhY2stYnRuXCIpO1xuXG5idG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGZyb250U2lkZS5zdHlsZS50cmFuc2Zvcm0gPSBcInJvdGF0ZVkoMTgwZGVnKVwiO1xuICBiYWNrU2lkZS5zdHlsZS50cmFuc2Zvcm0gPSBcInJvdGF0ZVkoMzYwZGVnKVwiO1xufSk7XG5cbmdvTWFpbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgZnJvbnRTaWRlLnN0eWxlLnRyYW5zZm9ybSA9IFwicm90YXRlWSgwZGVnKVwiO1xuICBiYWNrU2lkZS5zdHlsZS50cmFuc2Zvcm0gPSBcInJvdGF0ZVkoMTgwZGVnKVwiO1xufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9mbGlwcGVyLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///99\n')}},[98]);