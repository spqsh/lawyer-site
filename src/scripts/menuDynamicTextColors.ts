import { IDynamicNavigationLink } from "./config";

export const activateDynamicNavigationColors = (
  array: IDynamicNavigationLink[],
  headerHeight: number
) => {
  const disableAllLinks = (links: HTMLElement[]) =>
    links.forEach((link) => link.classList.remove("active"));

  const dynamicHeaderLinks = () => {
    disableAllLinks(array.map((el) => el.link));
    const activeElement = array.filter((el) => {
      const blockCoords = el.block.getBoundingClientRect();
      return (
        blockCoords.top <= headerHeight + 50 &&
        blockCoords.height + blockCoords.top - headerHeight > 0
      );
    })[0];
    if (activeElement) activeElement.link.classList.add("active");
  };

  window.addEventListener("scroll", dynamicHeaderLinks);
};
