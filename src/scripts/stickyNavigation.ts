export const activateStickyNavigation = () => {
  const navContainer: HTMLElement = document.querySelector(
    ".navigation-container"
  );
  const navElement: HTMLElement = document.querySelector(".navigation");
  const headerElement: HTMLElement = document.querySelector("header");

  if (
    headerElement.getBoundingClientRect().bottom <= 0 &&
    navElement.style.position !== "fixed"
  ) {
    navContainer.style.height =
      navElement.getBoundingClientRect().height + "px";
    navElement.style.position = "fixed";
  }

  const stickyNavigation = () => {
    const headerCoords = headerElement.getBoundingClientRect();
    if (headerCoords.bottom <= 0 && navElement.style.position !== "fixed") {
      navContainer.style.height =
        navElement.getBoundingClientRect().height + "px";
      navElement.style.position = "fixed";
    } else if (headerCoords.bottom > 0) {
      navElement.style.position = "relative";
      navContainer.style.height = "auto";
    }
  };

  window.addEventListener("scroll", stickyNavigation);
};
