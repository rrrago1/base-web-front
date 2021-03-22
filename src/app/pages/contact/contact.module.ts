import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../components/shared/shared.module';
import { ContactComponent } from './components/contact.component';
import { ContactRoutingModule } from './contact-routing.module';
import { FormContactComponent } from './components/form-contact/form-contact.component';



@NgModule({
  declarations: [
    ContactComponent,
    FormContactComponent
],
imports: [
    ContactRoutingModule,
    CommonModule,
    SharedModule
]
})
export class ContactModule { }
