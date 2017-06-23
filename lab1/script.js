/**
 * Created by Ivan Yakimtsov.
 */
 
window.onload = function(){
	document.getElementById('parSubmit').onclick = function() {
	var elementsAmount = document.forms["slick-login"].elements["number"].value;
	if(elementsAmount > 8) elementsAmount = 8;
	document.location.href = "index1.html" + "?ammount="+elementsAmount;
     
	}

	
}


