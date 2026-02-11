console.log("Hamza Portfolio Loaded 🔥");
const links = document.querySelectorAll('.navbar a');

links.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault(); // باش مانتقلش مباشرة بدون السلاسة
    const target = document.querySelector(link.getAttribute('href')); // جلب القسم
    target.scrollIntoView({ behavior: 'smooth' }); // Smooth Scroll
  });
});
.project-card:hover, .course-card:hover {
  transform: translateY(-5px);          /* يتحرك شوية للفوق */
  box-shadow: 0 8px 20px rgba(0,0,0,0.3); /* ظل جميل */
  transition: all 0.3s ease;            /* حركة سلسة */
}
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      sec.classList.add("show");
    }
  });
});
