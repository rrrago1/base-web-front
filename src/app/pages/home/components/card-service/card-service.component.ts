import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'card-service',
  templateUrl: './card-service.component.html',
  styleUrls: ['./card-service.component.scss']
})
export class CardServiceComponent implements OnInit {

  public data: any;
  constructor() { }

  ngOnInit(): void {
    this.setInfo()
  }

  setInfo() {
    this.data = [
      {
        title: 'Tu Oki Abogado',
        msg: 'Abogados expertos en webcam. Contratos de personal como son modelos y monitor…',
        img: '../../../../../assets/card-service-icon.png'
      },
      {
        title: 'Tu Oki Contador',
        msg: 'Abogados expertos en webcam. Contratos de personal como son modelos y monitor…',
        img: '../../../../../assets/card-service-icon.png'
      },
      {
        title: 'Tu Oki Pagador',
        msg: 'Abogados expertos en webcam. Contratos de personal como son modelos y monitor…',
        img: '../../../../../assets/card-service-icon.png'
      },
      {
        title: 'Tu Oki Abogado',
        msg: 'Abogados expertos en webcam. Contratos de personal como son modelos y monitor…',
        img: '../../../../../assets/card-service-icon.png'
      },
      {
        title: 'Tu Oki Contador',
        msg: 'Abogados expertos en webcam. Contratos de personal como son modelos y monitor…',
        img: '../../../../../assets/card-service-icon.png'
      },
      {
        title: 'Tu Oki Pagador',
        msg: 'Abogados expertos en webcam. Contratos de personal como son modelos y monitor…',
        img: '../../../../../assets/card-service-icon.png'
      }
    ]
  }

}
