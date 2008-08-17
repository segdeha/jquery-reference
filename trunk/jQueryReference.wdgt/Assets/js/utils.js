/*	utils.js
	Utility functions
	Andrew Hedges, andrew@hedges.name
	2008-08-17
*/

UTILS = (function () {
	var _paypal;
	_paypal = 'https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=andrew%40hedges%2ename&item_name=PHP%20Function%20Reference&amount=5%2e00&no_shipping=1&cn=Send%20a%20note%20to%20the%20developers&tax=0&currency_code=EUR&lc=US&bn=PP%2dDonationsBF&charset=UTF%2d8';
	return {
		/**
		 * Localize a string (based on a function in Apple's Dashcode)
		 */
		localize: function (string) {
			try {
				var string = LocalizedStrings[string] || string;
			} catch (e) {}
			return string;
		},
		/**
		 * Copy a string to the pasteboard
		 */
		copy: function (str) {
			WW.system("/bin/echo -n '" + str + "' | /usr/bin/pbcopy", function () {});
		},
		/**
		 * Go to an external URL (use PHPFR.ui.followLink for internal links)
		 * @param string url URL of the page to go to
		 */
		gotoURL: function (url) {
			if ('undefined' === typeof WW) {
				location.href = url;
			} else {
				WW.openURL(url);
			}
		},
		// go to donation link
		gotoPayPal: function () {
			PHPFR.util.gotoURL(_paypal);
		}
	};
})();

// Shortcut to localize a string, e.g., __('My String')
__ = function (string) {
	return UTILS.localize(string);
};

// Shortcut to go to an external URL, e.g., go('http://code.google.com/p/jquery-reference/')
go = function (url) {
	UTILS.gotoURL(url);
};
