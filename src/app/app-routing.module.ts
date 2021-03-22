import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';

const routes: Routes = [
  { path: '', component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
      { path: 'about-us', loadChildren: () => import('./pages/about-us/about-us.module').then(m => m.HomeModule) },
      { path: 'our-services', loadChildren: () => import('./pages/our-services/our-services.module').then(m => m.OurServicesModule) },
      { path: 'help', loadChildren: () => import('./pages/help/help.module').then(m => m.HelpModule) },
      { path: 'studios', loadChildren: () => import('./pages/studios/studios.module').then(m => m.StudiosModule) },
      { path: 'contact', loadChildren: () => import('./pages/contact/contact.module').then(m => m.ContactModule) }
    ] 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
