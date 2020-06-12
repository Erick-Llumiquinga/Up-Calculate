import { Component, OnInit } from '@angular/core';
import { AlertController, NumericValueAccessor } from '@ionic/angular';

import { ModalController } from '@ionic/angular';
import { ModalInfoPage } from '../pages/modal-info/modal-info.page';
import { TransService } from '../services/trans.service';


@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss'],
})
export class MediaComponent implements OnInit {

  datos: string;
  arrayDatos: number[];
  status: boolean;
  statusInput: boolean;
  total: number;
  arrayCarga: any = [];
  datosObject: any; 
  
  constructor(public alertController: AlertController,public modalController: ModalController, private services:TransService) { }

  ngOnInit() {
    this.arrayDatos = [];
    this.status = false;
    this.statusInput = false;
  }

  calcular = () => {

    this.arrayDatos = this.datos.split(',').map(Number);

    let subTotal = 0;
      this.statusInput = true;
      this.arrayDatos.forEach(element =>{
        subTotal += element
      })
    this.total = Math.floor(subTotal/this.arrayDatos.length);

    this.cargaDatos();
  }

  limpiar = () =>{
    this.arrayDatos = []
    this.total = 0;
    this.datos = ""
    this.services.cleanArray();
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
