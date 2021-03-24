import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home.component';
import { HomeRoutingModule } from './home.routing.module';
import { SharedModule } from '../../components/shared/shared.module';
import { AlliesComponent } from '../../components/shared/allies/allies.component';
import { AdComponent } from './components/ad/ad.component';
import { CardServiceComponent } from './components/card-service/card-service.component';

@NgModule({
  declarations: [
    HomeComponent,
    AlliesComponent,
    AdComponent,
    CardServiceComponent
],
imports: [
    HomeRoutingModule,
    CommonModule,
    SharedModule
]
})
export class HomeModule { }
