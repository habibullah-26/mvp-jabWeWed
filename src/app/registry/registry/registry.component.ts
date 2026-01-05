import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Registry } from '../../core/models/registry.model';
import { RegistryService } from '../../core/services/registry.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-registry',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './registry.component.html',
  styleUrls: ['./registry.component.scss']
})
export class RegistryComponent {

  firstName = '';
  lastName = '';
  month = '';
  year = '';
  registryFilterForm!:FormGroup;

  registries: Registry[] = [];

  months = [
    { value: '1', name: 'January' }, { value: '2', name: 'February' },
    { value: '3', name: 'March' }, { value: '4', name: 'April' },
    { value: '5', name: 'May' }, { value: '6', name: 'June' },
    { value: '7', name: 'July' }, { value: '8', name: 'August' },
    { value: '9', name: 'September' }, { value: '10', name: 'October' },
    { value: '11', name: 'November' }, { value: '12', name: 'December' }
  ];

  years = ['2025','2026','2027','2028'];

  constructor(private registryService: RegistryService) {}

  search() {
    this.registries = this.registryService.search(
      this.firstName,
      this.lastName,
      this.month,
      this.year
    );
  }

  ngOnInit() {
    this.createForm();
    this.registryService.getAllRegistries().subscribe(data => {
      this.registries = data;
      console.log(this.registries);
    });
  }
  createForm() {
    this.registryFilterForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      month: new FormControl(''),
      year: new FormControl('')
    });
  }
}