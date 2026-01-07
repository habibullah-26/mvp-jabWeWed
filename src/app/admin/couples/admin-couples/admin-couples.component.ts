import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistryService } from '../../../core/services/registry.service';
import { Registry } from '../../../core/models/registry.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-couples',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-couples.component.html',
  styleUrls: ['./admin-couples.component.css']
})
export class AdminCouplesComponent implements OnInit {
  registries: Registry[] = [];

  constructor(private registryService: RegistryService) {}

  ngOnInit(): void {
    this.registryService.getAllRegistries().subscribe(data => this.registries = data);
  }

  approveRegistry(registry: Registry): void {
    Swal.fire({
      icon: 'success',
      title: 'Registry Approved',
      text: `Approved registry for: ${registry.firstName} ${registry.lastName}`,
      confirmButtonColor: '#059669'
    });
  }

  rejectRegistry(registry: Registry): void {
    Swal.fire({
      icon: 'error',
      title: 'Registry Rejected',
      text: `Rejected registry for: ${registry.firstName} ${registry.lastName}`,
      confirmButtonColor: '#be185d'
    });
  }
}
