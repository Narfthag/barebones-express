class SimpleRoute {
	constructor(){
		this.route = '/';
	}
	action (req, res) {
		console.log(`We know him ${req.ip}`);
		res.send({
			'host': req.ip, 
			'message': 'We know you'}
		);
	};
}

export default SimpleRoute;
