import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../components/shared/shared.module';
import { HelpComponent } from './components/help.component';
import { HelpRoutingModule } from './help-routing.module';
import { QuestionComponent } from './components/question/question.component';



@NgModule({
  declarations: [
    HelpComponent,
    QuestionComponent
],
imports: [
    HelpRoutingModule,
    CommonModule,
    SharedModule
]
})
export class HelpModule { }
