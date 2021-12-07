import { Component, OnInit } from '@angular/core';
import{Persona} from '../../models/persona';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  personas: Persona[] = [];
  constructor() { }

  ngOnInit(): void {
    this.personas=[
      {
        Nombre:'Alex',
        Apellidos:'Díaz Becerra',
        Telefono:'4741040129',
        Antiguedad:'11 meses',
        Edad:'19 años'
      },
      {
        Nombre:'Laura Daniela',
        Apellidos:'Pérez Ramírez',
        Telefono:'4474712312',
        Antiguedad:'7 meses',
        Edad:'19 años'
      },
      {
        Nombre:'Josué',
        Apellidos:'Meza Lozano',
        Telefono:'4747946764',
        Antiguedad:'14 meses',
        Edad:'19 años'
      },
      {
        Nombre:'Daniel',
        Apellidos:'Pérez Salgado',
        Telefono:'4778046723',
        Antiguedad:'6 meses',
        Edad:'20 años'
      },
      {
        Nombre:'Nathalie Vianney',
        Apellidos:'Orozco Medina',
        Telefono:'4747929123',
        Antiguedad:'16 meses',
        Edad:'26 años'
      },
      {
        Nombre:'María Guadalupe',
        Apellidos:'Álvarez Prado',
        Telefono:'4732812332',
        Antiguedad:'19 meses',
        Edad:'27 años'
      },
      {
        Nombre:'Pedro',
        Apellidos:'Páramo Saucedo',
        Telefono:'4748237281',
        Antiguedad:'12 meses',
        Edad:'57 años'
      },
      {
        Nombre:'José Alejandro',
        Apellidos:'Díaz Becerra',
        Telefono:'4747272712',
        Antiguedad:'20 meses',
        Edad:'24 años'
      },
      {
        Nombre:'Sergio',
        Apellidos:'Jiménez Granja',
        Telefono:'4740342983',
        Antiguedad:'14 meses',
        Edad:'33 años'
      },
      {
        Nombre:'Jesús',
        Apellidos:'Sandoval Prado',
        Telefono:'4742342342',
        Antiguedad:'19 meses',
        Edad:'67 años'
      }
    ]
  }

}
