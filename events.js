$(document).ready(function() {
    document.onkeydown = checkKey;

	function checkKey(e) {

	    e = e || window.event;

	    if (e.keyCode == '38') {
			console.log("UP")
	        let button = $('#main > div:nth-child(4) > div.col-md-5 > button');
	        if(button != undefined && $(button).is("button")){
	        	$(button).trigger("click");
	        }else{
	        	console.log("Ocorreu algum erro, recarregue a página por favor");
	        }
	        //UP

	    }
	    else if (e.keyCode == '40') {
			console.log("Down")
			let button = $('#main > div:nth-child(5) > div.col-md-5 > button');
	        if(button != undefined && $(button).is("button")){
	        	$(button).trigger("click");
	        }else{
	        	console.log("Ocorreu algum erro, recarregue a página por favor");
	        }
	        
	    }
	    else if (e.keyCode == '37') {
		   console.log("Esquerda")
		   let button = $('#main > div:nth-child(7) > div.col-md-5 > button');
	        if(button != undefined && $(button).is("button")){
	        	$(button).trigger("click");
	        }else{
	        	console.log("Ocorreu algum erro, recarregue a página por favor");
	        }
	    }
	    else if (e.keyCode == '39') {

		   console.log("Direita")
		   let button = $('#main > div:nth-child(8) > div.col-md-5 > button');
	        if(button != undefined && $(button).is("button")){
	        	$(button).trigger("click");
	        }else{
	        	console.log("Ocorreu algum erro, recarregue a página por favor");
			}
			
	    }else if(e.keyCode == '32'){
			console.log("Espaço")
			let button = $('#main > div:nth-child(6) > div.col-md-5 > button');
	        if(button != undefined && $(button).is("button")){
	        	$(button).trigger("click");
	        }else{
	        	console.log("Ocorreu algum erro, recarregue a página por favor");
	        }
		}

	}
});