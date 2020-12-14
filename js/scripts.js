document.getElementById("alert1").style.display = "none";
document.getElementById("alert2").style.display = "none";

var femaleAkanNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
var maleAkanNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];

var daysWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
//calling functions
function getAkanName() {
	var year = parseInt(document.getElementById("year").value);
	var month = parseInt(document.getElementById("month").value);
	var day = parseInt(document.getElementById("day").value);
	var male = document.getElementById("male");
	var female = document.getElementById("female");

	//validate date
	if (day <= 0 || day >= 31) {
		alert(
			"INVALID DATE!"
		);
	}
	var day = new Date(year + "/" + month + "/" + day);
	//storing date in variable date of birth
	var dateOfBirth = day.getDay();
	if (male.checked == true) {
		document.getElementById("alert1").style.display = "block";
		document.getElementById("span2").innerHTML =
			"Your Akan Name is " + maleAkanNames[dateOfBirth];
	} else if (female.checked == true) {
		document.getElementById("alert1").style.display = "block";
        document.getElementById("span2").innerHTML = 
        "Your Akan Name is " + femaleAkanNames[dateOfBirth];
	}
}
//refresh button the whole site
function refreshPage() {
	window.location.reload();
};
       
        