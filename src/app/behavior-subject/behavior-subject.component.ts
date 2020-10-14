import { Component, OnInit } from '@angular/core';
import { PersonajesService } from '../personajes.service';

@Component({
  selector: 'app-behavior-subject',
  templateUrl: './behavior-subject.component.html',
  styleUrls: ['./behavior-subject.component.scss']
})
export class BehaviorSubjectComponent implements OnInit {
  public listaPersonajesTabla;

  constructor(
    private personajesService: PersonajesService
  ) {
    this.personajesService.listaPj$.subscribe(lista => {
      console.log(lista);
      this.listaPersonajesTabla = lista;
    });
  }

  ngOnInit(): void {
  }

}
