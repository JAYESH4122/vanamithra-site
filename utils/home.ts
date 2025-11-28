import gsap from "gsap";

export const autoHeight = (elem: HTMLElement, expand: boolean) => {
  const h = elem.scrollHeight;

  gsap.killTweensOf(elem);

  if (expand) {
    gsap.fromTo(
      elem,
      { height: 0, opacity: 0 },
      { height: h, opacity: 1, duration: 0.35, ease: "power2.out" }
    );
  } else {
    gsap.to(elem, {
      height: 0,
      opacity: 0,
      duration: 0.3,
      ease: "power2.in",
    });
  }
};
