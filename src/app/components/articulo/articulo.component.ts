import { Component, Input, OnInit } from '@angular/core';
import { Articulo } from 'src/app/models/articulo';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent implements OnInit {
  
  //aqui se traen los objetos del articulos.component
  @Input() articulo:Articulo = new Articulo();

  constructor() { }

  ngOnInit(): void {
  }

}
