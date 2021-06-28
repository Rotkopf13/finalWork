$(document).ready(function () {
	$("ul").hide();
	$("ul li:odd").css("background-color", "#efefef");
	$(".box h3").click(function () {
		$(this).next().slideToggle();
		var text = $("span", this).text();
		$("span", this).text(text != "+" ? "+" : "-")
	});
});