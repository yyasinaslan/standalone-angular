import {Component} from '@angular/core';
import {CommonModule, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  imports: [
    CommonModule,
    NgOptimizedImage
  ],
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

}
