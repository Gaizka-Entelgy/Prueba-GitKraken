import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  // Prueba array.filter()
  public frutas = ['manzana', 'platano', 'uvas', 'mango', 'naranja'];
  public resultadoPrueba3 = [];
  public pruebaFiltrarInput: string;

  onPruebaFilter(peticion: string) {
    this.resultadoPrueba3 = this.frutas.filter(fruta =>
      fruta.toLowerCase().indexOf(peticion.toLowerCase()) > -1);
  }

  // Prueba array.filter() + .map()
  /**/
  public heroes: { nombre: string, alterEgo: string }[] = [
    { "nombre": "Superman", "alterEgo": "Clark Kent" },
    { "nombre": "Batman", "alterEgo": "Bruce Wayne" },
    { "nombre": "Iron Man", "alterEgo": "Tony Stark" },
    { "nombre": "Capitan America", "alterEgo": "Steve Rogers" },
    { "nombre": "Wonder Woman", "alterEgo": "Diana Prince" },
    { "nombre": "Spider-Man", "alterEgo": "Peter Parker" },
    { "nombre": "Ghost Spider", "alterEgo": "Gwen Stacy" }
  ];
  public pruebaFiltrarMapInput: string;
  public resultadoPruebaFilterMap = [];
  onPruebaFilterMap(peticion: string) {
    this.resultadoPruebaFilterMap = this.heroes.filter(heroe =>
      heroe.nombre === this.pruebaFiltrarMapInput)
      .map(heroe => heroe.alterEgo)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
