export const handleScroll = () => {
  const sections = document.querySelectorAll("section");

  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - window.innerHeight * 0.3; // adjust for earlier trigger
    let height = sec.offsetHeight;

    if (top >= offset && top < offset + 1.6 * height) {
      sec.classList.add("show-animate");
    } else {
      sec.classList.remove("show-animate");
    }
  });
};
