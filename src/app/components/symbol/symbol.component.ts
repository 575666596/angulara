import { Component, OnInit } from '@angular/core';

// 引入外部库文件不要加后缀名，加了反而报错
import { TransfrrItel } from '../../ts/interface'
@Component({
	selector: 'app-symbol',
	templateUrl: './symbol.component.html',
	styleUrls: ['./symbol.component.scss']
})
export class SymbolComponent implements OnInit {
	// name: string | null;
	name: string | null = 'lisi'

	// list变量是一个数组，里面每一项对视TransfrrItel类型
	list: TransfrrItel[] = []
	constructor() {
		// 赋值操作放在构造器中，而不是ngOnInit函数中，怪事
		this.setList();
		console.log(0);
		console.log(this.list);
	}

	ngOnInit(): void {
		// 开启--strictNullChecks后报错，就算name有默认值也报错，这种错属于tslint规范错误，tslint.json中修改字段"no-non-null-assertion"：false就不报错了

		// 报错，this.name可能为nu11，不能赋给string
		//   const name1: string = this.name

		//   一种解决方法是把name1的类型改为any
		const name2: any = this.name

		// 另一种是非空断言。不报错，告诉ts，this.name一定不是null
		const name3: string = this.name!

		// 非空断言相当于
		if (this.name) {
			const name4: string = this.name

		}
		console.log(1);
		console.log(this.list);
		// this.setList() 一般来说赋值操作放这里
		// 打印结果显示，构造器执行顺序在ngOnInit函数之前
	}

	setList() {
		console.log(Date.now());
		const prefix = 'item' + Date.now().toString().slice(-3);
		for (let i = 0; i < 20; i++) {
			this.list.push({
				key: prefix + '_' + i,
				value: `${prefix}${i + 1}`,
				checked: i % 6 === 0,
			});
		}
	}
}