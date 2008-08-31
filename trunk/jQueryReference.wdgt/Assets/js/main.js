/*	main.js
	Widget initialisation
	Andrew Hedges, andrew@hedges.name, unless otherwise noted
	2008-08-17
	Project home: http://code.google.com/p/jquery-reference/
	Widget home:  http://andrew.hedges.name/widgets/#jqueryreference
*/

var WW = window.widget;

var MAIN = (function () {
	// private members
	// public members
	return {
		// Base HREF for calling resources with absolute paths
		// e.g., /Users/andrew/Library/Widgets/jQuery Reference.wdgt
		base: (function () {
			var base;
			base = document.location.href.substring(7, document.location.href.length - 13);
			// Work around differences in Tiger versus Leopard
			if (/^sers/.test(base)) {
				base = '/U' + base;
			} else if (/^ibrary/.test(base)) {
				base = '/L' + base;
			}
			if (/^\/Users/.test(base) || /^\/Library/.test(base)) {
				return base;
			} else {
				if ('undefined' !== typeof WW) DEBUG.write('ERROR: base = ' + base);
				return '';
			}
		})(),
		/*	Main initialisation routine
		*/
		init: function () {
			DOCS.init();
			VERSION.init();
		}
	};
})();

// Initialise the widget when the document is ready
$(MAIN.init);