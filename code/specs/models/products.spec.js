describe('products collection specifications', function(){

    var productId; 

    var buildProductsCollectionWithOneProduct = function(state){
        var productModel = new demo.models.ProductModel(productId, '');
        productModel.selected = state.selected;
        var productsCollection = new demo.models.ProductsCollection();
        productsCollection.items = [productModel];
        return productsCollection;
    };

    beforeEach(function(){
        productId = 1;
    });

    describe('when the product is not selected', function(){

        it('should be selected when toggling', function(){
            var productsCollection = buildProductsCollectionWithOneProduct({selected : false})

            var wasSelected = productsCollection.toggle(productId);

            expect(wasSelected).toBeTruthy();
        });
        
    });

    describe('when the product is selected', function(){

        it('should be deselected when toggling', function(){
            var productsCollection = buildProductsCollectionWithOneProduct({selected : true})

            var wasSelected = productsCollection.toggle(productId);

            expect(wasSelected).toBeFalsy();
        });
        
    });
});