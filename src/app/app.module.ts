import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AppRoutingModule } from './app-routing.module';

import { ArticulosComponent } from './components/articulos/articulos.component';
import { ArticuloComponent } from './components/articulo/articulo.component';

import { GaleriaComponent } from './components/galeria/galeria.component';


import { SliderComponent } from './components/slider/slider.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PersonasComponent } from './components/personas/personas.component';
import { PersonaComponent } from './components/persona/persona.component';
import { ArticuloCompletoComponent } from './components/articulo-completo/articulo-completo.component';
import { ArticuloCompleto2Component } from './components/articulo-completo2/articulo-completo2.component';
import { FooterComponent } from './components/footer/footer.component';
import { ArticuloCompleto3Component } from './components/articulo-completo3/articulo-completo3.component';
import { ArticuloCompleto4Component } from './components/articulo-completo4/articulo-completo4.component';
import { ArticuloCompleto5Component } from './components/articulo-completo5/articulo-completo5.component';
import { ArticuloCompleto6Component } from './components/articulo-completo6/articulo-completo6.component';

// import { HttpClientModule } from '@angular/common/http';
// import { FormsModule } from '@angular/forms';
// import { MessageService } from './services/message.service';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ArticulosComponent,
    ArticuloComponent,
    GaleriaComponent,
    SliderComponent,
    PersonasComponent,
    PersonaComponent,
    ArticuloCompletoComponent,
    ArticuloCompleto2Component,
    FooterComponent,
    ArticuloCompleto3Component,
    ArticuloCompleto4Component,
    ArticuloCompleto5Component,
    ArticuloCompleto6Component,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    // HttpClientModule,
    // FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
