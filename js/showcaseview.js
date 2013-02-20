;
(function(window, jQuery){
	
	window.ShowcaseView = function($showcaseElement){
		var api 		   = {},
			templateRender = TemplateRender($showcaseElement);

		api.renderValues = function(response){
			var itemReference = response.data.reference.item,
				relatedItems  = response.data.recommendation;

			templateRender.renderVisitedItem(itemReference);
			templateRender.renderListItems(relatedItems);

			api.initCarousel();
		};

		api.loadItems = function(){
			getItems().then(api.renderValues);
		};

		api.initCarousel = function(){
			$showcaseElement.find("#recommended-products-list").jcarousel({
				'buttonPrevHTML': "<span style='float: left'>Prev</span>",
				'buttonNextHTML': "<span style='float: right'>Next</span>"
			});
		};

		var getItems = function(){
			var config = {};
			config.url = "https://tools.chaordicsystems.com/challenge/?callback=X";
			config.dataType = "jsonp";
			config.async = false;

			return $.ajax(config);
		};

		return api;
	};

})(window, jQuery);