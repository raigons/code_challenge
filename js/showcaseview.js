;
(function(window, jQuery){
	
	window.ShowcaseView = function($showcaseElement){
		var api 		   = {},
			templateRender = TemplateRender($showcaseElement);

		api.renderValues = function(response){
			var itemReference = response.data.reference.item,
				relatedItems  = response.data.recommendation;

			templateRender.renderVisitedItem(itemReference);
		};

		api.loadItems = function(){
			getItems().then(api.renderValues);
		};

		var getItems = function(){
			var config = {};
			config.url = "https://tools.chaordicsystems.com/challenge/?callback=X";
			config.dataType = "jsonp";

			return $.ajax(config);
		};

		return api;
	};

})(window, jQuery);