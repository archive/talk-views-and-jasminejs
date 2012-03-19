
var pi = function(){
   return 3.14;
}

describe('pi specification', function(){
   
   it('should return correct value', function(){       

       var result = pi();

       expect(result).toBe(3.14);

   });
    
});


describe('...', function(){

    it('...', function(){ 

        var mail = {};
        mail.send = jasmine.createSpy('send');

        mail.send();

        expect(mail.send).toHaveBeenCalled();

    });

    it('...', function(){ 

        var mail = {};
        mail.send = jasmine
                        .createSpy('send')
                        .andReturn(true);

        var result = mail.send();

        expect(result).toBeTruthy();
    });    

});


describe('...', function(){

  beforeEach(function(){

  });

  it('...', function(){
    
  })

});



