import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {AllEventsComponent} from './all-events/all-events.component';

const DIARY_ROUTES: Routes = [
  /*{path: '', pathMatch: 'full', redirectTo: 'new'},
  {path: 'new', component: NewEventComponent},
  {path: 'all', component: AllEventsComponent}*/
  {path: '', pathMatch: 'full', component: AllEventsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(DIARY_ROUTES)],
  exports: [RouterModule]
})
export class DiaryRoutes { }
