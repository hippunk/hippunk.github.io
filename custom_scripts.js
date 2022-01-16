// Script to open and close sidebar
function w3_open() {
  document.getElementById("mySidebar").style.display = "block";

}
 
function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
}

function open_popup(popup_name) {
	document.getElementById(popup_name).style.display='block';
	document.documentElement.style.overflow = 'hidden';
}

function close_popup(popup_name) {
	document.getElementById(popup_name).style.display='none';
	document.querySelectorAll('video').forEach(vid => vid.pause());
	document.documentElement.style.overflow = 'visible';
}

function generate_card(title, thumbnail, description, content) {
	var popup_name = "popup_"+title.replaceAll(" ","_").toLowerCase();

	var template = `
	<div onclick=\"open_popup('${popup_name}')\" class=\"w3-btn card w3-round-large\"> 
		<h3>${title}</h3>
		<img alt="Thumbnail du projet ${title}" class=\"w3-round-large\" src=${thumbnail} width=\"208\" height=\"167\"/>
		<p class=\"card-text\">${description}</p>
	</div>
	<div id=${popup_name} class=\"w3-center w3-animate-opacity  w3-modal\"  onclick=\"close_popup('${popup_name}');\" >
		
		<div class=\"w3-display-middle w3-card-4 popup-limits\" onclick=\"event.stopPropagation();\">
			<header class=\"w3-container card-header-color\" style="position: sticky; top:0;" > 
				<span onclick=\"close_popup('${popup_name}');\" class=\"w3-button w3-xlarge w3-display-topright\">&times;</span>
				<h2>${title}</h2>
			</header>
			<div class=\"w3-container card-content-color\" >		
				${content}
			</div>
		</div>
		
	</div>
	`;
	
	return template;
}