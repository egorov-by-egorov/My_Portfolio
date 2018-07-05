const blog = document.querySelector(".blog");
const btn = document.querySelector(".sidebar-mobile__btn");
const sidebar = document.querySelector(".blog__sidebar");
const sidebarList = document.querySelector(".sidebar__list");
const links = document.querySelectorAll(".sidebar__link");
const articles = document.querySelector(".blog__articles");
const blogTop = blog.getBoundingClientRect().top + window.pageYOffset;

window.addEventListener("scroll", function(e) {
  if (window.pageYOffset > blogTop) {
    sidebarList.classList.add("sidebar__list--active");
    btn.style.width = "70px";
  } else if (
    sidebarList.classList.contains("sidebar__list--active") &&
    window.pageYOffset < blogTop
  ) {
    btn.style.width = "0px";
    sidebarList.classList.remove("sidebar__list--active");
  }
});

btn.addEventListener("click", function() {
  btn.classList.toggle("sidebar-mobile__btn--active");
  sidebar.classList.toggle("blog__sidebar--active");
});

links.forEach(link => {
  link.addEventListener("click", function() {
    btn.classList.remove("sidebar-mobile__btn--active");
    sidebar.classList.remove("blog__sidebar--active");
  });
});

var lastId,
  topMenu = $(".sidebar__nav"),
  topMenuHeight = topMenu.outerHeight() - 15,
  menuItems = topMenu.find("a"),
  scrollItems = menuItems.map(function() {
    var item = $($(this).attr("href"));
    if (item.length) {
      return item;
    }
  });

menuItems.click(function(e) {
  var href = $(this).attr("href"),
    offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 1;
  $("html, body")
    .stop()
    .animate(
      {
        scrollTop: offsetTop
      },
      300
    );
  e.preventDefault();
});

$(window).scroll(function() {
  var fromTop = $(this).scrollTop() + topMenuHeight;
  var cur = scrollItems.map(function() {
    if ($(this).offset().top < fromTop) return this;
  });
  cur = cur[cur.length - 1];
  var id = cur && cur.length ? cur[0].id : "";

  if (lastId !== id) {
    lastId = id;
    menuItems
      .parent()
      .removeClass("sidebar__item--active")
      .end()
      .filter("[href='#" + id + "']")
      .parent()
      .addClass("sidebar__item--active");
  }
});
