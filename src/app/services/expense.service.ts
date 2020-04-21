import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {ExpenseModel} from '../models/expense.model';
import {CARD_LOOKUP, CHART_CATEGORIES, CHART_TYPE, PURCHASE_TYPE_LOOKUPS, STATES} from '../shared/lookupConstants/lookup';
import {LookupModel} from '../models/lookup.model';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  public expenseSubject = new Subject<ExpenseModel[]>();
  public expenses: ExpenseModel[] = [
    new ExpenseModel('BOA', 'blaaaa', 'CLTH', '123', new Date('10/17/2019'), null, new Date(), new Date(), 'insert', 'N')
  ];

  getExpenses() {
    return this.expenses;
  }

  addExpense(expense: ExpenseModel): void {
    this.expenses.push(expense);
    this.expenseSubject.next(this.expenses);
  }

  updateExpense(index: number, expense: ExpenseModel) {
    this.expenses[index] = expense;
    this.expenseSubject.next(this.expenses);
  }

  deleteExpense(index: number) {
    this.expenses[index].deleteInd = 'Y';
    this.expenseSubject.next(this.expenses);
  }

  getLookups(code: string): LookupModel[] {
    if (code === 'card') {
      return CARD_LOOKUP.slice();
    }
    if (code === 'purchase') {
      return PURCHASE_TYPE_LOOKUPS.slice();
    }
    if (code === 'chartType') {
      return CHART_TYPE.slice();
    }
    if (code === 'chartCategory') {
      return CHART_CATEGORIES.slice();
    }
    if (code === 'state') {
      return STATES.slice();
    }
  }

  getExpensesByCategory(category?: string) {
    const chart_labels_data = {};
    for (const expense of this.expenses) {
      if (chart_labels_data.hasOwnProperty(expense.purchaseType)) {
        chart_labels_data[expense[category]] += +expense.amount;
      } else {
        // chart_labels_data[expense.purchaseType] = [];
        chart_labels_data[expense[category]] = +expense.amount;
      }
    }
    return chart_labels_data;
  }
}
