var charityLatLong = [51.4442242, -0.1373049];
 
function showGoogleMaps() {
 
var latLng = new google.maps.LatLng(charityLatLong[0], charityLatLong[1]);
 
var mapOptions = {
	zoom: 15, // initialize zoom level - the max value is 21
	streetViewControl: false, // hide the yellow Street View pegman
	scaleControl: true, // allow users to zoom the Google Map
	mapTypeId: google.maps.MapTypeId.ROADMAP,
	center: latLng
};
 
map = new google.maps.Map(document.getElementById('maps_background'),mapOptions);
 
// Show the default red marker at the location
marker = new google.maps.Marker({
	position: latLng,
	map: map,
	draggable: false,
	animation: google.maps.Animation.DROP,
	});
}
google.maps.event.addDomListener(window, 'load', showGoogleMaps);
