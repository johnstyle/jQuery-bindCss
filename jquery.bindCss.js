/*!
 * jQuery bindCss Plugin
 * http://www.johnstyle.fr/labs/jquery-bindcss/
 *
 * Copyright 2012, Jonathan Sahm
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://www.johnstyle.fr/license/
 *
 * @author Jonathan Sahm
 * @version 1.0
 * @requires jQuery v1.2.x or later
 *
 * Date: 2012-03-30
 */
(function($){
	$.fn.bindCss = function(options, callback){	
		options = $.extend({
			'css'		: options.css 	? options.css	: options,
			'callback'	: callback 		? callback 		: options.callback,
			'interval'	: 100
		}, options);		
		function getValue($this){
			switch(options.css){
				case 'outerHeight':
					return $($this).outerHeight();
				break;
				case 'outerHeight(true)':
					return $($this).outerHeight(true);
				break;				
				case 'outerWidth':
					return $($this).outerWidth();
				break;
				case 'outerWidth(true)':
					return $($this).outerWidth(true);
				break;				
				case 'innerHeight':
					return $($this).innerHeight();
				break;
				case 'innerWidth':
					return $($this).innerWidth();
				break;				
				default:
					return $($this).css(options.css);
				break;				
			}
		}
		return this.each(function(){
			var $this 	= this;
			var value 	= getValue($this);
			setInterval(function(){
				if(getValue($this) != value){
					value = getValue($this);
					if(options.callback) options.callback($this);
				}
			}, options.interval);
		});	
	};	
})(jQuery);