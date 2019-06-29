$(document).ready(function(){
	$('#sobremi, #experiencia, #contacto').hide();

	$('#opc1').click(function(){
		$('#sobremi').show();
		$('#experiencia, #contacto').hide();
	});
	$('#opc2').click(function(){
		$('#experiencia').show();
		$('#sobremi, #contacto').hide();
	});
	$('#opc3').click(function(){
		$('#contacto').show();
		$('#sobremi, #experiencia').hide();
	});
});