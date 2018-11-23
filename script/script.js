/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
var isOpen=false;

function SidenavToggle(){
	if (isOpen==false)
	openNav();
	else closeNav();
}
function openNav() {
    document.getElementById("mySidenav").style.width = "15%";
	document.getElementById("main").style.marginLeft = "15%";
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
	document.getElementById("sidenavCog").style.transform="rotate(180deg)";
}

function rotateSidenavCogReverse()
{
	document.getElementById("sidenavCog").style.transform="rotate(0deg)";
}


/*(()=>{
	let $ = c.getContext("2d"),
			h = c.height = window.innerHeight,
			w = c.width = window.innerWidth,
			random = (n)=>Math.random()*n,
			stars = new Array(1000).fill().map(()=>{
				return {r: random(w),	s: random(0.01), a: random(Math.PI*2)};
			});
	function loop(){
		$.fillStyle="rgba(0,0,0,.1)";
		$.fillRect(0,0,w,h);
		stars.forEach(e=>{
			e.a+=e.s;
			$.save();
			$.beginPath();
			$.translate(w/2, h/2);
			$.rotate(e.a);
			$.arc(e.r,e.r,1,0,Math.PI*2);
			//$.arc(Math.cos(e.a)*e.r + w/2, Math.sin(e.a)*e.r + h/2,1,0,Math.PI*2);
			$.closePath();
			$.fillStyle = "white";
			$.fill();
			$.restore()
		})
		requestAnimationFrame(loop)
	}
	loop();
	window.addEventListener("resize", (e)=>{
		w=c.width=window.innerWidth;
		h=c.height=window.innerHeight;
	});
})()
*/