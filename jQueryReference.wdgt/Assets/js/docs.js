/*	docs.js
	Update and work with the jQuery documentation
	Andrew Hedges, andrew@hedges.name
	2008-08-17
*/

DOCS = (function () {
	// private members
	var _urls;
	_urls = {
		update : 'http://jquery-api-browser.googlecode.com/svn/trunk/api-docs.xml',
		xml    : MAIN.base + '/Assets/xml/api-docs.xml',
		xsl    : MAIN.base + '/Assets/xsl/main.xsl'
	};
	// public members
	return {
		load: function () {
			$('#transformResult').xslt(_urls.xml, _urls.xsl);
		},
		update: function () {
			
		}
	};
})();