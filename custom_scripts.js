// Script to open and close sidebar
function w3_open() {
  document.getElementById("mySidebar").style.display = "block";

}
 
function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
}

function disable_scroll() {
	document.documentElement.style.overflow = 'hidden';
}

function enable_scroll() {
	document.documentElement.style.overflow = 'visible';
}

function generate_card(tittle, thumbnail, description, content) {
	var popup_name = "popup_"+tittle.replaceAll(" ","_").toLowerCase();

	var template = `
	<div onclick=\"document.getElementById('${popup_name}').style.display='block';disable_scroll();\" class=\"w3-btn card w3-round-large\"> 
		<h3>${tittle}</h3>
		<img class=\"w3-round-large\" src=${thumbnail} width=\"208\" height=\"167\" frameborder=\"0\"/>
		<p class=\"card-text\">${description}</p>
	</div>
	<div id=${popup_name} class=\"w3-center w3-animate-opacity  w3-modal \">
		<div class=\"w3-display-middle  w3-card-4 popup-limits\">
		<header class=\"w3-container w3-color-dark\" style="position: sticky; top:0;"> 
			<span onclick=\"document.getElementById('${popup_name}').style.display='none';document.getElementById('vid').pause();enable_scroll();\" class=\"w3-button w3-display-topright\">&times;</span>
			<h2>${tittle}</h2>
		</header>
		<div class=\"w3-container w3-color-light\" >		
			${content}
		</div>
	  </div>
	</div>
	`;
	return template;
}