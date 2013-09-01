var actual = 1;
var intervalo;
$(document).on("ready", main);

/*
 *
 * FUNCION INICIAL
 */
function main(){
	intervalo = setInterval("runSlider()", 3000);
	$("#menuSlider a").on("click", clicMenuSlider);
}
/*
 *
 * FUNCION PARA CONFIGURAR LOS BOTONES DEL SLIDER
 */
function configurarMenuSlider(){
	$("#containerSlider").animate({
		marginLeft: (actual*-1*$("#containerSlider img").eq(0).width())
	});
	$("#menuSlider a").removeClass("menuSliderSeleccionado");
	$("#menuSlider a").eq(actual).addClass("menuSliderSeleccionado");
}
/*
 *
 * FUNCION PARA PONER A CORRER EL SLIDER
 */
function runSlider(){
	if(actual== $("#containerSlider img").size()) actual=0;
	configurarMenuSlider();
	actual++;
}


















/*
 *
 * FUNCION PARA CONFIGURAR CUANDO SE DA CLIC EN LOS BOTONES DEL SLIDER
 */
function clicMenuSlider(){
	clearInterval(intervalo);
	actual = $(this).attr("rel")-1;
	configurarMenuSlider();
	intervalo = setInterval("runSlider()", 3000);
}