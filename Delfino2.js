function waktu(){

var d = new Date();
var time = d.getHours();

if (time < 12){
//waktu siang
	var x = document.getElementById("gambar");
	document.body.style.backgroundImage="url('image/day.jpg')";
}
else if (time >= 12 && time <= 17){
// waktu sore
	var x = document.getElementById("gambar");
	document.body.style.backgroundImage="url('image/sunset.jpg')";

}
else if (time >= 17 && time <=24){
// waktu malam
	var x = document.getElementById("gambar");
	document.body.style.backgroundImage="url('image/night.jpg')";

}
}