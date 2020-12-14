import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appBordercolor]'
})
export class BordercolorDirective {
  @Input('appBordercolor') bwidth: any = '1px'

  // 定义我们需要展示的所有可能的颜色
  possibleColors = [
    'darksalmon', 'hotpink', 'lightskyblue', 'goldenrod', 'peachpuff',
    'mediumspringgreen', 'cornflowerblue', 'blanchedalmond', 'lightslategrey'
  ];
  // 定义并用@HostBinding()装饰color和borderColor，用于设置样式
  @HostBinding('style.color') color: string = '';
  @HostBinding('style.borderColor') borderColor: string = '';
  @HostBinding('style.borderWidth') borderWidth: string;
  @HostBinding('style.outline') outline: string = 'none';
  // @HostBinding('style.outline') outline: string = '';
  // 用@HostListener()监听宿主元素的keydown事件，为color和borderColor随机分配颜色
  @HostListener('keydown') onKeydown() {
    const colorPick = Math.floor(Math.random() * this.possibleColors.length);
    // 改变字体颜色和边框颜色
    this.color = this.borderColor = this.possibleColors[colorPick];
  }
  constructor() {
    console.log(this.bwidth);
    // 这里赋值拿到的是默认值1px
    this.borderWidth = this.bwidth
  }
  ngOnInit(): void {
    console.log(this.bwidth);
    // 这里赋值拿到的是调用组件传过来的值
    this.borderWidth = this.bwidth
    this.bwidth = '10px'
  }
}


// @HostBinding() 和@HostListener() 在自定义指令时非常有用。
// @HostBinding() 可以为指令的宿主元素添加类、样式、属性等.
// @HostListener() 可以监听宿主元素上的事件。