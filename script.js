var tl = gsap.timeline({scrollTrigger:{
    trigger: ".two",
    start: "0% 95%",
    end: "70% 50%",
    scrub: true,
    // markers: true,
}})

tl.to("#fanta", {
    top: "120%",
    left: "0%",
    duration: 1.5, // increase duration to smooth out
}, 'orange')
tl.to("#orange-cut", {
    top: "160%",
    left: "23%",
    duration: 1.5, // match with the rest
}, 'orange')
tl.to("#orange",{
    width: "15%",
    top:"160%",
    right: "10%"
}, 'orange')
tl.to("#leaf",{
    top:"110%",
    rotate: "130deg",
    left: "70%"
}, 'orange')
tl.to("#leaf2",{
    top:"110%",
    rotate: "130deg",
    left: "0%"
}, 'orange')


var tl2 = gsap.timeline({scrollTrigger:{
    trigger: ".three",
    start: "0% 95%",
    end: "20% 50%",
    scrub: true,
    // markers: true,
}})

tl2.from(".lemon1", {
    rotate: "-90deg",
    x: "-100%",
    y: "110%", // Replace left/top with x/y
    duration: 1.5,
    ease: "power3.out",
  }, 'ca')
  .from("#cocacola", {
    rotate: "-90deg",
    y: "110%",
    x: "-100%", // Replace left/top with x/y
    duration: 1.5,
    ease: "power3.out",
  }, 'ca')
  .from(".lemon2", {
    rotate: "90deg",
    x: "100%",
    y: "110%",
    duration: 1.5,
    ease: "power3.out",
  }, 'ca')
  .from("#pepsi", {
    rotate: "90deg",
    y: "110%",
    x: "100%", // Replace left/top with x/y
    duration: 1.5,
    ease: "power3.out",
  }, 'ca');

tl2.to("#orange-cut",{
    width:"18%",
    left: "42%",
    top: "204%"
}, 'ca')
tl2.to("#fanta",{
    width:"35%",
    top: "210%",
    left: "33%",
}, 'ca')

// Initialize ScrollSmoother
ScrollSmoother.create({
    smooth: 1.5,       // Controls how smooth the scrolling will be (higher values are slower)
    effects: true      // Enables element-based effects (like in ScrollTrigger)
  });
  