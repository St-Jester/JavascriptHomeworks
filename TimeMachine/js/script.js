"use strict";//blocks global variables

window.onload = function ()
{
	let forward = document.getElementById("b1");
	let backward = document.getElementById("b2");


	let clockF = document.getElementById("clockF");
	let clockC = document.getElementById("clockC");


	let hrs = document.getElementById("hrs");
	let min = document.getElementById("min");
	let sec = document.getElementById("sec");

	let m = 0;
	let s = 0;
	let h = 0;

	let H,M,S, Hb, Mb, Sb;
	Hb = Mb = Sb = 0;
	let Hfb,Mfb,Sfb;

	let refreshIntervalId;

	function ShowTickForward()
	{
		s+=1;
		if(s >=59)
		{
			s = 0;
			m++;
		}
		if(m>=59)
		{
			m = 0;
			h++;
		}
		H = h<10?"0"+h:h;
		M = m<10?"0"+m:m;
		S = s<10?"0"+s:s;	
		clockF.innerText = H+":"+M+":"+S;
	}
	function ShowTickBack()
	{
		Sb--;
		if(Sb<0)
		{
			Sb = 59;
			Mb--;
		}
		if(Mb <0)
		{
			Mb = 59;
			Hb --;
		}
		if(Sb<=0&&Mb<=0&&Hb <=0)
		{
			alert("Time travel ended!");
			StopTimeMachine();
			
		}

		Hfb = Hb<10?"0"+Hb:Hb;
		Mfb = Mb<10?"0"+Mb:Mb;
		Sfb = Sb<10?"0"+Sb:Sb;	
		clockB.innerText = Hfb+":"+Mfb+":"+Sfb;
	}

	function StopTimeMachine() {
		Hb = Mb = Sb = 0;
		clockB.innerText = "00:00:00";
		clearInterval(refreshIntervalId);

	}
	forward.onclick = function()
	{
		setInterval(ShowTickForward, 1000);
	}

	backward.onclick = function()
	{
		Hb = parseInt(hrs.value);
		Mb = parseInt(min.value);
		Sb = parseInt(sec.value);

		refreshIntervalId= setInterval(ShowTickBack, 1000);
	}
}
