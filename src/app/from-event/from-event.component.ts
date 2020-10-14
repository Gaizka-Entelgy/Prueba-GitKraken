import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.scss']
})
export class FromEventComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const el = document.getElementById('elemento');

    const mouseMove = fromEvent(el, 'mousemove');

    mouseMove.subscribe((e: MouseEvent) => {
        console.log(`Coordenadas: X: ${e.clientX}, Y: ${e.clientY}`);
    });
  }

}
