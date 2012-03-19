(function(){

	this.ProductsView = function(productsCollection, $){
		this._productsCollection = productsCollection;
		this._$ = $;
	};

	this.ProductsView.prototype._attachEvents = function() {
		// TODO: use delegate instead
		this._$('#products li').click(this._productClicked.bind(this));
	};

	this.ProductsView.prototype._productClicked = function(event) {	
		var element = this._$(event.currentTarget);
		var id = parseInt(element.data('id'), 10);
		var wasChecked = this._productsCollection.toggle(id);
		
		this._updateView(element, wasChecked);
	};

	this.ProductsView.prototype._updateView = function(element, wasChecked) {
		var checkbox = element.find('input[type=checkbox]');

		wasChecked 
			? checkbox.check() && element.highlight() 
			: checkbox.uncheck() && element.unlight();
	};

	this.ProductsView.prototype.render = function() {
		var items = 
			'<% _.each(productsCollection.items, function(product, index) { %>' +
				'<li data-id="<%= product.id %>"><input type="checkbox"><%= product.name %></li>' + 
			'<% }); %>';

		var html = _.template(items, {'productsCollection' : this._productsCollection});
		this._$('#products').html(html);

		this._attachEvents();
	};

}.bind(demo.views))();

