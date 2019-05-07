	function timeElapse(date){
		// // Set the unit values in milliseconds.  
		// var msecPerMinute = 1000 * 60;  
		// var msecPerHour = msecPerMinute * 60;  
		// var msecPerDay = msecPerHour * 24; 

		// // Set a date and get the milliseconds  
		// var date = new Date('12/26/2017');  
		// var dateMsec = date.getTime();  

		// // Set the date to January 1, at midnight, of the specified year.  
		// date.setMonth(12);  
		// date.setDate(26);
		// date.setFullYear(2017);  
		// date.setHours(0, 0, 0, 0); 

		// // Get the difference in milliseconds.  
		// var interval = dateMsec - date.getTime();  

		// // Calculate how many days the interval contains. Subtract that  
		// // many days from the interval to determine the remainder.  
		// var days = Math.floor(interval / msecPerDay );  
		// interval = interval - (days * msecPerDay );  

		// // Calculate the hours, minutes, and seconds.  
		// var hours = Math.floor(interval / msecPerHour );  
		// interval = interval - (hours * msecPerHour );  

		// var minutes = Math.floor(interval / msecPerMinute );  
		// interval = interval - (minutes * msecPerMinute );  

		// var seconds = Math.floor(interval / 1000 ); 

	var current = new Date();
	var dd = current.getDate();
	var mm = current.getMonth()+1;
	var yyyy = current.getFullYear();
	current.setFullYear(yyyy,mm,dd);
	var seconds = (Date.parse(current) - Date.parse(date)) / 1000;
	var days = Math.floor(seconds / (3600 * 24));
	seconds = seconds % (3600 * 24);
	var hours = Math.floor(seconds / 3600);
	if (hours < 10) {
		hours = "0" + hours;
	}
	seconds = seconds % 3600;
	var minutes = Math.floor(seconds / 60);
	if (minutes < 10) {
		minutes = "0" + minutes;
	}
	seconds = seconds % 60;
	if (seconds < 10) {
		seconds = "0" + seconds;
	}
	var result = 	"<span class=\"digit\">" 
					+ days + "</span> days <span class=\"digit\">" 
					+ hours + "</span> hours <span class=\"digit\">" 
					+ minutes + "</span> minutes <span class=\"digit\">" 
					+ seconds + "</span> seconds"; 
	$("#elapseClock").html(result);
}
	// Time Set tại đây
	var together = new Date();
	// Set ngày tính từ ngày set đến hiện tại
	together.setFullYear(2017, 12, 26);
	// Set Giờ
	together.setHours(17);
	//Set Phút
	together.setMinutes(0);
	//Set giây
	together.setSeconds(0);
	//Rãnh thì set tiếp cái này luôn đê :v
	together.setMilliseconds(0);
		
	if (!document.createElement('canvas').getContext) {
		var msg = document.createElement("div");
		msg.id = "errorMsg";
		msg.innerHTML = "Your browser doesn't support HTML5!<br/>Recommend use Chrome 14+/IE 9+/Firefox 7+/Safari 4+"; 
		document.body.appendChild(msg);
		document.execCommand("stop");
	} else {
		timeElapse(together);
		setInterval(function () {
		timeElapse(together);
		}, 500);
	}
