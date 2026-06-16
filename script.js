document.addEventListener('DOMContentLoaded', function () {

  // Scroll reveal for sections
  const revealEls = document.querySelectorAll('.work-card, .about-text, .about-stats .stat-block, .tree-col, .contact-box');
  revealEls.forEach((el) => el.classList.add('reveal'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealEls.forEach((el) => observer.observe(el));

  // Sticky header subtle shadow on scroll
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
      header.style.boxShadow = '0 8px 24px rgba(0,0,0,0.25)';
    } else {
      header.style.boxShadow = 'none';
    }
  });
});
