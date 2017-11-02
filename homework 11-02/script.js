// button color
function color() {
    document.getElementById("btn").style.background = "red"; 
}
// introduce yourself
function alert(){
    var text = prompt("What's your name?");
    document.getElementById("background").innerHTML = "Hello "+ text;
}
// background color
function textColor() {
    document.getElementById("bodyColor").style.background = "yellow"; 
}
// textarea
$(function() {
	$('textarea[max-rows]').each(function () {
		var textarea = $(this);

		var minRows = Number(textarea.attr('rows'));
		var maxRows = Number(textarea.attr('max-rows'));

        // my skills end here

        // clones the textarea and hides it offscreen
        
		var textareaClone = $('<textarea/>', {
			rows: minRows,
			maxRows: maxRows,
			class: textarea.attr('class')
        })
        .css({
			position: 'absolute',
			left: -$(document).width() * 2
		}).insertAfter(textarea);

		var textareaClone2 = textareaClone.get(0);

		textarea.on('input', function () {
			// copy the input from the real textarea
			textareaClone.val(textarea.val());

			// set as small as possible to get the real scroll height
			textareaClone.attr('rows', 1);

			// save the real scroll height
			var scrollHeight = textareaClone2.scrollHeight;

			// increase the number of rows until the content fits
			for (var rows = minRows; rows < maxRows; rows++) {
				textareaClone.attr('rows', rows);

				if (textareaClone.height() > scrollHeight) {
					break;
				}
			}

			// copy the rows value back to the real textarea
			textarea.attr('rows', textareaClone.attr('rows'));
		}).trigger('input');
	});
});
