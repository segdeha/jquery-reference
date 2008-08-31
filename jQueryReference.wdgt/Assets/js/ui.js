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
		OPEN     = 'open',
		BLOCK    = 'block',
		WHITE    = 'white',
		CLOSED   = 'closed',
		TOBACK   = 'ToBack',
		TOFRONT  = 'ToFront',
		SELECTED = 'selected',
		// values
		_sizes,
		_state,
		_elements,
		// functions
		_htmlToId,
		_writeUpdateBlurb
	;
	
	_sizes = {
		open   : {
			width  : 700,
			height : 500
		},
		closed : {
			width  : 199,
			height : 500
		}
	};
	_state = OPEN;
	
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
	
	/*	Build and display the blurb on the back of the widget about updating the docs
		Do this here so we can easily localise the strings.
	*/
	_writeUpdateBlurb = function () {
		var tmpl;
		tmpl = [
			'<p>', __('Update to the latest version of the jQuery documentation.'), '</p>',
			'<p><a onclick="DOCS.update();">', __('Update Now'), '</a></p>',
			'<p>(', __('Requires internet connection.'), ')</p>',
			'<div id="ajax-loader"></div>'
		];
		$('#update-docs').html(tmpl.join(''));
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
			
			_writeUpdateBlurb();
		},
		/*	Flip the widget over to the back
		*/
		showBack: function () {
			// animate 300
			
			setTimeout(function () {
				window.resizeTo(_sizes.closed.width, _sizes.closed.height);
				WW.prepareForTransition(TOBACK);
				_elements.widget.front.css({display: NONE});
				_elements.widget.back.css({display: BLOCK});
				setTimeout(function () {
					WW.performTransition();
				}, 0);
			}, 300);
		},
		/*	Flip the widget over to the front
		*/
		showFront: function () {
			WW.prepareForTransition(TOFRONT);
			_elements.widget.front.css({display: BLOCK});
			_elements.widget.back.css({display: NONE});
			setTimeout(function () {
				WW.performTransition();
				window.resizeTo(_sizes.open.width, _sizes.open.height);
			}, 0);
		}
	};
})();