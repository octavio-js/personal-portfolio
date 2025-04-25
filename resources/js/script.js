const skills = document.querySelectorAll('.skill');
const projects = document.querySelectorAll('.project');

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

projects.forEach(project => {
  let isOpen = false;

  const projectInfo = project.childNodes[3];
  const header = project.childNodes[1];
  const headerContent = header.innerText;
  const arrow = 0;
  const newHeaderContent = headerContent.slice(0, arrow) + headerContent.slice(arrow + 1);

  project.addEventListener('click', () => {
    if(isOpen){
      projectInfo.style.display = 'none';
      header.innerHTML = `→ ${newHeaderContent}`;
      isOpen = false;
    } else {
      projectInfo.style.display = 'block';
      header.innerHTML = `↓ ${newHeaderContent}`;
      isOpen = true;
    }
  });
});
