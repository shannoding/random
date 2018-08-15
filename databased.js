var input = document.getElementById("input");
var submit = document.getElementById("submit");
var results = document.getElementById("results");

var database = firebase.database();

submit.addEventListener("click", update);

function update() {
	var request = input.value.trim();
	var v = database.ref(request).once("value");
	//if (v.exists()) {
		results.textContent = v.val();
	//}
	//else {
		//results.textContent = "doesn't exist";
	//}
}