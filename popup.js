
const btnToggle = document.getElementById("btnToggle");


console.log('uros');
function toggleAll() {
	chrome.tabs.getSelected(null, function (tab) {
		chrome.tabs.executeScript(tab.id, {
			file:"helpers/darkTheme.js"
		}, function (response) {
			console.log(response);
		});
	});

	// allBtn.innerText = displayAll ? "All: Hide" : "All: Show";
}

document.addEventListener('DOMContentLoaded', function () {
	// btnToggle.addEventListener("click", toggleAll);
	window.onload = toggleAll();
	console.log("Succesfull")
});
