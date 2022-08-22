import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routing-app';


  items = Array.from({length: 50}).map((_, i) => {
    return {name: `item #${i}`, description: `itme description #${i}`};
  });

  innerItems = Array.from({length: 20}).map((_, i) => {
    return {name: `inner-item #${i}`, description: `itme description #${i}`};
  });
}
