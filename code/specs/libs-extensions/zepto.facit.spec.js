describe('zepto extensions specifications', function(){
    
    var fakeZepto;

    beforeEach(function(){
        fakeZepto = jasmine.fakeZepto();
        demo.extensions.zepto(fakeZepto);        
    });

    describe('highlighting', function(){

      it('should add class when highlighting', function(){
         fakeZepto.highlight();

         expect(fakeZepto.addClass).toHaveBeenCalledWith('highlight');
      });

      it('should remove class when unlighting', function(){
         fakeZepto.unlight();

         expect(fakeZepto.removeClass).toHaveBeenCalledWith('highlight');
      });      

    });

    describe('check', function(){

      it('should add attribute when checking', function(){
         fakeZepto.check();

         expect(fakeZepto.attr).toHaveBeenCalledWith('checked', 'checked');
      });

      it('should remove attribut when unchecking', function(){
         fakeZepto.uncheck();

         expect(fakeZepto.removeAttr).toHaveBeenCalledWith('checked');
      });      

    });

});
