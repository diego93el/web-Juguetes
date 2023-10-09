var imagenes =[
    "assets/1.jpg",
    "assets/2.jpg",
    "assets/3.jpg",
    "assets/4.jpg",
    "assets/5.jpg"
]
document.imagen.src = imagenes[0];

var sliderDerecha = document.querySelector(".rightSlider");
var contador=0;
function moverDerecha()
{
    contador++;
    if (contador > imagenes.length -1){
        contador=0

    }
    document.imagen.src = imagenes[contador]; 
}
var intervalo=setInterval(moverDerecha,2500)
sliderDerecha.addEventListener("click",function(){
    clearInterval(intervalo)
    moverDerecha()
    intervalo=setInterval(moverDerecha,2500)
})
var sliderIzquierda = document.querySelector(".leftSlider");
function moverIzquierda()
{
    contador--;
    if (contador < 0){
        contador=imagenes.length-1;

    }
    document.imagen.src = imagenes[contador]; 
}
sliderIzquierda.addEventListener("click",function(){
        clearInterval(intervalo)
        moverIzquierda()
        intervalo=setInterval(moverDerecha,2500)
    });

function nuevaImagen(num){
    var num

    switch(num){
        case 1: {document.getElementById("imagen").src="assets/pianoBabyEstein2.jpg"
    break
    }
    case 2:{
        document.getElementById("imagen2").src="assets/puzzlesFrutas2.jpg"
        break
    }
    
    case 3:{
        document.getElementById("imagen3").src="assets/kaplaPiezas2.jpg"
        break
    }
    case 4:{
        document.getElementById("imagen4").src="assets/cajaDeBolas2.jpg"
        break
    }
    case 5:{
        document.getElementById("imagen5").src="assets/formasGeometricasEncajables2.jpg"
        break
    }
    case 6:{
        document.getElementById("imagen6").src="assets/pistaDeBolas2.jpg"
        break
    }



    }
   
    
    
    
    
    
}
function originalImagen(num){
    var num
    switch(num){
        case 1: {
            document.getElementById("imagen").src="assets/pianoBabyEinstein.jpg"
          break
        }
        case 2: {
            document.getElementById("imagen2").src="assets/puzzlesFrutas.jpg"
          break
        }
        case 3: {
            document.getElementById("imagen3").src="assets/kaplaPiezas.jpg"
          break
        }
        case 4: {
            document.getElementById("imagen4").src="assets/cajaDeBolas.jpg"
          break
        }
        case 5: {
            document.getElementById("imagen5").src="assets/formasGeometricasEncajables.jpg"
          break
        }
        case 6: {
            document.getElementById("imagen6").src="assets/pistaDeBolas.jpg"
          break
        }
    }
    
    
    
   
    
    
}