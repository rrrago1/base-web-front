import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../components/shared/shared.module';
import { StudiosComponent } from './components/studios.component';
import { StudiosRoutingModule } from './studios-routing.module';



@NgModule({
  declarations: [
   StudiosComponent
],
imports: [
    StudiosRoutingModule,
    CommonModule,
    SharedModule
]
})
export class StudiosModule { }
