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
import { AdminCouplesComponent } from './admin/couples/admin-couples/admin-couples.component';
import { AdminDashboardComponent } from './admin/dashboard/admin-dashboard/admin-dashboard.component';
import { VendorProfileComponent } from './vendor/vendor-profile/vendor-profile.component';
import { VendorBookingsComponent } from './vendor/vendor-bookings/vendor-bookings.component';
import { VendorPackagesComponent } from './vendor/vendor-packages/vendor-packages.component';
import { VendorAwardsComponent } from './vendor/vendor-awards/vendor-awards.component';

export const routes: Routes = [

  /* ================= PUBLIC ================= */
  {
    path: '',
    component: LandingComponent,
    children: [
      { path: '', loadComponent: () => import('./landing/home/home.component').then(m => m.HomeComponent) },
      { path: 'vendors', loadComponent: () => import('./vendors/vendor-list/vendor-list.component').then(m => m.VendorListComponent) },
      { path: 'vendors/:id', loadComponent: () => import('./vendors/vendor-detail/vendor-detail.component').then(m => m.VendorDetailComponent) },
      { path: 'invitations', loadComponent: () => import('./invitations/invitations/invitations.component').then(m => m.InvitationsComponent) },
      { path: 'registry', loadComponent: () => import('./registry/registry/registry.component').then(m => m.RegistryComponent) },
      // { path: 'contact', loadComponent: () => import('./public/contact/contact.component').then(m => m.ContactComponent) }
    ]
  },
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

      /* Default inside /app */
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  },
  /* ================= APP (AFTER LOGIN) ================= */
  {
    path: 'admin',
    component: AppLayoutComponent,
    children: [

      /* Dashboard */
      { path: 'dashboard', component: AdminDashboardComponent },

      /* Wedding Planning */
      { path: 'profile', component: WeddingProfileComponent },
      { path: 'checklist', component: WeddingChecklistComponent },
      { path: 'budget', component: BudgetComponent },

      /* Vendors */
      { path: 'vendors', component: AdminVendorsComponent },
      { path: 'vendors/:id', component: VendorDetailComponent },
      { path: 'vendors/:id/inquiry', component: VendorInquiryComponent },

      { path: 'couples', component: AdminCouplesComponent },

      /* Default inside /app */
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  },

  /* ================= APP (AFTER LOGIN) ================= */
  {
    path: 'vendor',
    component: AppLayoutComponent,
    children: [

      /* Dashboard */
      { path: 'dashboard', component: DashboardComponent },

      /* Wedding Planning */
      { path: 'profile', component: VendorProfileComponent },
      { path: 'requests', component: VendorBookingsComponent },
      { path: 'packages', component: VendorPackagesComponent },
       { path: 'awards', component: VendorAwardsComponent },

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