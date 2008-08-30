/*	ui.js
	User interface behaviours
	Andrew Hedges, andrew@hedges.name
	2008-08-30
*/

var UI = (function () {
	// private members
	var
		// constants
		SELECTED = 'selected',
		// values
		_elements,
		// functions
		_animate
	;
	
	/*	Animate the opening and closing of categories
		@param obj toOpen DOM object to open at the expense of all others
	*/
	_animate = function (toOpen) {
		
	};
	
	// public members
	return {
		/*	Initialise UI behaviours
		*/
		init: function () {
			_elements = {
				nav : {
					cats    : $('#navigation li.cat a'),
					subcats : $('#navigation ul.subcat li')
				}
			};
			// hilite first category
			$(_elements.nav.cats[0]).addClass(SELECTED);
			// categories
			$.each(_elements.nav.cats, function () {
				$(this)
					.mouseover(function () {
						$.each(_elements.nav.cats, function () {
							// remove hilite from other cats
							$(this).removeClass(SELECTED);
						});
						// hilite current category
						$(this).addClass(SELECTED);
						// open up this category
						_animate(this);
					})
					.click(function () {
						
					})
				;
			});
			// sub-categories
			$.each(_elements.nav.subcats, function () {
				$(this)
					.click(function () {
						
					})
				;
			});
		}
	};
})();