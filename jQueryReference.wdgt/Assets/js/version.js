/*	version.js
	Check for new widget version
	Andrew Hedges, andrew@hedges.name
	2008-08-18
*/

var VERSION = (function () {
	// private members
	var _version, _setLocalVersion;
	_setLocalVersion = function () {
		WW.system('sh -c "defaults read `pwd`/Info CFBundleVersion"', function (obj) {
			_version = obj.outputString;
		});
	};
	// public members
	return {
		init: function () {
			_setLocalVersion();
		},
		check: function () {
			$.ajax({
				url   : 'http://segdeha.com/widgets/version.php?widget=jqueryreference',
				cache : false,
				error : function () {
					
				},
				success : function () {
					
				}
			});
		}
	};
})();