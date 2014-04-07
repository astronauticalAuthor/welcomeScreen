function run(){
	var date = new Date();
	var hours = date.getHours();
	var minutes = date.getMinutes();
	var seconds = date.getSeconds();

	//clear the graph before calling again
	/*var places = [];
	places = document.getElementsByClassName('show');
	for (var x = 0; x < places.length; x++){
		places[x].classList.remove('solid');
	}
*/
	//determine tens place
	for (var x = 4; x >= 1; x /= 2){
		var current = x * 10;
		if (seconds - current > 0){
			var name = "second" + current;
			document.getElementById(name).classList.add('solid');
			seconds -= current;
		}
	}

	//determine ones place
	for (var x = 8; x >= 1; x /= 2){
		if (seconds - x > 0){
			var name = "second" + x;
			document.getElementById(name).classList.add('solid');
		}
	}

	//call it over and over
	setInterval(run, 1000);
}
