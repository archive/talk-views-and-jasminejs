(function(){

	this.ProductModel = function (id, name) {
		this.id = id;
		this.name = name;
		this.selected = false;
	};

}.bind(demo.models))();