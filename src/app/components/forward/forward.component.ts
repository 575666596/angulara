import { Component, OnInit } from '@angular/core';
import { Hero } from '../../ts/interface'

@Component({
  selector: 'app-forward',
  templateUrl: './forward.component.html',
  styleUrls: ['./forward.component.scss']
})
export class ForwardComponent implements OnInit {
  flag = true
  list: any = []
  // list: object[] = [] html报name is undefined，？号也不管用

  hero: Hero | any// 只声明未赋值

  constructor() { }

  ngOnInit(): void {
    this.getListData() // 给list赋值
    this.getHeroData() // 给hero赋值
  }
  getListData() {
    this.list = [{
      id: 1,
      name: 'zhangsan'
    }, {
      id: 2,
      name: 'lisi'
    }, {
      id: 3,
      name: 'wangwu'
    }]
  }

  getHeroData() {
    setTimeout(() => {
      this.hero = {
        name: 'lisi',
        age: 10
      }
    }, 1000)
  }

  trackByFn(index: any, item: any) {
    return item.id; // or index
  }

  changeList() {
    this.list = [{
      id: 1,
      name: 'zhangsan'
    }, {
      id: 2,
      name: 'lisi'
    }, {
      id: 4, // 只有这个值变化
      name: 'wangwu'
    }]
  }

  callPhone(val: any) {
    // 得到的就是输入框的值
    console.log(val);
  }
}
