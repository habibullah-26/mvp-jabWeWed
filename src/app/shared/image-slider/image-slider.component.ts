import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent {
  @Input() images: string[] = [];
  index = 0;

  goToSlide(i: number): void {
    this.index = i;
  }

  trackByFn(index: number, item: string) {
    return item;
  }
}