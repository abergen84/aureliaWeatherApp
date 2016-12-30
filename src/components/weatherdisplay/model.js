

	export const load = (http,city) => {

		const googleModel = _ => {
		
			const googleKey = 'AIzaSyA8yZGjuT5DU2z3QHtfogglrW04dn6rLJY'
			const googleUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${city}
			&key=${googleKey}`

			return http.get(googleUrl)
				.then(data => {
					// console.log(data)
					const parsed = JSON.parse(data.response)
					// console.log(parsed)
					const lat = parsed.results[0].geometry.location.lat
					const lng = parsed.results[0].geometry.location.lng
					console.log(lat)
					
					return forecastModel(lat,lng)
				})
		}


		const forecastModel = (lat,lng) => {

			const forecastKey = '251a327b65c598a3b6842fa35513c058'
			const forecastUrl = `https://api.forecast.io/forecast/${forecastKey}/${lat},${lng}`

			return http.get(forecastUrl)
				.then(data => JSON.parse(data.response))
		}

		return googleModel()

	}