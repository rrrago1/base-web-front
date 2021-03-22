import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HelpComponent } from './components/help.component';

const routes: Routes = [
    { path: '', component: HelpComponent}
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [
        RouterModule
    ]
})

export class HelpRoutingModule {

}