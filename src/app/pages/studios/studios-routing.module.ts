import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { StudiosComponent } from './components/studios.component';

const routes: Routes = [
    { path: '', component: StudiosComponent}
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [
        RouterModule
    ]
})

export class StudiosRoutingModule {

}