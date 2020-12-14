import { Directive, HostBinding, HostListener, Input } from '@angular/core';


@Directive({
  selector: '[appInputcolor]'
})
export class InputcolorDirective {
  clickNum = 0
  @Input() color: string = ''

  // 绑定样式
  @HostBinding('style.color') bcolor: any;

  // 绑定类名
  @HostBinding('class.font') flag: boolean = true

  // 绑定自定义属性，不知道具体用处，在页面结构可以找到
  @HostBinding('attr.type') type = 'button'

  @HostListener('click', ['$event.target'])
  onCilck(btn: HTMLElement) {
    // 通过时间对象获取dom元素
    console.log(btn);
    console.log(btn, this.clickNum++);
  }
  constructor() { }
  ngOnInit(): void {
    // 再次强调赋值操作放这里
    this.bcolor = this.color
  }
}

// host element (宿主元素)
// 指令可以用在组件和标签中，他们都可以是指令的宿主元素

// HostListener 是属性装饰器，用来为宿主元素添加事件监听。
// HostListenerDecorator 装饰器定义
// export declare interface HostListenerDecorator {
//   (eventName: string, args?: string[]): any;
//   new (eventName: string, args?: string[]): any;
// }

// HostBing定是属性选择器，用来动态设置宿主元素的属性值
// export declare interface HostBinding {
//   (hostPropertyName?: string): any;
//   new(hostPropertyName?: string): any;
// }

