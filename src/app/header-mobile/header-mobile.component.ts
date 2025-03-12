import { Component } from '@angular/core';

@Component({
  selector: 'app-header-mobile',
  templateUrl: './header-mobile.component.html',
  styleUrls: ['./header-mobile.component.css']
})
export class HeaderMobileComponent {

}

document.addEventListener('DOMContentLoaded', () => {

  const headerBtn = document.querySelector('.header__bars') as HTMLElement;
  const mobileNav = document.querySelector('.mobile-nav') as HTMLElement;
  const mobileLinks = document.querySelectorAll('.mobile-nav__link');

  let isMobileNavOpen = false;

  headerBtn?.addEventListener('click', () => {
    isMobileNavOpen =! isMobileNavOpen;
    if(isMobileNavOpen === true){
      mobileNav.style.display = 'flex';
      document.body.style.overflowY = 'hidden';
    }else{
      mobileNav.style.display = 'none';
      document.body.style.overflowY = 'auto';
    }

  });
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      isMobileNavOpen = false;
      mobileNav.style.display = 'none';
      document.body.style.overflowY = 'auto';
    })
  });

  const themeToggleBtns = document.querySelectorAll('#theme-toggle');

  // estado
  const theme = localStorage.getItem('theme');

  // carga
  theme && document.body.classList.add(theme);

  // handler
  // const handleThemeToggle = () => {
  //   document.body.classList.toggle('light-mode');
  //   if(document.body.classList.contains('light-mode')){
  //     localStorage.setItem('theme', 'light-mode');
  //   }else{
  //     localStorage.removeItem('theme');
  //   }
  // }
  //evento
  // themeToggleBtns.forEach(btn => {
  //   btn.addEventListener('click', handleThemeToggle)
  // });

  function light(){
    if(document.body.classList.contains('light-mode')){
      localStorage.setItem('theme', 'light-mode');
    }else{
      localStorage.removeItem('theme');
    }
  }

});
