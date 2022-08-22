import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overscoll-behavior-demo',
  templateUrl: './overscoll-behavior-demo.component.html',
  styleUrls: ['./overscoll-behavior-demo.component.css']
})
export class OverscollBehaviorDemoComponent implements OnInit {
  items:any;
  innerItems:any;

  constructor() { }

  ngOnInit(): void {
    this.items = Array.from({length: 50}).map((_, i) => {
      return {name: `item #${i}`, description: `itme description #${i}`};
    });

    this.innerItems = Array.from({length: 20}).map((_, i) => {
      return {name: `inner-item #${i}`, description: `itme description #${i}`};
    });
  }

}
