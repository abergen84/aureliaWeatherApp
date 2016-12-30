import { useView, customElement, inject, bindable } from 'aurelia-framework'
import { HttpClient } from 'aurelia-http-client'
import { load } from './model.js'


@customElement('weather')
@useView('./view.html')
@inject(HttpClient)

export class Weather {
	
	constructor(http){
		this.state = {}
		this.data = {}
		this.http = http
	}

	attached(){
	}

	get(){
		
		const onSuccess = c => data => {
			c.data.weather = data
			console.log('log it', c.data.weather)
		}

		const onError = c => 
			'Error'

		return load(this.http, this.city)
			.then(onSuccess(this), onError(this))
			// .then(console.log('weather data', this.data.weather))
	}

}