var input = document.getElementById("input");
var submit = document.getElementById("submit");
var results = document.getElementById("results");
submit.addEventListener("click", update);

function update() {
	var request = input.value.trim();
	results.textContent = request;
}