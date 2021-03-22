import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../components/shared/shared.module';
import { ServicesComponent } from './components/services.component';
import { ServicesRoutingModule } from './our-services-routing.module';
import { OurInfoComponent } from './our-info/our-info.component';
import { SpecificServiceComponent } from './components/specific-service/specific-service.component';



@NgModule({
  declarations: [
    ServicesComponent,
    OurInfoComponent,
    SpecificServiceComponent
],
imports: [
    ServicesRoutingModule,
    CommonModule,
    SharedModule
]
})
export class OurServicesModule { }
