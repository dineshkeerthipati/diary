import {Component, EventEmitter, Inject, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {EventService} from '../../services/event.service';
import {EventModel} from '../../models/event.model';
import {Router} from '@angular/router';
import {Data} from '../../services/Data';
import {Subscription} from 'rxjs';
import {MAT_DIALOG_DATA, MatDialog, MatDialogConfig, MatDialogRef, MatTableDataSource} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ExpenseModel} from '../../models/expense.model';
import {ExpenseService} from '../../services/expense.service';
import {LookupModel} from '../../models/lookup.model';
import {GoogleMapsService} from '../../services/google.maps.service';
import {error} from 'selenium-webdriver';

@Component({
  selector: 'app-all-events',
  templateUrl: './all-events.component.html',
  styleUrls: ['./all-events.component.css']
})
export class AllEventsComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  private geoCordSubscription: Subscription;
  // events: any = [];
  expenses: any = [];
  dataSource: any = [];
  displayedColumns: string[] = ['card', 'purchaseType', 'amount', 'actions'];
  selectedRow: ExpenseModel;
  @Output() selectedEvent = new EventEmitter<EventModel>();
  coords = {};

  constructor(private eventService: EventService, private router: Router, private data: Data,
              public matDialog: MatDialog, private expenseService: ExpenseService, private mapService: GoogleMapsService) {
  }

  ngOnInit() {
    // this.events = this.eventService.getEvents();
    /*this.events = new MatTableDataSource<EventModel>(this.events);
    this.subscription = this.eventService.eventSubject.subscribe(events => {
      this.events.data = events;
    });*/
    this.expenses = this.expenseService.getExpenses();
    this.dataSource = new MatTableDataSource<ExpenseModel>(this.dataSource);
    this.dataSource.data = this.expenses;
    this.subscription = this.expenseService.expenseSubject.subscribe(results => {
      this.dataSource.data = results;
    });
    this.geoCordSubscription = this.mapService.getGeoCordinates('5901 Montrose rd, Rockville, MD').subscribe(
      (res: any) => {
        this.coords = res.results[0].geometry.location;
      },
      err => {
        console.log(err);
      }
    );
  }

  onEdit(element: EventModel) {
    this.selectedEvent.emit(element);
    // this.data.storage = element;
    // this.router.navigate(['diary/new']);
  }

  onDelete(element: EventModel) {
    console.log(element);
  }

  openExpenseDialog(index?): void {
    console.log(index);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
      dialogConfig.data = {
        index: index,
        value: (index > -1) ? this.expenses[index] : null
      };
    const dialogRef = this.matDialog.open(ExpenseDialog, dialogConfig);
    dialogRef.updateSize('70%', '');
    dialogRef.afterClosed().subscribe(result => {
      if (result.index > -1) {
        this.expenseService.updateExpense(result.index, result.value);
      } else if (result) {
        this.expenseService.addExpense(result.value);
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.geoCordSubscription.unsubscribe();
  }

  onRowClick(row: ExpenseModel): void {
    this.selectedRow = row;
    const addr = row.address.addressLine1 + ', ' + row.address.city + ', ' + row.address.state;
    this.geoCordSubscription = this.mapService.getGeoCordinates(addr).subscribe(
      (res: any) => {
        this.coords = res.results[0].geometry.location;
      },
      err => {
        console.log(err);
      }
    );
      console.log(this.selectedRow);
  }
}

@Component({
  selector: 'app-expense-dialog',
  templateUrl: 'expense-dialog.html'
})
export class ExpenseDialog implements OnInit {
  expenseForm: FormGroup;
  cardLookups: LookupModel[];
  purchaseLookups: LookupModel[];
  states: LookupModel[];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialogRef: MatDialogRef<ExpenseDialog>,
              private fb: FormBuilder, private expenseService: ExpenseService) {
    this.getLookups();
  }

  ngOnInit(): void {
    this.buildForm();
    if (this.data.index > -1) {
      this.expenseForm.patchValue(this.data.value);
    }
  }

  buildForm(): void {
    this.expenseForm = this.fb.group({
      card: ['', Validators.compose([Validators.required])],
      amount: ['', Validators.compose([Validators.required])],
      purchaseType: ['', Validators.compose([Validators.required])],
      summary: [''],
      address: this.fb.group({
        addressLine1: [''],
        city: [''],
        state: [''],
        zipCode: ['', Validators.compose([Validators.minLength(5),
          Validators.maxLength(5)])]
      }),
      createdDate: [new Date()],
      updatedDate: [''],
      dirtyStatus: ['insert'],
      deleteInd: ['N']
    });
  }

  numberOnly(event: any) {
    return (event.keyCode >= 48 && event.keyCode <= 57);
  }

  public validateNumberOnly(event: any) {
    if (!this.numberOnly(event)) {
      event.preventDefault();
    }
  }

  save(): void {
    const sendObj = {
      index: this.data.index,
      value: this.expenseForm.value
    };
    this.dialogRef.close(sendObj);
  }

  getLookups() {
    this.cardLookups = this.expenseService.getLookups('card');
    this.purchaseLookups = this.expenseService.getLookups('purchase');
    this.states = this.expenseService.getLookups('state');
    console.log(this.states);
  }
}
