demo.extensions.zepto = function($){

	// todo: add namespace

    $.fn.highlight = function(){
        this.addClass('highlight');     
        return this;
    };

    $.fn.unlight = function(){
        this.removeClass('highlight');      
        return this;
    };

	$.fn.check = function(){
		this.attr('checked', 'checked');
		return this;
	};

	$.fn.uncheck = function(){
		this.removeAttr('checked');
		return this;
	};

};


