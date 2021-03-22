import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { SharedModule } from './components/shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardServiceComponent } from './pages/home/components/card-service/card-service.component';
import { TipsComponent } from './pages/home/components/tips/tips.component';
import { AlliesComponent } from './components/shared/allies/allies.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    CardServiceComponent,
    TipsComponent,
    AlliesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
