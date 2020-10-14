import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-array-map',
  templateUrl: './array-map.component.html',
  styleUrls: ['./array-map.component.scss']
})
export class ArrayMapComponent implements OnInit {

  // Prueba array.map()
  public numbers = [1, 5, 10, 15];
  public resultadoPrueba = [];
  public inputPruebaArray: number;

  onPruebaMap() {
    this.resultadoPrueba = this.numbers.map((x: number) => x * this.inputPruebaArray);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
