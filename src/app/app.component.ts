import {Component} from '@angular/core';
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {ErrorComponent} from "./common/pages/error/error.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, ErrorComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'angular15';
}
