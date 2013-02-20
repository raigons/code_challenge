;
(function(window, $){

	window.TemplateRender = function($showcaseElement){
		var api = {},
			$el = $showcaseElement;

		api.renderVisitedItem = function(item){
			renderItem(item, $el.find(".visited-product"));
		};

		api.renderListItems = function(items){
			$.each(items, function(i, item){
				item.isList = true;
				renderItem(item, $el.find("#recommended-products-list"));
			});
		};

		var renderItem = function(item, $to){
			item.name = formatItemName(item.name);
			$("#itemTemplate").tmpl(item).appendTo($to);	
		};

		var formatItemName = function(itemName){
			var splitSpaces = itemName.split(" ");
			if(splitSpaces.length > 13){
				var newName = "";
				for(var i = 0; i < 13; i++){
					newName += " " + splitSpaces[i];
				}
				newName += " ...";
				return newName.trim();
			}
			return itemName;
		};

		return api;
	};

})(window, jQuery);