import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavigationComponent} from "../components/navigation/navigation.component";
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-landing-layout',
  standalone: true,
  imports: [CommonModule, NavigationComponent, RouterModule],
  templateUrl: './landing-layout.component.html',
  styleUrls: ['./landing-layout.component.scss']
})
export class LandingLayoutComponent {

}
