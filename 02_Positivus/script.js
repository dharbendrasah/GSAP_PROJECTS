function firstPageAnim() {
  let tl = gsap.timeline();
  tl.from(".nav .logo", {
    y: -20,
    duration: 0.3,
    delay: 0.5,
    opacity: 0,
  });

  tl.from(".nav .nav-item", {
    y: -20,
    opacity: 0,
    stagger: 0.10
  });

  tl.from(".hero-left-elem", {
    x: "-30%",
    opacity: 0,
    stagger: 0.3
  }, "hero-anim");

  tl.from(".hero-right img", {
    opacity: 0,
    duration: 1
  }, "hero-anim");

  tl.from(".company-logo img", {
    y: 50,
    opacity: 0,
    stagger: 0.1
  });
}

function secondPageAnim() {
  let tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".services",
      scroller: "body",
      end: "bottom 50%",
      scrub: 1
    }
  });

  tl2.from(".services .heading-para", {
    y: 30,
    opacity: 0,
  });

  tl2.from(".services .box.box1", {
    x: -50,
    opacity: 0,
  }, "row1");
  tl2.from(".services .box.box2", {
    x: 50,
    opacity: 0,
  }, "row1");

  tl2.from(".services .box.box3", {
    x: -50,
    opacity: 0,
  }, "row2");
  tl2.from(".services .box.box4", {
    x: 50,
    opacity: 0,
  }, "row2");

  tl2.from(".services .box.box5", {
    x: -50,
    opacity: 0,
  }, "row3");
  tl2.from(".services .box.box6", {
    x: 50,
    opacity: 0,
  }, "row3");

  tl2.from(".services .proposal", {
    opacity: 0,
    duration: 1,
  });
}

function thirdPageAnim() {
  let tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: ".case-studies",
      scroller: "body",
      scrub: 1,
      end: "bottom 50%"
    }
  });

  tl3.from(".case-studies .heading-para", {
    y: 30,
    opacity: 0
  });

  tl3.from(".case-studies .box", {
    opacity: 0
  });
}

function fourthPageAnim() {
  let tl4 = gsap.timeline({
    scrollTrigger: {
      trigger: ".contact-us",
      scroller: "body",
      scrub: 1,
      start: "top 80%",
      end: "50% 50%",
    }
  });

  tl4.from(".contact-us .heading-para", {
    y: 30,
    opacity: 0,
  });

  tl4.from(".contact-us .form-container", {
    y: 30,
    opacity: 0,
  });
}

firstPageAnim();
secondPageAnim();
thirdPageAnim();
fourthPageAnim();