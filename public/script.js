 const sections = document.querySelectorAll('main > div[id]');
  const navLinks = document.querySelectorAll('.nav-link');

 
 

  const tiltContainers = document.querySelectorAll('.image');

    tiltContainers.forEach(container => {
      const tiltImage = container.querySelector('.tilt');

      container.addEventListener('mousemove', (e) => {
        const bounds = tiltImage.getBoundingClientRect();
        const centerX = bounds.left + bounds.width / 2;
        const centerY = bounds.top + bounds.height / 2;

        const deltaX = e.clientX - centerX;
        const deltaY = e.clientY - centerY;

        const rotateX = (+1) * (deltaY / bounds.height) * 20;
        const rotateY = (-1) * (deltaX / bounds.width) * 20;

        tiltImage.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1, 1, 1)`;
      });

      container.addEventListener('mouseleave', () => {
        tiltImage.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
      });
    });