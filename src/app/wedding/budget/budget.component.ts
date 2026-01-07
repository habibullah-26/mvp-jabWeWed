import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../core/services/api.service';
import { BudgetItem } from '../../core/models/budget.model';
import { CommonapiService } from '../../core/services/commonapi.service';

@Component({
  standalone: true,
  selector: 'app-budget',
  imports: [CommonModule],
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})
export class BudgetComponent implements OnInit {

  items: BudgetItem[] = [];
  totalEstimated = 0;
  totalActual = 0;

  constructor(private api: ApiService, private commonApi: CommonapiService) {}

  ngOnInit(): void {
   this.commonApi.getAllBudgets()
      .subscribe(data => {
        console.log('Budget data loaded:', data);
        this.items = data;
        this.calculateTotals();
      });
  }

  private calculateTotals(): void {
    this.totalEstimated = this.items.reduce((s, i) => s + i.estimated, 0);
    this.totalActual = this.items.reduce((s, i) => s + i.actual, 0);
  }
}
