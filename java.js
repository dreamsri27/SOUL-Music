fetch("https://shazam.p.rapidapi.com/auto-complete?term=dancing%20with&locale=en-US", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "shazam.p.rapidapi.com",
		"x-rapidapi-key": "b9131d8c93msh86ae7ef5c867036p1326b6jsn8c3a720e79a7"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});
//token broswer associated signin logout token