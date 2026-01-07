import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendorService } from '../../../core/services/vendor.service';
import { RegistryService } from '../../../core/services/registry.service';
import { Vendor } from '../../../core/models/vendor.model';
import { Registry } from '../../../core/models/registry.model';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  totalVendors = 0;
  totalCouples = 0;
  pendingApprovals = 0;
  vendors: Vendor[] = [];
  registries: Registry[] = [];

  constructor(
    private vendorService: VendorService,
    private registryService: RegistryService
  ) {}

  ngOnInit(): void {
    this.vendorService.getVendors().subscribe(vendors => {
      this.vendors = vendors;
      this.totalVendors = vendors.length;
      this.renderVendorsCategoryChart();
    });
    this.registryService.getAllRegistries().subscribe(regs => {
      this.registries = regs;
      this.totalCouples = regs.length;
      this.renderRegistriesMonthChart();
    });
    // For demo, pendingApprovals = vendors with rating < 3 + registries with no coRegistrant
    setTimeout(() => {
      this.pendingApprovals =
        (this.vendors.filter(v => v.rating < 3).length) +
        (this.registries.filter(r => !r.coRegistrant).length);
    }, 500);
  }

  renderVendorsCategoryChart() {
    const ctx = document.getElementById('vendorsCategoryChart') as HTMLCanvasElement;
    if (!ctx) return;
    const categoryCounts: { [cat: string]: number } = {};
    this.vendors.forEach(v => {
      categoryCounts[v.category] = (categoryCounts[v.category] || 0) + 1;
    });
    new Chart(ctx, {
      type: 'pie',
      data: {
        labels: Object.keys(categoryCounts),
        datasets: [{
          data: Object.values(categoryCounts),
          backgroundColor: ['#be185d', '#7c3aed', '#059669', '#f59e42', '#6366f1', '#fbbf24', '#10b981', '#a21caf'],
        }]
      },
      options: {
        plugins: { legend: { position: 'right' } }
      }
    });
  }

  private registriesMonthChartInstance: Chart | null = null;

  renderRegistriesMonthChart() {
    const canvas = document.getElementById('registriesMonthChart') as HTMLCanvasElement | null;
    if (!canvas || !(canvas instanceof HTMLCanvasElement)) return;

    // Destroy previous chart instance if exists to avoid Chart.js errors
    if (this.registriesMonthChartInstance) {
      this.registriesMonthChartInstance.destroy();
      this.registriesMonthChartInstance = null;
    }

    // Count registries per month
    const monthCounts = Array(12).fill(0);
    // Count registries with coRegistrant per month
    const withCoRegistrantCounts = Array(12).fill(0);
    // Count registries without coRegistrant per month
    const withoutCoRegistrantCounts = Array(12).fill(0);

    this.registries.forEach(r => {
      const date = new Date(r.weddingDate);
      if (!isNaN(date.getTime())) {
        const m = date.getMonth();
        monthCounts[m]++;
        if (r.coRegistrant) {
          withCoRegistrantCounts[m]++;
        } else {
          withoutCoRegistrantCounts[m]++;
        }
      }
    });

    this.registriesMonthChartInstance = new Chart(canvas, {
      type: 'bar',
      data: {
        labels: [
          'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
          'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
        ],
        datasets: [
          {
            label: 'Total Registries',
            data: monthCounts,
            backgroundColor: '#be185d',
            borderRadius: 8,
            maxBarThickness: 38
          },
          {
            label: 'With Co-Registrant',
            data: withCoRegistrantCounts,
            backgroundColor: '#059669',
            borderRadius: 8,
            maxBarThickness: 38
          },
          {
            label: 'Without Co-Registrant',
            data: withoutCoRegistrantCounts,
            backgroundColor: '#fbbf24',
            borderRadius: 8,
            maxBarThickness: 38
          }
        ]
      },
      options: {
        plugins: { legend: { display: true, position: 'top' } },
        scales: {
          x: { grid: { display: false } },
          y: { beginAtZero: true, grid: { color: '#f3e8ff' } }
        }
      }
    });
  }
}
