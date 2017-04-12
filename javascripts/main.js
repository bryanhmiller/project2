var loveButton = $("#love-button");
var showLove = $("#show-love");

loveButton.click(showMeLove);

function showMeLove() {
	loveButton.addClass("hidden");
	showLove.removeClass("hidden");
}
