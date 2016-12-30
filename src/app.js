const routes = [
	{ route: ['home']
	, name: 'home'
	, moduleId: 'pages/home/component'
	, nav: true 
	}
  , { route: ['']
	, redirect: 'home' 
	}
]


export class App { 
	configureRouter(config, router){
		config.title = 'Aurelia'
		config.map(routes)

		config.mapUnknownRoutes(()=> 'pages/home/component')

		this.router = router
	}
}
