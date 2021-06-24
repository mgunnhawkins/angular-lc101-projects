import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CrewComponent } from './crew/crew.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { ExperimentsComponent } from './experiments/experiments.component';
import { BackgroundComponent } from './background/background.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CrewComponent,
    EquipmentComponent,
    ExperimentsComponent,
    BackgroundComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
