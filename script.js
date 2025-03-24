const navLinks = document.getElementsByClassName("main-nav-link");

for (let link of navLinks) {
  link.classList.remove("main-nav-link-active");

  link.addEventListener("mouseenter", function (event) {
    event.target.classList.add("main-nav-link-active");
  });

  link.addEventListener("mouseleave", function (event) {
    event.target.classList.remove("main-nav-link-active");
  });
}
