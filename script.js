//your JS code here. If required.
function removeColor(){
	const select=document.getElementById("colorSelect");
	if(select.selectedIndex !== -1){
		select.remove(select.selectedIndex);
	}
}
const btn=document.querySelector('input[type="button"][value="select and remove"]');
if(btn){
	btn.addEventListener("click",removeColor);
}
