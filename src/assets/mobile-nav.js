const mobileNav = () => {

  const headerBtn = document.querySelector('.headers__bars');
  const mobileNav = document.querySelector('.mobile-nav');

  headerBtn.addEventListener('click', () => {
    mobileNav.style.display = 'flex';
    document.body.style.overflowY = 'hidden';
  });

};




