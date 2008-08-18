/*	docs.js
	Update and work with the jQuery documentation
	Andrew Hedges, andrew@hedges.name
	2008-08-17
*/

var DOCS = (function () {
	// private members
	var _urls, _callback;
	_urls = {
		xml    : MAIN.base + '/Assets/xml/api-docs.xml',
		xsl    : MAIN.base + '/Assets/xsl/main.xsl'
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
			$('#front .content').xslt(_urls.xml, _urls.xsl);
		},
		update: function () {
			WW.system(MAIN.base + '/Assets/php/update-docs.php', _callback);
		}
	};
})();