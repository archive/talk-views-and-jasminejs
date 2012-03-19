describe('product view specifications', function(){

	var fakeProductsCollection;
	var fakeZepto;
	var productsView;

	beforeEach(function(){
		fakeProductsCollection = jasmine.createFakeBasedOn(demo.models.ProductsCollection);
		fakeZepto = jasmine.fakeZepto();
		productsView = new demo.views.ProductsView(fakeProductsCollection, fakeZepto);
	});

	describe('when clicking on a product', function(){

		describe('and its not selected', function(){

			beforeEach(function(){
				productsView.render();		

				fakeProductsCollection.toggle.andReturn(true);
				fakeZepto('#products li').click();
			});

			it('should be highlighted', function(){		
				expect(fakeZepto.highlight).toHaveBeenCalled();
			});

			it('should be checked', function(){	
				expect(fakeZepto.check).toHaveBeenCalled();
			});

		});

		describe('and its selected', function(){

			beforeEach(function(){
				productsView.render();		

				fakeProductsCollection.toggle.andReturn(false);
				fakeZepto('#products li').click();						
			});

			it('should be unlighted', function(){		
				expect(fakeZepto.unlight).toHaveBeenCalled();		
			});

			it('should be unchecked', function(){	
				expect(fakeZepto.uncheck).toHaveBeenCalled();
			});

		});
		
	});

	describe('when rendering', function(){

		it('should use html to fill target', function(){	
			productsView.render();

			expect(fakeZepto.html).toHaveBeenCalled();
		});
		
	});

});