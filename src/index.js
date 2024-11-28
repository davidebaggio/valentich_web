$(document).ready(function () {
	function updateVisibility() {
		var pageTop = $(document).scrollTop();
		var pageBottom = pageTop + $(window).height();
		var tags = $(".container-content");

		for (var i = 0; i < tags.length; i++) {
			var tag = tags[i];

			if ($(tag).offset().top < pageBottom) {
				$(tag).addClass("visible");
			} else {
				$(tag).removeClass("visible");
			}
		}
	}

	// Run the function on page load
	updateVisibility();

	// Run the function on scroll
	$(document).on("scroll", updateVisibility);
});
