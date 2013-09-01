var tabInicial = 1;
$(document).on("ready", main);

/*
 *
 * FUNCION INICIAL
 */
function main(){
	$("#tabs a").on("click", abrirTab);
	$(".tabsContent").eq(tabInicial-1).fadeIn();
	$("#tabs a").eq(tabInicial-1).addClass("tabActual");
}

function abrirTab(){
	$(".tabsContent").hide();
	$("#tabs a").removeClass("tabActual");
	$(".tabsContent").eq($(this).index()).fadeIn();
	$(this).addClass("tabActual");
	return false;
}