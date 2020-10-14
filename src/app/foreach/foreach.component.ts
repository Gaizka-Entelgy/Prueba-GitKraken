import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foreach',
  templateUrl: './foreach.component.html',
  styleUrls: ['./foreach.component.scss']
})
export class ForeachComponent implements OnInit {
  // Prueba array.forEach()

  public tiposDeHeroes = [
    { "personaje": "Superman", "tipo": "kriptoniano" },
    { "personaje": "SuperGirl", "tipo": "kriptoniano" },
    { "personaje": "PowerGirl", "tipo": "kriptoniano" },
    { "personaje": "General Zod", "tipo": "kriptoniano" },
    { "personaje": "Ghost Spider", "tipo": "Araña" },
    { "personaje": "Spiderman", "tipo": "Araña" }
  ];

  public pruebaforEachInput;
  public cantidadPersonajesPorTipo;
  public cont: number = 0;
  public listaHeroes = [];

  onPruebaforEach(peticion) {
    this.cont = 0;
    this.tiposDeHeroes.forEach(heroe => {
      if (peticion === heroe.tipo) {
        this.cont++;
      }
    })
  }
  onPruebaforEach2(peticion) {
    this.listaHeroes = [];
    this.tiposDeHeroes.forEach(heroe => {
      if (peticion === heroe.tipo) {
        this.listaHeroes.push(heroe.personaje);
      }
    });
    console.log(this.listaHeroes);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
