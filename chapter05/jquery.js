$(document).ready(function() {
	$('html').dblclick(function() {
		alert('ouch');
	}); // end doubleclick
	$('a').mouseover(function() {
		var message = "<p>You moused over a link</p>";
		$('.main').append(message);
	}); // end mouseover
	$('#button').click(function() {
		$(this).val("Stop that!");
	}); // end click
	$('#textfield').focus(function() {
		$(this).css('background-color','red');
	}); // end focus
}); // end ready