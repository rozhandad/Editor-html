var modal = document.getElementById("myModalcode");
var btn = document.getElementById("mymodals1code");
var span = document.getElementsByClassName("closemodal")[0];
btn.onclick = function() {  modal.style.display = "block";}
span.onclick = function() {  modal.style.display = "none";}
window.onclick = function(event) {
if (event.target == modal)
{
	modal.style.display = "none";  
}
}

