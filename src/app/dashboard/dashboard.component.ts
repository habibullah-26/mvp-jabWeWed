import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  ngOnInit(): void {
    this.renderBudgetBarChart();
    this.renderCategoryPieChart();
  }

  renderBudgetBarChart() {
    const ctx = document.getElementById('budgetBarChart') as HTMLCanvasElement;
    if (!ctx) return;
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Venue', 'Catering', 'Photography', 'Decor', 'Music & DJ', 'Invitations', 'Transportation', 'Dress & Attire', 'Gifts & Favors', 'Makeup & Hair'],
        datasets: [{
          label: 'Actual Spend',
          data: [550000, 420000, 140000, 210000, 75000, 32000, 48000, 125000, 39000, 34000],
          backgroundColor: [
            '#be185d', '#7c3aed', '#059669', '#f59e42', '#f472b6', '#6366f1', '#fbbf24', '#10b981', '#eab308', '#a21caf'
          ],
          borderRadius: 8,
          maxBarThickness: 38
        }]
      },
      options: {
        plugins: {
          legend: {
            display: false
          }
        },
        scales: {
          x: {
            ticks: { color: '#374151', font: { size: 13 } },
            grid: { display: false }
          },
          y: {
            beginAtZero: true,
            ticks: { color: '#374151', font: { size: 13 } },
            grid: { color: '#f3e8ff' }
          }
        }
      }
    });
  }

  renderCategoryPieChart() {
    const ctx = document.getElementById('categoryPieChart') as HTMLCanvasElement;
    if (!ctx) return;
    new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Venue', 'Catering', 'Photography', 'Decor', 'Music & DJ', 'Invitations', 'Transportation', 'Dress & Attire', 'Gifts & Favors', 'Makeup & Hair'],
        datasets: [{
          label: 'Category Distribution',
          data: [550000, 420000, 140000, 210000, 75000, 32000, 48000, 125000, 39000, 34000],
          backgroundColor: [
            '#be185d', '#7c3aed', '#059669', '#f59e42', '#f472b6', '#6366f1', '#fbbf24', '#10b981', '#eab308', '#a21caf'
          ],
          borderWidth: 2
        }]
      },
      options: {
        plugins: {
          legend: {
            position: 'right',
            labels: { color: '#374151', font: { size: 14 } }
          }
        }
      }
    });
  }
}