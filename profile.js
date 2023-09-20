document.addEventListener('DOMContentLoaded', function () {
  const scrollLinks = document.querySelectorAll('[data-scroll]');

  scrollLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('data-scroll');
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    });
  });


  const observerLeft = new IntersectionObserver(entries => {
    entries.forEach(entry => {

      const animate = entry.target.querySelectorAll('.animate');
      animate.forEach(animate => {
      animate.classList.remove('fade-left-animation');

      if (entry.isIntersecting) {
        animate.classList.add('fade-left-animation');
        return; // if we added the class, exit the function
        }
      });
    });
  });

  const observerCenter = new IntersectionObserver(entries => {
    entries.forEach(entry => {

      const animate = entry.target.querySelectorAll('.animate');
      animate.forEach(animate => {
      animate.classList.remove('fade-center-animation');

      if (entry.isIntersecting) {
        animate.classList.add('fade-center-animation');
        return; // if we added the class, exit the function
        }
      });
    });
  });

  const observerScaleTop = new IntersectionObserver(entries => {
    entries.forEach(entry => {

      const animate = entry.target.querySelectorAll('.animate');
      animate.forEach(animate => {
      animate.classList.remove('scale-top-animation');

      if (entry.isIntersecting) {
        animate.classList.add('scale-top-animation');
        return; // if we added the class, exit the function
        }
      });
    });
  });

  const observerSlideLeft = new IntersectionObserver(entries => {
    entries.forEach(entry => {

      const animate = entry.target.querySelectorAll('.animate');
      animate.forEach(animate => {
      animate.classList.remove('slide-left-animation');

      if (entry.isIntersecting) {
        animate.classList.add('slide-left-animation');
        return; // if we added the class, exit the function
        }
      });
    });
  });

    observerLeft.observe(document.querySelector('.welcome-part'));
    observerCenter.observe(document.querySelector('.about-title'));
    observerCenter.observe(document.querySelector('.about-part'));
    observerSlideLeft.observe(document.querySelector('.project-title'));
    observerSlideLeft.observe(document.querySelector('.project-text'));
    observerSlideLeft.observe(document.querySelector('.project-list-container'));
    observerSlideLeft.observe(document.querySelector('.skill-part'));

});
