import { useView } from 'aurelia-framework'

const routes = [
	{ route: ['weather']
	, name: 'weather'
	, moduleId: 'components/weatherdisplay/component'
	, nav: true 
	}
  , { route: ['']
	, redirect: 'weather' 
	}
]

@useView('./view.html')
export class Home { 

		configureRouter(config, router){
		config.title = 'Aurelia'
		config.map(routes)

		config.mapUnknownRoutes(()=> 'components/weatherdisplay/component')

		this.router = router
	}


}
