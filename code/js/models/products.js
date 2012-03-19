(function(){

	this.ProductsCollection = function(){
		this.items = [
			new demo.models.ProductModel(1, 'NAD 304 - Stereo Integrated Amplifier'),
			new demo.models.ProductModel(2, 'NAD 705 - Stereo Receiver'),
			new demo.models.ProductModel(3, 'NAD 3020 - Stereo Integrated Amplifier'),
			new demo.models.ProductModel(4, 'NAD 319 - Stereo Integrated Amplifier')
		];
	};

	this.ProductsCollection.prototype.toggle = function(id) {
		var product = _.find(this.items, function(product){ 
			return product.id === id; 
		});
		product.selected = !product.selected;
		return product.selected;
	};

}.bind(demo.models))();