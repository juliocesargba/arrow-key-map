$(document).ready(function() {
    document.onkeydown = checkKey;

	function checkKey(e) {

	    e = e || window.event;

	    if (e.keyCode == '38') {
	        let button = $('#tsf > div.tsf-p > div.jsb > center > input[type="submit"]:nth-child(1)')
	        if(button != undefined && $(button).is("input")){
	        	$(button).trigger("click")
	        }else{
	        	console.log("not found")
	        }
	        //UP

	    }
	    else if (e.keyCode == '40') {
	        console.log("Down")
	    }
	    else if (e.keyCode == '37') {
	       console.log("Esquerda")
	    }
	    else if (e.keyCode == '39') {
	       console.log("Direita")
	    }

	}
});