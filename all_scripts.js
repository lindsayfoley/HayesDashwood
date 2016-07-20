// When users are viewing the site on a mobile device and click a link in the nav, show sub menu
var mobileSubNavOpener = function() {
	$('nav ul li').click(function() {
		if($(this).hasClass('subNav')) {
			$(this).find('subNav').toggle();
		}
	});
}

$(document).ready(function() {
	mobileSubNavOpener();	
});