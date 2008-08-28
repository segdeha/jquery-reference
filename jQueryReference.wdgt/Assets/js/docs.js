/*	docs.js
	Update and work with the jQuery documentation
	Andrew Hedges, andrew@hedges.name
	2008-08-17
*/

var DOCS = (function () {
	// private members
	var _urls, _callback;
	_urls = {
		xml : {
			full   : MAIN.base + '/Assets/xml/api-docs.xml',
			simple : MAIN.base + '/Assets/xml/simple.xml'
		},
		xsl : {
			nav  : MAIN.base + '/Assets/xsl/nav.xsl',
			main : MAIN.base + '/Assets/xsl/main.xsl'
		}
	};
	_callback = function (obj) {
		if (obj.outputString.indexOf('SUCCESS') > -1) {
			// success
		} else {
			// error
		}
	};
	// public members
	return {
		load: function () {
//			$('#nav').xslt(_urls.xml.full, _urls.xsl.nav);
//			$('#main').xslt(_urls.xml.full, _urls.xsl.main);
			
			$('#nav').xslt(_urls.xml.simple, _urls.xsl.nav);
//			$('#main').xslt(_urls.xml.simple, _urls.xsl.main);
			
			DEBUG.write($('.content').html());
			
		},
		update: function () {
			WW.system(MAIN.base + '/Assets/php/update-docs.php', _callback);
		}
	};
})();