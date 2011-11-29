/**
 * ElementFocus v1.0 jQuery Plugin
 * 
 * Requirements
 * jQuery 1.3.2+

 * adjust viewport to ensure selected element is visible
 *  
 * @param object options - configuration options
 *   - int  	offset	(default:-100)	// no. of pixel to offset the element from viewport top
 */

// create closure
(function($) {
	
	// plugin definition
	$.fn.elementFocus = function(options) {
		
		// extend default settings with those provided.
		var settings = $.extend(
			{},
			$.fn.elementFocus.defaults,
			options
		);
		
		
		// iterate each matched element
		return this.each(function() {
			
			var scrollPosition = $(this).offset().top + settings.offset;
			
			$(window).scrollTop(scrollPosition);
			
		});	
	};
	
	// plugin default settings
	$.fn.elementFocus.defaults = {
		offset: -100 // no. of pixel to offset the element from viewport top
	};

// end closure
})(jQuery);