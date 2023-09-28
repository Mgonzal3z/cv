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
});

