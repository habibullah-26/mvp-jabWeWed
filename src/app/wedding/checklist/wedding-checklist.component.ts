import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../core/services/api.service';
import { ChecklistItem } from '../../core/models/checklist.model';

@Component({
  standalone: true,
  selector: 'app-wedding-checklist',
  imports: [CommonModule],
  template: `
    <h2>Wedding Checklist</h2>

    <p>Progress: {{ progress }}%</p>

    <ul>
      <li *ngFor="let item of checklist">
        <label>
          <input
            type="checkbox"
            [checked]="item.completed"
            (change)="toggle(item)"
          />
          {{ item.title }}
        </label>
      </li>
    </ul>
  `
})
export class WeddingChecklistComponent implements OnInit {

  checklist: ChecklistItem[] = [];
  progress = 0;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.get<ChecklistItem[]>('checklist.json')
      .subscribe(data => {
        this.checklist = data;
        this.calculateProgress();
      });
  }

  toggle(item: ChecklistItem): void {
    item.completed = !item.completed;
    this.calculateProgress();
  }

  private calculateProgress(): void {
    const completed = this.checklist.filter(i => i.completed).length;
    this.progress = Math.round((completed / this.checklist.length) * 100);
  }
}
