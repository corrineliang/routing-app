import { Component, OnInit } from '@angular/core';

//Reference: https://code-boxx.com/freeze-rows-columns-html-tables/

@Component({
  selector: 'app-sticky-css',
  templateUrl: './sticky-css.component.html',
  styleUrls: ['./sticky-css.component.scss']
})
export class StickyCssComponent implements OnInit {
  items:any;
  constructor() { }

  ngOnInit(): void {
    this.items = Array.from({length: 30}).map((_, i) => {
      return {name: `item #${i}`, description: `itme description #${i}`};
    });

  }

}
