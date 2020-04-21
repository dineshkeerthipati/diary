import {Component, ElementRef, Input, OnDestroy, OnInit, Renderer2, ViewChild} from '@angular/core';
import {ChartDataSets, ChartOptions} from 'chart.js';
import {Color, Label} from 'ng2-charts';
import {MONTH_COLORS, MONTHS} from '../../shared/chartConstants/chartdefaults';
import {LookupModel} from '../../models/lookup.model';
import {ExpenseService} from '../../services/expense.service';
import {ExpenseModel} from '../../models/expense.model';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  chartData: ChartDataSets[] = [{
    data: [65, 59, 80, 81, 56, 55, 40, 59, 80, 81, 56, 55],
    backgroundColor: MONTH_COLORS
  }];
  chartLabels: any = MONTHS;
  chartOptions = {
    responsive: true,
  };
  chartColors: Color[] = [
    {
      hoverBorderColor: 'lightblue',
      borderWidth: 0,
      hoverBorderWidth: 2
    },
  ];
  chartLegend = true;
  chhartType = 'pie';
  chartPlugins = [];
  chartCategories: LookupModel[];
  data: ExpenseModel;
  private chartCat = 'purchaseType';
  @ViewChild('bsChart') el: ElementRef;
  @Input('rowSelected')set rowSelected(data: ExpenseModel) {
    this.data = data;
    console.log(this.data);
  }

  constructor(private expenseService: ExpenseService, private renderer2: Renderer2) {
    this.getLookups();
  }

  ngOnInit() {
    console.log('selected row data is: ', this.rowSelected);
    this.subscription = this.expenseService.expenseSubject.subscribe(res => {
      this.getChartData(this.chartCat);
    });
    this.getChartData(this.chartCat);
  }

  getLookups(): void {
    this.chartCategories = this.expenseService.getLookups('chartCategory');
  }

  onChartChange(category: string) {
    /*console.log(chartType);
    this.chhartType = chartType;
    console.log(this.renderer2);
    console.log(this.el);*/
    this.getChartData(category);
    this.chartCat = category;
  }

  getChartData(category: string): void {
    const chartDataByCategory = this.expenseService.getExpensesByCategory(category);
    console.log(chartDataByCategory);
    this.chartLabels = Object.keys(chartDataByCategory);
    const cData = this.chartData;
    console.log(this.chartData[0]);
    // @ts-ignore
    this.chartData[0].data = Object.values(chartDataByCategory);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
