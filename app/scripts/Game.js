var compteur;
var sequences

function init(){
	//code XMLHttpRequest
	var req = new XMLHttpRequest();
	req.open("GET", "../sequences.json", true); 
	req.onreadystatechange = monCode;   // la fonction de prise en charge
	req.send(null); 

	


}

function monCode() 
{ 
   if (req.readyState == 4) 
   { 
        doc = eval('(' + req.responseText + ')'); 
   }
} 


function verification(Element e){
	var src=e.src;

}