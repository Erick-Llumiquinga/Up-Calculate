import { Component, OnInit } from '@angular/core';
import { AlertController, NumericValueAccessor } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { ModalInfoPage } from '../pages/modal-info/modal-info.page';
import { TransService } from '../services/trans.service';


@Component({
  selector: 'app-moda',
  templateUrl: './moda.component.html',
  styleUrls: ['./moda.component.scss'],
})
export class ModaComponent implements OnInit {

  datos: string;
  arrayDatos: number[];
  status: boolean;
  statusInput: boolean;
  total: string;
  arrayCarga: any = [];
  datosObject: any; 
  
  constructor(public alertController: AlertController,public modalController: ModalController, private services:TransService ) { }

  ngOnInit() {
    this.arrayDatos = [];
  }

  calcular = () => {
    let respuesta = [];
    let subTotal = 0;
    this.arrayDatos = this.datos.split(',').map(Number);
    this.datos.length
    this.arrayDatos.sort(ordenar)
    for(let i=1; i <= this.arrayDatos.length - 1; i++){
      for(let j = 0;j <  i; j++){
        if(this.arrayDatos[i] == this.arrayDatos[j]){
          respuesta.push(this.arrayDatos[i]); 
        }
      }
    }

    let breack = false;
    let h = 0;
    let subRespuesta = []
    for(let i=1; i <= respuesta.length - 1; i++){
      for(let j = 0;j <  i; j++){
        if(respuesta[i] == respuesta[j] && breack == false){
          if(subRespuesta[h] != respuesta[i]){
            if(subRespuesta[h+1] != respuesta[i]){
              subRespuesta.push(respuesta[i]);
              breack = true;
            }
          }
        }
      }
      breack = false;
    }

    if(subRespuesta.length == 0){
      this.total = respuesta.toString();
    }
    else{
      this.total = subRespuesta.toString();
    }
    this.arrayDatos = subRespuesta;

    this.cargaDatos();   
    function ordenar(a,b){
      return a - b;
    }
  }

  limpiar = () =>{
    this.arrayDatos = []

    this.total = "" ;
    this.datos = ""
  }

  cargaDatos = () =>{
    let i = 1;
    this.arrayDatos.forEach(element =>{
      this.datosObject = {
        cantidad: `Dato nº ${i++}`,
        datos: element
      }
      this.arrayCarga.push(this.datosObject)
    })
    console.log(this.arrayCarga)
    this.services.setArray(this.arrayCarga);
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Espera!',
      subHeader: 'Datos Vacios',
      message: 'El campo es obligatorio',
      buttons: ['OK']
    });

    await alert.present();
  }

  async abrirModal() {
    const modal = await this.modalController.create({
      component: ModalInfoPage,
    });
    return await modal.present();
  }


}
