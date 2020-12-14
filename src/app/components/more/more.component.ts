import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-more',
	templateUrl: './more.component.html',
	styleUrls: ['./more.component.scss']
})

export class MoreComponent implements OnInit {
	// ppp是一个普通的变量，被@Input装饰器装饰，这里的意思是ppp的值不由组件决定，由调用它的组件决定，即父组件传过来的值
	// 一般输入属性都会给一个默认值，以免外部没有传入
	// 单向数据流，不推荐组件内部通过this.ppp修改父组件传过来的值，而是通过@Output向父组件传递信息，即触发父组件的方法，让父组件自己修改
	// 典例：遮罩层
	@Input() ppflag: boolean = true
	// 父组件只能传fixed变量过来
	@Input('fixed') fixed: string = ''

	@Output() send = new EventEmitter()


	price = 1000
	gender = 0
	imgurl = ''
	name = 'zhangsan'
	img = {
		url: '',
		name: 'lisi'
	}
	val = ''
	formVal: any = ''
	ngval: any = ''
	flag = true

	constructor() { }

	ngOnInit(): void {

	}

	getVal() {
		return 123
	}
	// es6中，class里面有特殊的关键字，方法前面加上get关键字，
	// 方法名就可以当做普通变量使用
	get job() {
		return 456
	}

	child(e: any) {
		alert('child')
		e.stopPropagation()

	}

	parent() {
		alert('parent')
	}

	onInput(e: any) {
		console.log(e.target.value); // 没问题

		// 不是所有元素都有value属性，但是我们这里处理表单肯定有，所有明确告诉ts，这里的$event.target是HTMLInputElement类型，类型断言
		console.log((e.target as HTMLInputElement).value);
	}

	toggle() {

		// this.ppflag = !this.ppflag 不推荐子组件修改父组件的值
		this.send.emit()
	}
}
