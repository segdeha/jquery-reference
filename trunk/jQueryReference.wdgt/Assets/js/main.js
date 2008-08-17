/*	main.js
	Widget initialization and utility methods
	Andrew Hedges, andrew@hedges.name, unless otherwise noted
*/

var WW, MAIN;

WW = window.widget;

// Localize a string, e.g., 'My String'.localize()
String.prototype.localize = function () {
	try { var string = localizedStrings[this] || this; } catch (e) {}
	return string;
};

// Shortcut to localize a string, e.g., __('My String')
__ = function (str) {
	return str.localize();
};

// Copy string data to the pasteboard
String.prototype.copy = function () {
	var handler;
	handler = function () {};
	widget.system("/bin/echo -n '" + this + "' | /usr/bin/pbcopy", handler);
};

// Main initialization routine
MAIN = (function () {
	return {
		init: function () {
			
		}
	};
})();

// Initialize the widget when the document is ready
$(function () {
	MAIN.init();
});