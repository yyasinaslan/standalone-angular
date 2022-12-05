import {Routes} from "@angular/router";
import {AdminLayoutComponent} from "./admin-layout/admin-layout.component";
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {UsersComponent} from "./pages/users/users.component";

export const adminRoutes: Routes = [
  {
    path: '', component: AdminLayoutComponent, children: [
      {path: '', pathMatch: 'full', component: DashboardComponent},
      {path: 'users', component: UsersComponent},
      {path: 'products', loadComponent: () => import('./pages/products/products.component')},
    ]
  }

]
