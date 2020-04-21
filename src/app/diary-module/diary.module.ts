import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DiaryRoutes} from './diary.routes';
import {NewEventComponent} from './new-event/new-event.component';
import {AllEventsComponent, ExpenseDialog} from './all-events/all-events.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '../material/material.module';
import { ChartComponent } from './chart/chart.component';
import {ChartsModule} from 'ng2-charts';
import {CurrencyMaskModule} from 'ng2-currency-mask';
import {AgmCoreModule} from '@agm/core';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [
    NewEventComponent,
    AllEventsComponent,
    ExpenseDialog,
    ChartComponent,
    MapComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    DiaryRoutes,
    ChartsModule,
    CurrencyMaskModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDi7-il0COKzcrYMhuDYoodanERnjenvwY'
    })
  ],
  providers: [],
  entryComponents: [
    ExpenseDialog
  ]
})
export class DiaryModule { }
