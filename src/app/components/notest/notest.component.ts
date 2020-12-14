import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notest',
  template: `
    <p>
      notest works!
    </p>
  `,
  styles: [
  ]
})
export class NotestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
