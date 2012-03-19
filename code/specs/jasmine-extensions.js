jasmine.fakeZepto = function(){
    
    var fakeZepto = function(query){
      fakeZepto._currentQuery = query;
      return fakeZepto;
    };

    fakeZepto._currentQuery = '';
    fakeZepto._callbacks = {};
    fakeZepto._fakeEventObject = null;
    fakeZepto.fn = fakeZepto;

    var functions = ['addClass', 'removeClass', 'html', 'data', 'find', 'attr', 'removeAttr', 'highlight', 'unlight', 'check', 'uncheck'];
    functions.forEach(function(name){
      fakeZepto[name] = jasmine.createSpy('fakeZepto.' + name).andReturn(fakeZepto);
    });

    fakeZepto.click = function(callback){
        var attatchingCallback = typeof callback !== 'undefined';

        if(attatchingCallback){
            fakeZepto._callbacks[this._currentQuery] = callback;
        }else{
            fakeZepto._callbacks[this._currentQuery](jasmine.createFakeEventObject());
        }
    };

    return fakeZepto;    
};

jasmine.createFakeEventObject = function(){
    return {
        currentTarget: jasmine.createSpy('currentTarget')
    };
};
       
jasmine.createFakeBasedOn = function (template) {
    var fake = {};

    var addSpys = function(_template){
       for (var member in _template) {
            var isNotFromInheritance = _template.hasOwnProperty(member);
            var isAFunction = typeof (_template[member]) === "function";
            var isPublic = member[0] !== "_";

            if (isNotFromInheritance && isAFunction && isPublic) {
                fake[member] = jasmine.createSpy(member);
            }
        }
    }

    addSpys(template.prototype || {});
    addSpys(template || {}); 

    return fake;
};