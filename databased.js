var input = document.getElementById("input");
var submit = document.getElementById("submit");
var results = document.getElementById("results");

var database = firebase.database();

submit.addEventListener("click", update);

function update() {
	var request = input.value.trim();
	var v = database.ref(request).once("value").then(function(snapshot) {
		if (snapshot.exists()) {
			results.innerHTML = snapshot.val().fill;
			results.innerHTML += " STOP";
		}
		else {
			results.innerHTML = "does not exist";
		}
	});
}