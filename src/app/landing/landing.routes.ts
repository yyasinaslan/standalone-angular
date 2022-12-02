import {Routes} from "@angular/router";
import {AboutComponent} from "./pages/about/about.component";
import {ContactComponent} from "./pages/contact/contact.component";
import {HomeComponent} from "./pages/home/home.component";
import {LandingLayoutComponent} from "./landing-layout/landing-layout.component";

export const landingRoutes: Routes = [
  {
    path: '', component: LandingLayoutComponent, children: [
      {path: '', pathMatch: 'full', component: HomeComponent},
      {path: 'about', component: AboutComponent},
      {path: 'contact', component: ContactComponent},
    ]
  }
]
