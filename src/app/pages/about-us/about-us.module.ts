import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../components/shared/shared.module';
import { AboutUsComponent } from './components/about-us.component';
import { AboutUsRoutingModule } from './about-us-routing.module';



@NgModule({
  declarations: [
   AboutUsComponent
],
imports: [
    AboutUsRoutingModule,
    CommonModule,
    SharedModule
]
})
export class HomeModule { }
