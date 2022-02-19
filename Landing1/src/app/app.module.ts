import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { logoComponent } from './logo/logo.component';
import { OffersComponent } from './offers/offers.component';
import { PlayComponent } from './play/play.component';
import { SliderComponent } from './slider/slider.component';
import { CashbackComponent } from './cashback/cashback.component';
import { AlertComponent } from './alert/alert.component';
import { RulesComponent } from './rules/rules.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    logoComponent,
    OffersComponent,
    PlayComponent,
    SliderComponent,
    CashbackComponent,
    AlertComponent,
    RulesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
