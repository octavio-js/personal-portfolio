let skills = document.querySelectorAll('.skill');

skills.forEach(skill => {
  skill.addEventListener('mouseenter', event => {
    event.target.style.animationName = 'growSize';
    event.target.style.animationDuration = '0.35s';
    event.target.style.animationFillMode = 'forwards';
  });
});

skills.forEach(skill => {
  skill.addEventListener('mouseleave', event => {
    event.target.style.animationName = 'shrinkSize';
    event.target.style.animationDuration = '0.25s';
    event.target.style.animationFillMode = 'forwards';
  });
});
