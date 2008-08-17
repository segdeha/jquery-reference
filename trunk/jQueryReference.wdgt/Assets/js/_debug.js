var DEBUG;

DEBUG = (function () {
	return {
		write: function (s) {
			alert('----------------------------------------------------------');
			alert(s);
		},
		reveal: function (o) {
			for (p in o) {
				if ('function' !== typeof o[p]) {
					DEBUG.write(p + ': ' + o[p]);
				}
			}
		}
	}
})();
