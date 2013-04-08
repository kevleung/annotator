// Add a new note
window.addEventListener("dblclick", function(event) {
    addNote(event);
    this.removeEventListener("dblclick",arguments.callee,false);
});

// ** This function was written by my teammate
// Get the coordinates
function getCoords(event){
    var posx = 0;
    var posy = 0;
    if (!e) var e = window.event;
    if (e.pageX || e.pageY)     {
        posx = e.pageX;
        posy = e.pageY;
    }
    else if (e.clientX || e.clientY)    {
        posx = e.clientX + document.body.scrollLeft
            + document.documentElement.scrollLeft;
        posy = e.clientY + document.body.scrollTop
            + document.documentElement.scrollTop;
    } 
    var coord = [];
    coord.push(posx);
    coord.push(posy);
    return coord;
}

// Add note to the page
function addNote(event){
    var coordinates = getCoords(event);

    // create the note and append it to the page.
    var note = $('<textarea placeholder="Write here..."></textarea>');
    note.attr('name', 'mynote')
	.attr('maxlength', '500')
    .attr('rows', '8')
    .attr('cols', '30')
    .css('position', 'absolute')
    .css('left', coordinates[0] + "px")
    .css('top', coordinates[1] + "px")
    .css('z-index', '999999999')
    .css('border', '2px solid #999966')
    .css('padding', '5px')
    .css('background', '#FFFF33')
    .css('font-family', 'sans-serif'); 
    $('body').append(note);
    
    // Collapse the note into a pin
    note.blur(function(){
        $(this).hide('fast');

        var self = this;

        //place a pin at the location of the collapsed note
        var pin = $('<img/>');
        pin.attr("src", "http://forums.naughtydog.com/t5/image/serverpage/image-id/45197iC62FC84091591D17/image-size/original?v=mpbl-1&px=-1")
        .attr("alt", "sup")
        .css('position', 'absolute')
        .css('left', coordinates[0] + "px")
        .css('top', coordinates[1] + "px")
        .css('height', "40px")
        .css('width', "30px")
        .css('z-index', '999999999');

        $('body').append(pin);

        // Hide pin, show text
        pin.on("click", function(event) {
            note.show("slow");
            $(this).hide(800);
        }); 

        // Remove note and pin on double click.
        pin.on("dblclick", function(){
            var a;
            var r=confirm("Delete Note?");
            if (r==true)
              {
              pin.remove();
              note.remove();
              }
        })
    });
}
