var d = new Date();
var time = d.getHours();
if (time < 12 ){
	alert("Good Morning");
}
else if (time >= 12 && time <= 17){
	alert("Good Afternoon");
}
else if (time >= 17 && time <=24){
  	alert("Good Evening");

}