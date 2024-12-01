window.addEventListener('scroll', function () {
  const services = document.querySelectorAll('.service');
  
  services.forEach(service => {
    const servicePosition = service.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    
    if (servicePosition < windowHeight - 100) {
      service.classList.add('visible');
    }
  });
});
