const resources = [
	'./navbar/component'
	, './inputbar/component'
	, './mainbody/component'
	, './weatherdisplay/component'
]

export function configure(aurelia){
	aurelia.globalResources(resources)
}