/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
var isOpen=false;

function SidenavToggle(){
	if (isOpen==false)
	openNav();
	else closeNav();
}
function openNav() {
    document.getElementById("mySidenav").style.width = "500px";
	document.getElementById("main").style.marginLeft = "500px";
	rotateSidenavCog();
	isOpen=true;
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
	document.getElementById("main").style.marginLeft = "0";
	rotateSidenavCogReverse();
	isOpen=false;
} 

function rotateSidenavCog()
{
	document.getElementById("sidenavCog").style.transform="rotate(360deg)";
}

function rotateSidenavCogReverse()
{
	document.getElementById("sidenavCog").style.transform="rotate(0deg)";
}
