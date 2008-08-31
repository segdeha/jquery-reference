/*	ui.js
	User interface behaviours
	Andrew Hedges, andrew@hedges.name
	2008-08-30
*/

var UI = (function () {
	// private members
	var
		// constants
		NONE     = 'none',
		BLOCK    = 'block',
		WHITE    = 'white',
		TOBACK   = 'ToBack',
		TOFRONT  = 'ToFront',
		SELECTED = 'selected',
		// values
		_elements,
		// functions
		_htmlToId
	;
	
	
	/*	Convert a string to a valid ID
		@param string str
		@return string
	*/
	_htmlToId = function (str) {
		str = str.toLowerCase()
			.replace(/\s/g, '-')
			.replace(/\$/g, 'dollarsign')
			.replace('(', 'openparen')
			.replace(')', 'closeparen')
			.replace(/\./g, 'dot')
		;
		return str;
	};
	
	// public members
	return {
		/*	Initialise UI behaviours
		*/
		init: function () {
			var flipper, donate, done;
			
			_elements = {
				widget : {
					front : $('#front'),
					back  : $('#back')
				},
				nav : {
					cats    : $('#navigation a.cat'),
					subcats : $('#navigation a.subcat')
				},
				content : {
					cats      : $('#content div.cat'),
					subcats   : $('#content div.subcat'),
					functions : $('#content div.function')
				}
			};
			
			$('#navigation').accordion({
				event         : 'mouseover',
				fillSpace     : true,
				header        : 'a.cat',
				selectedClass : 'selected'
			});
			
			// assign IDs to all content sub-categories
			$.each(_elements.content.subcats, function () {
				var id;
				id = 'subcat-' + _htmlToId($('h2', this).html());
				this.id = id;
			});
			
			// capture clicks on sub-category nav items
			$.each(_elements.nav.subcats, function () {
				var selector;
				selector = '#subcat-' + _htmlToId($(this).html());
				$(this).click(function () {
					$.each(_elements.content.subcats, function () {
						$(this).hide();
					});
					$(selector).show();
				});
			});
			
			// activate apple stuff
			flipper = new AppleInfoButton($('#flipper')[0], $('#front')[0], WHITE, WHITE, UI.showBack);
			done    = new AppleGlassButton($('#done-button')[0], __('Done'), UI.showFront);
			donate  = new AppleGlassButton($('#donate-button')[0], __('Donate'), UTILS.gotoPayPal);
		},
		/*	Flip the widget over to the back
		*/
		showBack: function () {
//			setTimeout(function () {
//				window.resizeTo(237, (_resizeValues[1] > 400)? _resizeValues[1] : 400);
				WW.prepareForTransition(TOBACK);
				_elements.widget.front.css({display: NONE});
				_elements.widget.back.css({display: BLOCK});
				setTimeout(function () {
					WW.performTransition();
				}, 0);
//			}, CLOSEDWIDTH);
		},
		/*	Flip the widget over to the front
		*/
		showFront: function () {
			WW.prepareForTransition(TOFRONT);
			_elements.widget.front.css({display: BLOCK});
			_elements.widget.back.css({display: NONE});
			setTimeout(function () {
				WW.performTransition();
//				window.resizeTo(_resizeValues[0], _resizeValues[1]);
			}, 0);
		}
	};
})();