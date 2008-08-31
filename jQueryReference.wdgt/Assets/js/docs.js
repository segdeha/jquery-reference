/*	docs.js
	Update and manipulate the jQuery documentation
	Andrew Hedges, andrew@hedges.name
	2008-08-17
*/

var DOCS = (function () {
	// private members
	var
		_urls,
		_callback
	;
	
	_urls = {
		xml : MAIN.base + '/Assets/xml/api-docs.xml',
		xsl : {
			nav  : MAIN.base + '/Assets/xsl/nav.xsl',
			main : MAIN.base + '/Assets/xsl/main.xsl'
		}
	};
	
	/*	Function called when docs are done updating
		@param obj obj
	*/
	_callback = function (obj) {
		if (obj.outputString.indexOf('SUCCESS') > -1) {
			// success
			DOCS.init();
		} else {
			// error
		}
	};
	
	// public members
	return {
		/*	Initialise documentation by transforming the API XML to HTML and dumping it into container DIVs
		*/
		init: function () {
			$('#main').xslt(_urls.xml, _urls.xsl.main);
			$('#nav').xslt(_urls.xml, _urls.xsl.nav, UI.init); // activate UI once nav is attached to the DOM
		},
		/*	Update the widget with the latest docs from code.google.com
		*/
		update: function () {
			WW.system(MAIN.base + '/Assets/php/update-docs.php', _callback);
		}
	};
})();