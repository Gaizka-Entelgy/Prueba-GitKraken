import { Component, OnInit } from '@angular/core';
import { interval, timer } from 'rxjs';

@Component({
  selector: 'app-timer-interval',
  templateUrl: './timer-interval.component.html',
  styleUrls: ['./timer-interval.component.scss']
})
export class TimerIntervalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const contador = timer(3000);

    contador.subscribe((n) => {
      console.log('Activado');
    });

    const contador2 = interval(1000);

    contador2.subscribe((n) => {
      console.log(`Han pasado ${n} segundos.`);
    });
  }

}
