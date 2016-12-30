import { useView, customElement, bindable } from 'aurelia-framework'

@customElement('main-body')
@useView('./view.html')
export class MainBody {
	constructor(){
	}

	attached(){
		// console.log(this.city)
	}
}