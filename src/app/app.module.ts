import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { ActivePageComponent } from './components/active-page/active-page.component';
import { CharityPageComponent } from './components/charity-page/charity-page.component';
import { SeriePageComponent } from './components/serie-page/serie-page.component';
import { ButtonComponent } from './components/button/button.component';
import { DataService } from './data.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MainPageComponent,
    AboutPageComponent,
    ActivePageComponent,
    CharityPageComponent,
    SeriePageComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
