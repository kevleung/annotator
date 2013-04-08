var code = "<div><h1>Notes</h1>"

$('[name=mynote]').each(function(index) {
	code = code + "<p>" + $(this).val() + "</p>";
});

code = code + "</div><div><h1>Highlights</h1>";

$('myhighlight').each(function(index) {
	code = code + "<p>" + $(this).text() + "</p>";
});

code = code + "</div>";
printHTML(code);

function printHTML(input){
  var iframe = document.createElement("iframe");
    document.body.appendChild(iframe);

  iframe.contentWindow.document.write(input);
  iframe.contentWindow.print();
  document.body.removeChild(iframe); 
}