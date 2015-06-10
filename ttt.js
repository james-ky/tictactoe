var setActive = function(x) {

	if ( x === 1 ) {
    	document.getElementById("one").className = "active";
    	document.getElementById("nine").className = "cActive";
    	return "one";
		} else if (x === 2) {
			document.getElementById("three").className = "cActive";
			} else if (x === 4) {
				document.getElementById("seven").className = "cActive";
			
	}
	if ( x === 2 ) {
    	document.getElementById("two").className = "active";
    	return "two";
	}
	if ( x === 3 ) {
    	document.getElementById("three").className = "active";
    	return "three";
	}
	if ( x === 4 ) {
    	document.getElementById("four").className = "active";
    	return "four";
	}
	if ( x === 5 ) {
    	document.getElementById("five").className = "active";
    	return "five";
	}
	if ( x === 6 ) {
    	document.getElementById("six").className = "active";
    	return "six";
	}
	if ( x === 7 ) {
    	document.getElementById("seven").className = "active";
    	return "seven";
	}
	if ( x === 8 ) {
    	document.getElementById("eight").className = "active";
    	return "eight";
	}
	if ( x === 9 ) {
    	document.getElementById("nine").className = "active";
    	return "nine";	
	}
var getChoice = setActive(x);
var li = document.getElementById(x);
li.onclick = function() {
	document.getElementById(x).className = "active";
};


}



/*var result = setActive();
	if (result === true ) {
		document.getElementById("nine").className = "cActive";
	}*/
