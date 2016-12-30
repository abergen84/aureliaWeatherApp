
	export const load = function(http,city){

		var googleModel = function(){
			var self = this
			this.googleKey = 'AIzaSyA8yZGjuT5DU2z3QHtfogglrW04dn6rLJY',
			this.googleUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${city}
			&key=${googleKey}`,
			this.fetch = function() {
				return http.get(self.googleUrl)
					.then(data => JSON.parse(data.response))
			}
					// const lat = parsed.results[0].geometry.location.lat
					// const lng = parsed.results[0].geometry.location.lng
					// console.log(lat)
		}

		var forecastModel = function(lat,lng){

			this.forecastKey = '251a327b65c598a3b6842fa35513c058',
			this.forecastUrl = `https://api.forecast.io/forecast/${forecastKey}/${lat},${lng}`,
			this.fetch = () => http.get(this.forecastUrl)
													.then(data => JSON.parse(data.response))
		}

		console.log(typeof googleModel)
		googleModel.fetch()
			.then(()=>{
				const lat = googleModel.results[0].geometry.location.lat
				const lng = googleModel.results[0].geometry.location.lng
				forecastModel(lat,lng).fetch()
			})


	}