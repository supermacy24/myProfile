import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HomeComponent } from './views/home/home.component';
import { SobreComponent } from './views/sobre/sobre.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon';
import { BarRatingModule } from "ngx-bar-rating";
import { NgxSkillBarModule } from "ngx-skill-bar";
import { ContactoComponent } from './views/contacto/contacto.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SobreComponent,
    ContactoComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    BarRatingModule,
    NgxSkillBarModule,
    MatInputModule,
    MatTabsModule,
  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
