var rides; 
var cost;
var	monthly;



function rideCalc(){
	rides = document.getElementbyID("rides").value; cost = 2.75;
	monthly = rides * cost; 
    rightRide();
}


function rightRide(){
	if (monthly > 116.5) {
	alert("You should buy a Monthly Card!")
	} else {
		alert("You're good")
	}
}