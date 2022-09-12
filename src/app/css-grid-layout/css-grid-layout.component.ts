import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-css-grid-layout',
  templateUrl: './css-grid-layout.component.html',
  styleUrls: ['./css-grid-layout.component.scss']
})
export class CssGridLayoutComponent implements OnInit {
  items:any;
  innerItems:any;

  constructor() { }

  ngOnInit(): void {

    this.items = Array.from({length: 30}).map((_, i) => {
      return {name: `item #${i}`, description: `itme description #${i}`};
    });

    this.innerItems = Array.from({length: 10}).map((_, i) => {
      return {name: `inner-item #${i}`, description: `itme description #${i}`};
    });
  }

}
