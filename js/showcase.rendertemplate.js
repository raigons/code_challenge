;
(function(window, $){

	window.TemplateRender = function($showcaseElement){
		var api = {},
			$el = $showcaseElement;

		api.renderVisitedItem = function(item){
			item.name = formatItemName(item.name);
			renderItem(item, $el.find(".visited-product"));
		};

		var renderItem = function(item, $to){
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