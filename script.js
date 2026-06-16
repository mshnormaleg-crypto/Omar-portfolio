document.addEventListener('DOMContentLoaded', function () {

  /* ---- Scroll reveal for cards/blocks ---- */
  const revealEls = document.querySelectorAll('.work-card, .about-text, .about-stats .stat-block, .tree-col, .contact-box, .process-frame');
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

  /* ---- Section heading "in-view" text reveal ---- */
  const headingTargets = document.querySelectorAll('.section-head, .about-text');
  const headObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        headObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });
  headingTargets.forEach((el) => headObserver.observe(el));

  /* ---- Sticky header shadow on scroll ---- */
  const header = document.querySelector('.site-header');
  const progressBar = document.getElementById('scrollProgress');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
      header.style.boxShadow = '0 8px 24px rgba(0,0,0,0.25)';
    } else {
      header.style.boxShadow = 'none';
    }

    // Scroll progress bar
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    if (progressBar) progressBar.style.width = pct + '%';
  });

  /* ---- Cursor glow follows mouse (desktop only) ---- */
  const glow = document.getElementById('cursorGlow');
  if (glow && window.matchMedia('(hover: hover)').matches) {
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let curX = mouseX;
    let curY = mouseY;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    function animateGlow() {
      curX += (mouseX - curX) * 0.12;
      curY += (mouseY - curY) * 0.12;
      glow.style.left = curX + 'px';
      glow.style.top = curY + 'px';
      requestAnimationFrame(animateGlow);
    }
    animateGlow();
  }

  /* ---- Magnetic buttons ---- */
  const magnets = document.querySelectorAll('.magnetic');
  magnets.forEach((btn) => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x * 0.25}px, ${y * 0.35}px)`;
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'translate(0, 0)';
    });
  });

});
