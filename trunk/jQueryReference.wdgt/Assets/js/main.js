/*	main.js
	Widget initialization
	Andrew Hedges, andrew@hedges.name, unless otherwise noted
	2008-08-17
	Project home: http://code.google.com/p/jquery-reference/
	Widget home:  http://andrew.hedges.name/widgets/#jqueryreference
*/

var WW, MAIN;

WW = window.widget;

// Main initialization routine
MAIN = (function () {
	return {
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
				DEBUG.write('ERROR: base = ' + base);
				return '';
			}
		})(),
		init: function () {
			
			DOCS.load();
			
		}
	};
})();

// Initialize the widget when the document is ready
$(function () {
	MAIN.init();
});