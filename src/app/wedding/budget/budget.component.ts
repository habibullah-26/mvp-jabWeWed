import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../core/services/api.service';
import { BudgetItem } from '../../core/models/budget.model';

@Component({
  standalone: true,
  selector: 'app-budget',
  imports: [CommonModule],
  template: `
    <h2>Budget Tracker</h2>

    <table border="1" cellpadding="6">
      <thead>
        <tr>
          <th>Category</th>
          <th>Estimated</th>
          <th>Actual</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let item of items">
          <td>{{ item.category }}</td>
          <td>{{ item.estimated }}</td>
          <td>{{ item.actual }}</td>
        </tr>
      </tbody>
    </table>

    <p><strong>Total Estimated:</strong> {{ totalEstimated }}</p>
    <p><strong>Total Actual:</strong> {{ totalActual }}</p>
  `
})
export class BudgetComponent implements OnInit {

  items: BudgetItem[] = [];
  totalEstimated = 0;
  totalActual = 0;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.get<BudgetItem[]>('budget.json').subscribe(data => {
      this.items = data;
      this.calculateTotals();
    });
  }

  private calculateTotals(): void {
    this.totalEstimated = this.items.reduce((s, i) => s + i.estimated, 0);
    this.totalActual = this.items.reduce((s, i) => s + i.actual, 0);
  }
}
