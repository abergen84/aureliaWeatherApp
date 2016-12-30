import { useView, customElement } from 'aurelia-framework'

@customElement('input-bar')
@useView('./view.html')
export class InputBar {
	constructor(){
		this.state = {}
		this.data = {}
	}

	attached(){
	}

	submit(){
		this.state.city = this.city
		console.log(this.state.city)
	}
}