"use strict";//blocks global variables
window.onload = function ()
{
	let ToF = document.getElementById("b1");
	let ToC = document.getElementById("b2");

	let cels = document.getElementById("cels");
	let fahr = document.getElementById("fahr");

	let reset = document.getElementById("reset"); 
	ToF.onclick = function()
	{
		let init  = cels.value;
		let datasArray = init.split("\n");
		let farCounted = 0;
		fahr.value = "";
		for (var i = 0; i < datasArray.length; i++) {
			let x = parseFloat(datasArray[i]);
			if(!isNaN(x))
			{
				farCounted = (x*1.8+32).toFixed(2);
				fahr.value += farCounted +"\n";

			}
		}
		// -32)*0.556
		
	}
	ToC.onclick = function()
	{
		let init  = fahr.value;
		let datasArray = init.split("\n");
		let farCounted = 0;
		cels.value = "";
		for (var i = 0; i < datasArray.length; i++) {
			let x = parseFloat(datasArray[i]);
			if(!isNaN(x))
			{
				farCounted = ((x-32)*0.556).toFixed(2);
				cels.value += farCounted +"\n";
			}
		}
		// -32)*0.556
		
	}

	reset.onclick = function () {
		fahr.value = "";
		cels.value = "";

	}
}
