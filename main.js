$(document).on("ready", function(){

	if ("geolocation" in navigator) {
	console.log("Geolocation is available");
	navigator.geolocation.getCurrentPosition(displayPosition, showPositionError);

	} else {
	alert("You don't have Geolocation. Time to upgrade your browser.")
	}

})

function displayPosition(data){
	console.log("Got position!")
	$(".js-set-latitude").text(data.coords.latitude);
	$(".js-set-longitude").text(data.coords.longitude);

	var the_latitude = data.coords.latitude
	var the_longitude = data.coords.longitude
	var html = `

	<img src="http://maps.googleapis.com/maps/api/staticmap?size=1000x1000&zoom=15&center=${the_latitude},${the_longitude}">`
	$(".js-image").append(html);

}

function showPositionError(error) {
	console.log("Failed to get position!")
	console.log(error)
}
