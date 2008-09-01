/*	utils.js
	Utility functions
	Andrew Hedges, andrew@hedges.name
	2008-08-17
*/

var UTILS = (function () {
	// private members
	var
		_paypal
	;
	
	// Link to PayPal donations page
	_paypal = 'https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=andrew%40hedges%2ename&item_name=jQuery%20Reference%20Widget&amount=5%2e00&no_shipping=1&cn=Say%20%27hi%27%20to%20the%20developer%21&tax=0&currency_code=EUR&lc=US&bn=PP%2dDonationsBF&charset=UTF%2d8';
	
	// public members
	return {
		/*	Localize a string (based on a function in Apple's Dashcode)
			@param string str
			@return string
		*/
		localize: function (str) {
			try {
				var str = LocalizedStrings[str] || str;
			} catch (e) {}
			return str;
		},
		
		/*	Copy a string to the pasteboard
			@param string str
		*/
		copy: function (str) {
			WW.system("/bin/echo -n '" + str + "' | /usr/bin/pbcopy", function () {});
		},
		
		/*	Go to an URL
			@param string url
		*/
		gotoUrl: function (url) {
			WW.openURL(url);
		},
		
		/*	Take the user to donation link in her default browser
		*/
		gotoPayPal: function () {
			WW.openURL(_paypal);
		}
	};
})();

// Shortcut to localize a string, e.g., __('My String')
var __ = function (str) {
	return UTILS.localize(str);
};
