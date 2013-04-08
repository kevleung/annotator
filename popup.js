// calls the javascript window print function which in turn opens chrome's
// print to PDF window
$('#save').click(function() {
	chrome.tabs.executeScript(null, {file:"jquery-1.9.0.min.js"},
		function() {
			chrome.tabs.executeScript(null, {file:"savenotes.js"});
	});
});

// get the color for the highlight
$('.box').click(function() {
	var colorstr = rgb2hex($(this).css("background-color"));
	if (colorstr == '#FFFFFF') {
		colorstr = 'transparent';
	}
	chrome.tabs.insertCSS(null, {file: "popup.css"});
	//chrome.tabs.getSelected(null, (function(tab) { take out later	
	chrome.tabs.executeScript(null, {code: 'var color = "' + colorstr + '";'},
		function() {
		chrome.tabs.executeScript(null, {file:"jquery-1.9.0.min.js"},
			function() {
				chrome.tabs.executeScript(null, {file:"highlight.js"});
		});
	});
});

//Function to convert hex format to a rgb color
function rgb2hex(rgb){
 rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
 return "#" +
  ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
  ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
  ("0" + parseInt(rgb[3],10).toString(16)).slice(-2);
}

// Kevin -- Starts here
// On click the "add note" feature.
$('#notes').click(function(){
	chrome.tabs.executeScript(null, {file:"jquery-1.9.0.min.js"},
		function() {
			chrome.tabs.executeScript(null, {file:"note.js"});
	});
});

//Provide feedback to the user on click
$('.menuItem').on('mousedown', function(){
	$(this).css('background-color', '#3399FF');
});

$('.menuItem').on('mouseup', function(){
	$(this).css('background-color', '#F0F0F0');
});

// Kevin -- Ends here