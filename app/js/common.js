$(function() {
	var menuLinks = $('.menu-types__link');
	menuLinks.hover(
		function(event) {
		var icon = $(this).find('.icon');
		var text = icon.attr('class').split(' ')[1].split('--')[1];
		var newClass = 'icon--' + text + '-active';
		icon.removeClass();
		icon.addClass('icon');
		icon.addClass(newClass);
	},
	function(event) {
		var icon = $(this).find('.icon');
		var text = icon.attr('class').split(' ')[1].split('--')[1];
		var newClass = 'icon--' + text.split('-')[0];
		icon.removeClass();
		icon.addClass('icon');
		icon.addClass(newClass);
	})

});
