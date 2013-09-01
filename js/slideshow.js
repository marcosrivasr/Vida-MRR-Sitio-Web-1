$(document).on("ready", main);

function main(){
	$("body").append("<div id='previewSlideshow'><div id='imagen'><img width=700 height=350><div id='descripcion'></div><div id='cerrar'>Cerrar</div></div></div>");	
	$("#slideshow img").on("click", abrirImagen);
	$("#previewSlideshow #cerrar").on("click", cerrarImagen);
}

function abrirImagen(){
	//alert($(this).attr("title"));
	$("#previewSlideshow").fadeIn();
	$("#previewSlideshow img").attr("src", "img/slideshow"+($(this).index()+1)+".jpg");
	$("#previewSlideshow #descripcion").text($(this).attr("title"));
}

function cerrarImagen(){
	$("#previewSlideshow").fadeOut();
}