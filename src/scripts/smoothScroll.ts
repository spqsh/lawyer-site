import { config, ISmoothScrollItems } from "./config";

export const activateSmoothScroll = (
  array: ISmoothScrollItems[],
  headerHeight: number
) => {
  function offsetPosition(element: HTMLElement) {
    let offsetTop = 0;
    do {
      offsetTop += element.offsetTop;
    } while ((element = element.offsetParent as HTMLElement));
    return offsetTop;
  }

  // const easingFunction = (t: number) => t;

  const scrollToSection = (block: HTMLElement) => {
    let currentScroll = window.scrollY;
    // let completion = 0;
    // let speedBoost = 1;
    const offsetY = offsetPosition(block);
    const intervalToMove = Math.abs(offsetY - currentScroll);

    const interval = setInterval(() => {
      const downDirection = window.scrollY + headerHeight < offsetY;

      // completion =
      //   (intervalToMove - Math.abs(offsetY - currentScroll)) / intervalToMove;
      // speedBoost =
      //   easingFunction(completion) === 0 ? 1 : easingFunction(completion);

      downDirection
        ? (currentScroll += config.scrollSpeed)
        : (currentScroll -= config.scrollSpeed);

      window.scrollTo(0, currentScroll);

      if (
        downDirection
          ? currentScroll + headerHeight > offsetY
          : currentScroll + headerHeight < offsetY
      ) {
        window.scrollTo(0, offsetY - headerHeight + config.scrollSpeed);
        clearInterval(interval);
      }
    }, 5);
  };

  array.forEach((elem) =>
    elem.links.forEach((link) =>
      link.addEventListener("click", (e: MouseEvent) => {
        e.preventDefault();
        scrollToSection(elem.block);
      })
    )
  );
};
