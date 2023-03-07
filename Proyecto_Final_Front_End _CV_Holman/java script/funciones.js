function sobre_icono_be() {
    Element =document.getElementById("be");
    Element.src="img/behance2.png";
}

function saliendo_icono_be() {
    Element =document.getElementById("be");
    Element.src="img/behance.png";
}

function sobre_icono_gi() {
    Element =document.getElementById("gi");
    Element.src="img/github2.png";
}

function saliendo_icono_gi() {
    Element =document.getElementById("gi");
    Element.src="img/github.png";
}

function sobre_icono_li() {
    Element =document.getElementById("li");
    Element.src="img/linkedin2.png";
}

function saliendo_icono_li() {
    Element =document.getElementById("li");
    Element.src="img/linkedin.png";
}

function uno(src,color_entrada) {
    src.bgColor=color_entrada;src.style.cursor="hand";
}

function dos(src,color_default) {
    src.bgColor=color_default;src.style.cursor="default";
}

function printHTML() {
    if (window.print) {
      window.print();
    }
}

function printDiv(nombreDiv) {
    var contenido= document.getElementById(nombreDiv).innerHTML;
    var contenidoOriginal= document.body.innerHTML;
    document.body.innerHTML = contenido;
    window.print();
    document.body.innerHTML = contenidoOriginal;
}

function cambiar_color_tarjeta(cambiar, tarjeta, nuevo_color){
    if(cambiar==true)
        document.getElementById(tarjeta.toString()).style.background = nuevo_color;        
    else 
    document.getElementById(tarjeta.toString()).style.background ="#f3f3f3"; 
}

    
        