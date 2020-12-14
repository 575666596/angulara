import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tel',
  templateUrl: './tel.component.html',
  styleUrls: ['./tel.component.scss']
})
export class TelComponent implements OnInit {
  border = '5px'
  constructor() { }

  ngOnInit(): void {
  }
  get() {
    alert('页面获取子组件')
  }
}
