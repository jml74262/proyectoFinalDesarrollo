import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticuloCompletoComponent } from './components/articulo-completo/articulo-completo.component';
import { ArticuloCompleto2Component } from './components/articulo-completo2/articulo-completo2.component';
import { ArticuloCompleto3Component } from './components/articulo-completo3/articulo-completo3.component';
import { ArticuloCompleto4Component } from './components/articulo-completo4/articulo-completo4.component';
import { ArticuloCompleto5Component } from './components/articulo-completo5/articulo-completo5.component';
import { ArticuloCompleto6Component } from './components/articulo-completo6/articulo-completo6.component';
import {ArticulosComponent} from './components/articulos/articulos.component'
import {GaleriaComponent} from './components/galeria/galeria.component'
import { PersonasComponent } from './components/personas/personas.component';
import { FormularioComponent } from './components/formulario/formulario.component';


const routes: Routes = [
  {
    path:'',
    component:ArticulosComponent
    
  },
  {
    path:'galeria',
    component: GaleriaComponent
  },
  {
    path:'personas',
    component:PersonasComponent
  },
  {
    path:'formulario',
    component:FormularioComponent
  },
  {
    path:'articuloCompleto',
    component:ArticuloCompletoComponent
  },
  {
    path:'articuloCompleto2',
    component:ArticuloCompleto2Component
  }
  ,
  {
    path:'articuloCompleto3',
    component:ArticuloCompleto3Component
  }
  ,
  {
    path:'articuloCompleto4',
    component:ArticuloCompleto4Component
  }
  ,
  {
    path:'articuloCompleto5',
    component:ArticuloCompleto5Component
  }
  ,
  {
    path:'articuloCompleto6',
    component:ArticuloCompleto6Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
