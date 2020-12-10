import { Component, OnInit } from '@angular/core';
import { MyseriveService } from '../../services/myserive.service'

import { Location } from '@angular/common'

@Component({
  selector: 'app-base-child',
  templateUrl: './base-child.component.html',
  styleUrls: ['./base-child.component.scss']
})
export class BaseChildComponent implements OnInit {

  constructor(public myseriveService: MyseriveService, public location: Location) { }

  ngOnInit(): void {
  }
  goback() {
    // 在所属平台（如浏览器）的历史堆栈中后退一步。
    this.location.back()
    // 在所属平台（如浏览器）的历史堆栈中前进一步。
    // this.location.forward()
  }
}
