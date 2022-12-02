import {Routes} from "@angular/router";
import {ErrorComponent} from "./common/pages/error/error.component";

export const appRoutes: Routes = [
  {path: 'admin', loadChildren: () => import('./admin/admin.routes').then(routes => routes.adminRoutes)},
  {path: '', loadChildren: () => import('./landing/landing.routes').then(routes => routes.landingRoutes)},
  {path: '**', component: ErrorComponent}
]
