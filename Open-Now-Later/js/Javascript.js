//K Gamble Ltd - K Gamble//
//Code written/edited by K Gamble//
//Original codde is referenced below//

// function that creates an array and calls a specific data in the array//
// w3 schools code - output written by me //
function NewDay()
	{
	var today = new Date();
	var hourNow = today.getHours();
    var d = new Date();
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    var n = weekday[d.getDay()];
	if (d.getDay()>=6 || d.getDay()<=0)
	{ 
		document.getElementById("Call").innerHTML = "Oh No !";
		document.getElementById("Call1").innerHTML ="Closed until Monday";
	}
		 else if (hourNow < 9)
			{ 
				document.getElementById("Call").innerHTML = "Not Long until we";
				document.getElementById("Call1").innerHTML ="Open at 9am";
			}
			else if (hourNow <17)
				{	
					document.getElementById("Call").innerHTML = "Contact Us";
					document.getElementById("Call1").innerHTML = "Open NOW";
					blink();				
				}
				else if (hourNow >17 || d.getDay()!=5)
				{	
					document.getElementById("Call").innerHTML = "Just too late !";
					document.getElementById("Call1").innerHTML = "Open tomorrow";
				}
					else if (d.getDay()==5)
					{
					document.getElementById("Call").innerHTML = "Oh no!";
					document.getElementById("Call1").innerHTML = "Open Monday at 9am";
					}
	}




//http://stackoverflow.com/questions/8360130/how-to-make-a-text-flash-in-html-javascript//
//Flashing text as not available in Chrome, Firefox etx//
function blink() 
	{
   var f = document.getElementById('Call');
   setInterval(function() {
      f.style.display = (f.style.display == 'none' ? '' : 'none');
   }, 1000);
	var g = document.getElementById('Call1');
   setInterval(function() {
      g.style.display = (g.style.display == 'none' ? '' : 'none');
   }, 1000);
	}

