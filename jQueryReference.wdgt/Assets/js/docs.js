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
			var xml, xsl, xsltp, frag;
			
			/*
			$.ajax({
				async    : false,
				dataType : 'xml',
				success  : function (data) {
					xml = data;
				},
				type     : 'get',
				url      : _urls.xml
			});
			
//			DEBUG.reveal(xml);
			
			$.ajax({
				async    : false,
				dataType : 'xml',
				success  : function (data) {
					xsl = data;
				},
				type     : 'get',
				url      : _urls.xsl
			});
			
//			DEBUG.reveal(xsl);
			
			xsltp = new XSLTProcessor();
			xsltp.importStylesheet(xsl);
			frag  = xsltp.transformToFragment(xml, document);
			
//			DEBUG.reveal(frag);
			*/
			
			$('#transformResult').xslt(_urls.xml, _urls.xsl);
			
		},
		update: function () {
			
		}
	};
})();