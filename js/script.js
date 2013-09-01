$(document).on("ready", main);

function main(){
	$("#menu a").on("click", irA);
	$(window).scroll(scrollMenu);

	
}
	/*
	 *
	 * FUNCION PARA CONFIGURAR MENU
	 *
	 */
	function irA(){
		var seccion = $(this).attr("href");
		$('body,html').animate({
				scrollTop: $(seccion).offset().top-130
		}, 800);	
		return false;
	}
	/*
	 *
	 * FUNCION PARA CONFIGURAR ESTILOS DEL MENU PARA QUE
	 * 		CAMBIEN CUANDO SE SCROLLEA
	 *
	 */
     function scrollMenu(){
     	var secciones = [$("#inicio").offset().top, $("#servicios").offset().top, $("#trabajo").offset().top,$("#faq").offset().top, $("#contacto").offset().top,$("body").height()];

     	if($(this).scrollTop()> secciones[0]-140 && $(this).scrollTop() < secciones[1]-140){
     		$("#menu a").eq(2).removeClass("logo2");
     		
     	}else{
     		$("#menu a").eq(2).addClass("logo2");
     		
     	}

     	if($(this).scrollTop()> secciones[1]-140 && $(this).scrollTop()< secciones[2]-140){
     		$("#menu a").eq(0).addClass("seleccionado");
     	}else{
     		$("#menu a").eq(0).removeClass("seleccionado");
     	}

     	if($(this).scrollTop()> secciones[2]-140 && $(this).scrollTop()< secciones[3]-140){
     		$("#menu a").eq(1).addClass("seleccionado");
     	}else{
     		$("#menu a").eq(1).removeClass("seleccionado");
     	}

     	if($(this).scrollTop()> secciones[3]-140 && $(this).scrollTop()< secciones[4]-140){
     		$("#menu a").eq(4).addClass("seleccionado");
     	}else{
     		$("#menu a").eq(4).removeClass("seleccionado");
     	}

     	if($(this).scrollTop()> secciones[4]-140 && $(this).scrollTop()< secciones[5]-140){
     		$("#menu a").eq(3).addClass("seleccionado");
     	}else{
     		$("#menu a").eq(3).removeClass("seleccionado");
     	}
     }
