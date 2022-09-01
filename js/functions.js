$(function(){

	$('nav ul li a').click(function(){
		var href = $(this).attr('href')
		var offsettop = $(href).offset().top

		$('html,body').animate({'scrolltop':offsettop})
		
	})
})

$( "#click" ).click(function() {
	$( ".mobile" ).toggle( "progress", function() {
	});
  });