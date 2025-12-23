import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppLayoutComponent } from './app-layout/app-layout/app-layout.component';
import { LandingComponent } from './landing/landing/landing.component';
import { AdminInquiriesComponent } from './admin/inquiries/admin-inquiries.component';
import { AdminVendorsComponent } from './admin/vendors/admin-vendors.component';
import { VendorDetailComponent } from './vendors/vendor-detail/vendor-detail.component';
import { VendorInquiryComponent } from './vendors/vendor-inquiry/vendor-inquiry.component';
import { VendorListComponent } from './vendors/vendor-list/vendor-list.component';
import { BudgetComponent } from './wedding/budget/budget.component';
import { WeddingChecklistComponent } from './wedding/checklist/wedding-checklist.component';
import { WeddingProfileComponent } from './wedding/profile/wedding-profile.component';

export const routes: Routes = [

  /* ================= PUBLIC ================= */
  { path: '', component: LandingComponent },

  { 
    path: 'login',
    loadComponent: () =>
      import('./auth/login/login.component').then(m => m.LoginComponent)
  },

  { 
    path: 'register',
    loadComponent: () =>
      import('./auth/register/register.component').then(m => m.RegisterComponent)
  },

  /* ================= APP (AFTER LOGIN) ================= */
  {
    path: 'app',
    component: AppLayoutComponent,
    children: [

      /* Dashboard */
      { path: 'dashboard', component: DashboardComponent },

      /* Wedding Planning */
      { path: 'profile', component: WeddingProfileComponent },
      { path: 'checklist', component: WeddingChecklistComponent },
      { path: 'budget', component: BudgetComponent },

      /* Vendors */
      { path: 'vendors', component: VendorListComponent },
      { path: 'vendors/:id', component: VendorDetailComponent },
      { path: 'vendors/:id/inquiry', component: VendorInquiryComponent },

      /* Admin */
      { path: 'admin/vendors', component: AdminVendorsComponent },
      { path: 'admin/inquiries', component: AdminInquiriesComponent },

      /* Default inside /app */
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  },

  /* ================= FALLBACK ================= */
  { path: '**', redirectTo: '' }
];