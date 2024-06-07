import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartingComponentComponent } from './starting-component/starting-component.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UbayashikiHQComponent } from './ubayashiki-hq/ubayashiki-hq.component';
import { MuzanHQComponent } from './muzan-hq/muzan-hq.component';

@NgModule({
  declarations: [
    AppComponent,
    StartingComponentComponent,
    ParentComponent,
    ChildComponent,
    NavbarComponent,
    UbayashikiHQComponent,
    MuzanHQComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
