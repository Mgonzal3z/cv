import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InfoComponent } from './info/info.component';
import { ProjectsComponent } from './projects/projects.component';
import { XpComponent } from './xp/xp.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderMobileComponent } from './header-mobile/header-mobile.component';

@NgModule({
  declarations: [
    AppComponent,
    InfoComponent,
    ProjectsComponent,
    XpComponent,
    ContactComponent,
    HeaderMobileComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
