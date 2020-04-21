import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {EventService} from '../../services/event.service';
import {EventModel} from '../../models/event.model';

@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.css']
})
export class NewEventComponent implements OnInit {
  public eventForm: FormGroup;
  private maxDate: Date = new Date();
  event: EventModel;

  constructor(private fb: FormBuilder, private eventService: EventService) { }

  ngOnInit() {
    /*this.route.params.subscribe(params => {
      this.event = JSON.parse(params.elem);
    });*/
    this.buildForm();
    /*if (this.data.storage !== undefined && this.data.storage !== null) {
      this.loadForm();
    }*/
  }

  buildForm() {
    this.eventForm = this.fb.group({
      date: ['', Validators.required],
      subject: ['', Validators.required],
      content: ['', Validators.required],
      privacy: ['']
    });
  }

  onFormChanges(): void {
    this.eventForm.valueChanges.subscribe(value => {});
  }

  onSave(): void {
    if (this.event !== undefined && this.event.dirtySts === 'update') {
      this.eventService.saveEvent(this.eventForm.value, 'update', 'N');
    } else {
      this.eventService.saveEvent(this.eventForm.value);
    }
  }

  loadForm(evnt: EventModel): void {
    this.event = evnt;
    this.event.dirtySts = 'update';
    this.eventForm.setValue(this.event);
  }

  onReset(): void {
    this.eventForm.reset();
    if (this.event !== undefined) {
      this.event = undefined;
    }
  }

}
