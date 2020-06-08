const burgerBtn = document.getElementById("burger-toggle") as HTMLInputElement;
const navList = document.querySelector(".navigation-list");
const navLinks = document.querySelectorAll(".navigation-list .element .link");

burgerBtn.checked = false;

const burgerMenuHandler = (e: Event) => {
  const btn = e.target as HTMLInputElement;
  btn.checked
    ? navList.classList.add("show")
    : navList.classList.remove("show");
};

const closeNav = () => {
  burgerBtn.checked ? burgerBtn.dispatchEvent(new MouseEvent("click")) : null;
};

burgerBtn.onchange = burgerMenuHandler;

navLinks.forEach((link: HTMLAnchorElement) => (link.onclick = closeNav));
