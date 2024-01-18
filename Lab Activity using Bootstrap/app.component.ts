import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'This is interpolated';
  clientName = 'Matthew'
  appliedCSS = 'green';
  notAppliedCSS = false;
  myColor = 'red'

showData($event: any){
  console.log('Button is clicked! ');
  if($event) {
    console.log($event.target);
    console.log($event.target.value);
  }
}
clickCount = 0
    clickMe() {
      this.clickCount++;
    }
}
