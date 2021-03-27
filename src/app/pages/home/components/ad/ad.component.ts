import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ad',
  templateUrl: './ad.component.html',
  styleUrls: ['./ad.component.scss']
})
export class AdComponent implements OnInit {

  public data;
  constructor() { }

  ngOnInit(): void {
    this.setInfo();
  }
  setInfo() {
    this.data = [
      {
        title: 'Experiencia certificada',
        msg: 'Más de 300 studios webcam y miles de modelos trabajando con nuestro equipo.',
        img: '../../../../../assets/ojo-oki.png'
      },
      {
        title: 'Equipo profesional',
        msg: 'Desarrolla tu proyecto webcam con el apoyo de un equipo multidisciplinario de expertos.',
        img: '../../../../../assets/ojo-oki.png'
      },
      {
        title: 'Servicios globales',
        msg: 'Oki Center se proyecta globalmente para llevar sus servicios a todo aquel que quiera desarrollar su proyecto webcam.',
        img: '../../../../../assets/ojo-oki.png'
      }
    ]
  }

}
