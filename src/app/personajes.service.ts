import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Poder } from './behavior-subject/model/Poder';
import * as listaPoder from '../assets/mock/listaPoder.json';


@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  public listaJson: any = (listaPoder as any).default;
  //public listaJson2 = JSON.stringify(listaPoder);

  private listaPj = new BehaviorSubject<Poder[]>([]);
  public listaPj$ = this.listaPj.asObservable();

  constructor() {
    console.log(listaPoder);
    console.log(this.listaJson);
    //console.log(this.listaJson2);

    this.listaPj.next(this.listaJson);
  }


}
