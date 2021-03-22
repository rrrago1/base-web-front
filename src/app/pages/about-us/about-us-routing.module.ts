import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AboutUsComponent } from './components/about-us.component';

const routes: Routes = [
    { path: '', component: AboutUsComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [
        RouterModule
    ]
})

export class AboutUsRoutingModule {

}