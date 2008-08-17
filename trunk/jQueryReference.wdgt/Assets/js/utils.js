/*	utils.js
	Utility functions
	Andrew Hedges, andrew@hedges.name
	2008-08-17
*/

UTILS = (function () {
	var _paypal;
	_paypal = 'https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=andrew%40hedges%2ename&item_name=jQuery%20Reference%20Widget&amount=5%2e00&no_shipping=1&cn=Say%20%27hi%27%20to%20the%20developer%21&tax=0&currency_code=EUR&lc=US&bn=PP%2dDonationsBF&charset=UTF%2d8';
	return {
		// Localize a string (based on a function in Apple's Dashcode)
		localize: function (string) {
			try {
				var string = LocalizedStrings[string] || string;
			} catch (e) {}
			return string;
		},
		// Copy a string to the pasteboard
		copy: function (str) {
			WW.system("/bin/echo -n '" + str + "' | /usr/bin/pbcopy", function () {});
		},
		// Go to donation link
		gotoPayPal: function () {
			WW.openURL(_paypal);
		}
	};
})();

// Shortcut to localize a string, e.g., __('My String')
__ = function (string) {
	return UTILS.localize(string);
};

// Shortcut to go to an external URL, e.g., go('http://code.google.com/p/jquery-reference/')
go = WW.openURL;
