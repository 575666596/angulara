import { Directive, ElementRef, Input, HostListener } from '@angular/core';


@Directive({
	// 自定义指令名称，匹配页面中使用了这个属性指令的标签 
	selector: '[appHighlight]'
})
export class HighlightDirective {
	// 由调用的父组件传递颜色值过来
	@Input() highlightColor: any = 'yellow';

	// 传入值与指令名称相同，页面使用指令的时候就可以巧妙简写。这里不操作shorthand了，造成混乱
	@Input('appHighlight') shorthand = 'yellow'
	// 在指令内部，该属性叫 shorthand，在外部，绑定的地方，它叫 appHighlight。
	// 为什么不直接使用@Input() appHighlight: any？官网说名字太糟糕，不能反映该属性的意图。

	// 属性型指令是用来操作dom元素，自定义指令寄生在宿主元素上，要操作dom元素首先要获取宿主元素，这里通过ElementRef获取宿主元素，进而操作dom元素 
	// el指定为ElementRef类型，就获取了宿主元素，但它不是html元素
	constructor(private el: ElementRef) {
		// this.el.nativeElement才是真正的dom元素
		// 扩展，操作dom元素的方法有很多种，这是官网推荐当中的最不推荐的一种

		// 页面加载时背景色采用默认值yellow，实测这时候还没有接收到父组件传过来的值
		this.highlight(this.highlightColor)
	}

	// 给宿主元素绑定事件，用装饰器
	@HostListener('mouseenter', ['$event'])
	onMouseEnter(event: any): void {
		// 鼠标经过时，背景色改为传入值，如果没有传入，默认红色
		this.highlight(this.highlightColor || 'red')
	}
	@HostListener('mouseleave') onMouseLeave() {
		// 鼠标离开时，背景色去掉
		this.highlight('');
	}
	highlight(color: string) {
		this.el.nativeElement.style.backgroundColor = color
	}
}

// 用装饰器给宿主元素绑定事件的好处是
// 1.当指令被销毁的时候，自动拆卸事件监听器，避免会导致内存泄露。
// 2.不用和dom打交道，这在跨平台很有用，因为只有浏览器有dom元素


// 使用@Input 数据绑定向指令传递值，即由调用指令的组件传递颜色值过来。

// @HostListener('事件名称', （实参）参数是字符串数组，可省略)
// 	事件处理函数(形参) { }，名称应该是自定义的