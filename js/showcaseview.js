;
(function(window, $){
	
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
				'buttonPrevHTML': "<span class='carousel-prev'>Prev</span>",
				'buttonNextHTML': "<span class='carousel-next'>Next</span>"
			});
		};

		api.next = function(e){
			$showcaseElement.find(".carousel-next").trigger("click");
		};

		api.prev = function(e){
			$showcaseElement.find(".carousel-prev").trigger("click");
		}

		var getItems = function(){
			var config = {};
			config.url = "https://tools.chaordicsystems.com/challenge/?callback=X";
			config.dataType = "jsonp";
			config.async = false;

			return $.ajax(config);
		};

		$showcaseElement.on("click", ".next", api.next);
		$showcaseElement.on("click", ".prev", api.prev);
		return api;
	};

})(window, jQuery);