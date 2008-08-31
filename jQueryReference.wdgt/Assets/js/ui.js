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
			_elements = {
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
		}
	};
})();