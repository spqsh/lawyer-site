import { activateStickyNavigation } from "./stickyNavigation";
import { activateSmoothScroll } from "./smoothScroll";
import { activateDynamicNavigationColors } from "./menuDynamicTextColors";
import "./burgerMenu";
import "./formEventHandler";
import { IDynamicNavigationLink, ISmoothScrollItems } from "./config";

const header: HTMLElement = document.querySelector(".navigation-container");
const homeBlock: HTMLElement = document.querySelector("#home");
const aboutMeBlock: HTMLElement = document.querySelector("#about-me");
const specBlock: HTMLElement = document.querySelector("#spec");
const mapBlock: HTMLElement = document.querySelector("#find-me");
const contactMeBlock: HTMLElement = document.querySelector("#contact-me");

const goHomeBtns: HTMLElement[] = Array.from(
  document.querySelectorAll("a[href='#home']")
);
const goToAboutMeBtns: HTMLElement[] = Array.from(
  document.querySelectorAll("a[href='#about-me']")
);
const goToSpecBtns: HTMLElement[] = Array.from(
  document.querySelectorAll("a[href='#spec']")
);
const goToMapBtns: HTMLElement[] = Array.from(
  document.querySelectorAll("a[href='#find-me']")
);
const goToContactMeBtns: HTMLElement[] = Array.from(
  document.querySelectorAll("a[href='#contact-me']")
);

const headerHeight = header.getBoundingClientRect().height;

const elementsForDynamicLights: IDynamicNavigationLink[] = [
  { block: homeBlock, link: goHomeBtns[0] },
  { block: aboutMeBlock, link: goToAboutMeBtns[0] },
  { block: specBlock, link: goToSpecBtns[0] },
  { block: mapBlock, link: goToMapBtns[0] },
  { block: contactMeBlock, link: goToContactMeBtns[0] },
];

const elementsForSmoothScroll: ISmoothScrollItems[] = [
  { block: homeBlock, links: goHomeBtns },
  { block: aboutMeBlock, links: goToAboutMeBtns },
  { block: specBlock, links: goToSpecBtns },
  { block: mapBlock, links: goToMapBtns },
  { block: contactMeBlock, links: goToContactMeBtns },
];

window.onload = () => {
  activateStickyNavigation();
  activateDynamicNavigationColors(elementsForDynamicLights, headerHeight);
  activateSmoothScroll(elementsForSmoothScroll, headerHeight);
};
