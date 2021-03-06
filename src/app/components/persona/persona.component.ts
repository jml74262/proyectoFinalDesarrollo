import { Component, Input, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/persona';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  @Input() persona:Persona = new Persona();
  
  constructor() { }

  ngOnInit(): void {
  }

}
