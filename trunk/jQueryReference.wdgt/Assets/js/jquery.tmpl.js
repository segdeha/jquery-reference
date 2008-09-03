/*
 * jQuery Simple Templates plugin 1.0
 *
 * http://andrew.hedges.name/tmpl/
 * http://docs.jquery.com/Plugins/Tmpl
 *
 * Copyright (c) 2008 Andrew Hedges, andrew@hedges.name
 *
 * Usage: $.tmpl('<div class="#{classname}">#{content}</div>', { 'classname' : 'my-class', 'content' : 'My content.' });
 * 
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */

(function($) {
    $.extend({
    	// public interface: $.tmpl
    	tmpl : function(tmpl, values) {
			// regular expression for matching our placeholders; e.g., #{my-cLaSs_name77}
			var matches = tmpl.match(/\#\{([A-Za-z0-9-_]+)\}/g);
			
			// default to doing no harm
			tmpl   = tmpl   || '';
			values = values || {};
			
			$.each(matches, function () {
				var id;
				id = this.substring(2, this.length - 1);
				if ('undefined' !== typeof values[id]) {
					tmpl = tmpl.replace(this, values[id]);
				}
			});
			
			return tmpl;
		}
	});
})(jQuery);