/*	prefs.js
	Set and get widget preferences
	Andrew Hedges, andrew@hedges.name
	2008-08-17
*/

PREFS = (function () {
	// private methods
	var
		// functions
		_generateUniqueKey
	;
	
	/*	Generate a unique identifier for the preference, based on the widget identified and the key passed in
		@param string key String used to identify the preference
	*/
	_generateUniqueKey = function (key) {
		return WW.identifier + '-' + key;
	};
	
	// public methods
	return {
		/*	Get the value of a preference by key, or return undefined
			@param string key
			@return string or undefined
		*/
		get: function (key) {
			var val;
			key = _generateUniqueKey(key);
			val = WW.preferenceForKey(key);
			return ('undefined' === typeof val)? false : val;
		},
		
		/*	Set the value of a preference
			@param string key Preference identifier
			@param string val Preference value
		*/
		set: function (key, val) {
			key = _generateUniqueKey(key);
			WW.setPreferenceForKey(val, key);
		}
	};
})();
