const timeline = gsap.timeline({ repeat: -1 });
const chars = document.querySelectorAll(".text");

gsap.set(".one", { color: "#3498DB" });
gsap.set(".two", { color: "#E74C3C" });
gsap.set(".three", { color: "#F1C40F" });
gsap.set(".four", { color: "#3498DB" });
gsap.set(".five", { color: "#27AE60" });
gsap.set(".six", { color: "#E74C3C" });

timeline.from(chars, { opacity: 1, scale: 0, ease: "sine", delay: 0.25 }).to(
  ".text",
  {
    "--font-weight": 900,
    duration: 0.9,
    ease: "sine.inOut",
    stagger: {
      yoyo: true,
      each: 0.1,
      repeat: -1,
    },
  },
  1
);
