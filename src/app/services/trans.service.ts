import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransService {

  datos: any
  constructor() { }

  setArray(array: any){
    this.datos = array;
  }

  getArray(){
    return this.datos;
  }

  cleanArray(){
    this.datos = "";
  }
}
