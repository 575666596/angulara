import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-construct',
  templateUrl: './construct.component.html',
  styleUrls: ['./construct.component.scss']
})
export class ConstructComponent implements OnInit {
  condition = true
  constructor() { }

  ngOnInit(): void {
  }

}
