import { Injectable } from '@angular/core';
import {EventModel} from '../models/event.model';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  public eventSubject = new Subject<EventModel[]>();

  public events: EventModel[] = [];

  constructor() { }

  saveEvent(model: EventModel, dirtySts: String = 'insert', deleteInd: String = 'N') {
    this.events.push(model);
    this.getEvents();
  }

  getEvents(): void {
    this.eventSubject.next(this.events);
  }
}
