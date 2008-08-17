/*	prefs.js
	Set and get widget preferences
	Andrew Hedges, andrew@hedges.name
	2008-08-17
*/

PREFS = (function () {
	// private methods
	var _generateUniqueKey;
	_generateUniqueKey = function (key) {
		return WW.identifier + '-' + key;
	};
	// public methods
	return {
		get: function (key) {
			var val;
			key = _generateUniqueKey(key);
			val = WW.preferenceForKey(key);
			return ('undefined' === typeof val)? false : val;
		},
		set: function (key, val) {
			key = _generateUniqueKey(key);
			WW.setPreferenceForKey(val, key);
		}
	};
})();
