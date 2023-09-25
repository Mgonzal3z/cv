import { Component } from '@angular/core';

declare const mobileMenu: any;

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']

})
export class MobileComponent {

  onClick(){
    mobileMenu();
  }

}
