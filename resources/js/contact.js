const logos = document.querySelectorAll('.logo');

logos.forEach(logo => {
  logo.addEventListener('mouseenter', event => {
    event.target.style.animationName = 'growSize';
    event.target.style.animationDuration = '0.35s';
    event.target.style.animationFillMode = 'forwards';
  });
});

logos.forEach(logo => {
  logo.addEventListener('mouseleave', event => {
    event.target.style.animationName = 'shrinkSize';
    event.target.style.animationDuration = '0.25s';
    event.target.style.animationFillMode = 'forwards';
  });
});
