import { Component, OnInit } from '@angular/core';
import { MyseriveService } from '../../services/myserive.service'

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {

  public flag: boolean = true
  public list: number[] = [1, 2, 3, 4, 5, 6]
  public currentIndex: any = null // 默认都不添加类名
  public msg: any = ''
  public time: any = new Date()
  public obj: object = { name: 'lisi', age: '18' }
  public num: number = 3.1415926
  public str: string = '123456'
  constructor(public myseriveService: MyseriveService) { }

  ngOnInit(): void {


  }
  toggle() {
    this.flag = !this.flag
  }
  ban() {
    this.flag = false
    setTimeout(() => {
      this.flag = true
    }, 1000)
  }
  change() {
    this.myseriveService.modifyServiceData('修改了服务中的数据')
  }
}
