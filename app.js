gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
  tablet: { smooth: true },
  smartphone: { smooth: true }
});

locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  }
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// Set up the ScrollTrigger
gsap.from("#nav h2", {
  y: -50,
  opacity: 0,
  delay: 0.4,
  duration: 0.6,
  stagger: 0.3,
  scrollTrigger: {
    trigger: "#main",
    start: "top 50%",
    end: "bottom 50%",
    scrub: true
  }
});

gsap.from("#main H1", {
  x: -500,
  opacity: 0,
  delay: 0.3,
  duration: 0.6,
  stagger: 0.3,
  scrollTrigger: {
    trigger: "#main",
    start: "top 50%",
    end: "bottom 50%",
    scrub: true
  }
});

gsap.from("img", {
  x: -50,
  opacity: 0,
  delay: 0.3,
  rotate: 45,
  stagger: 0.3,
  scrollTrigger: {
    trigger: "#main",
    start: "top 50%",
    end: "bottom 50%",
    scrub: true
  }
});

gsap.from("#detail-info h3", {
  x: -500,
  opacity: 0,
  delay: 0.3,
  stagger: 0.3,
  scrollTrigger: {
    trigger: "#main",
    start: "top 50%",
    end: "bottom 50%",
    scrub: true
  }
});

ScrollTrigger.refresh();