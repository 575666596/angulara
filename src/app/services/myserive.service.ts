import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyseriveService {
  // 定义数据
  public seriveData = '服务数据'

  // 访问数据
  getServiceData(): string {
    return this.seriveData
  }

  // 修改数据
  modifyServiceData(data: string) {
    this.seriveData = data
  }

  constructor() { }
}
