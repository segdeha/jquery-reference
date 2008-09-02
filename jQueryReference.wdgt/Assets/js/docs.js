/*	docs.js
	Update and manipulate the jQuery documentation
	Andrew Hedges, andrew@hedges.name
	2008-08-17
*/

var DOCS = (function () {
	// private members
	var
		_urls,
		_returns,
		_callback
	;
	
	_urls = {
		xml : MAIN.base + '/Assets/xml/api-docs.xml',
		xsl : {
			nav     : MAIN.base + '/Assets/xsl/nav.xsl',
			main    : MAIN.base + '/Assets/xsl/main.xsl',
			version : MAIN.base + '/Assets/xsl/version.xsl'
		}
	};
	
	_returns = 0;
	
	/*	Function called when docs are done updating
		@param obj obj
	*/
	_callback = function (obj) {
		
		DEBUG.reveal(obj);
		
		if (obj.outputString.indexOf('SUCCESS') > -1) {
			// success
			DOCS.init(true);
			$('#ajax-loader').hide();
		} else {
			// error
		}
	};
	
	// public members
	return {
		/*	Initialise documentation by transforming the API XML to HTML and dumping it into container DIVs
			@param boolean refresh True if we're just refreshing the docs, not rebuilding the whole UI
		*/
		init: function (refresh) {
			var timer;
			
			// Execute transforms
			$('#nav').empty().xslt(_urls.xml, _urls.xsl.nav, function () {
				++_returns;
			});
			$('#main').empty().xslt(_urls.xml, _urls.xsl.main, function () {
				++_returns;
			});
			$('#version').empty().xslt(_urls.xml, _urls.xsl.version);
			
			// Initialise the UI once both XSLTs have returned
			timer = setInterval(function () {
				if (_returns > 1) {
					clearInterval(timer);
					_returns = 0; // reset value in case user updates docs
					UI.init(refresh);
				}
			}, 20);
		},
		/*	Update the widget with the latest docs from code.google.com
		*/
		update: function () {
			$('#ajax-loader').show();
			WW.system("/usr/bin/php -f ./Assets/php/update-docs.php", _callback);
			// this prevents display from getting munged, but i'd prefer not to have to do it
			setTimeout(function () {
				UI.showFront();
			}, 250);
		}
	};
})();