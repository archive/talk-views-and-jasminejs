(function(){

	demo.extensions.zepto(window.Zepto);

	var productsCollection = new demo.models.ProductsCollection();
	var productsView = new demo.views.ProductsView(productsCollection, window.Zepto);
	productsView.render();
	
})(window);	