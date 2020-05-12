function buscar(){

  var busqueda =document.getElementById("busqueda").value.toLowerCase();//guarda el valor de la caja de búsqueda en minúsculas

  var parrafos=document.getElementsByTagName("p");//crea un array con todos los párrafos
  var eleListas=document.getElementsByTagName("li");

  for (var i=0;i<parrafos.length;i++){
    var cadena = parrafos[i].textContent.toLowerCase();
    var n =cadena.includes(busqueda);
     if (n){
       parrafos[i].setAttribute("class","muestra");
     }else{parrafos[i].setAttribute("class","oculta");}
    }

    for (var i=0;i<eleListas.length;i++){
      var tLista = eleListas[i].textContent.toLowerCase();
      var l =tLista.includes(busqueda);
      if (l){
        eleListas[i].setAttribute("class","muestra");
      }else{eleListas[i].setAttribute("class","oculta");}
    }

      }

function cambioIdioma(){
  var eleCast = document.getElementsByClassName("castellano");//crea un array con todos los elementos en castellano
  var eleEng = document.getElementsByClassName("ingles");//crea un array con todos los elementos en inglés
  var selectBox = document.getElementById("selItem");//variable que almacena el selector
  var valorElegido=selectBox.options[selectBox.selectedIndex].value;//variable que almacena el valor elegido en el selector
  var valores=document.getElementsByClassName(valorElegido);//variable que almacena un array de elementos que cntengan el valor elegido

  for (var i=0; i<eleCast.length;i++){ //bucle que va a tomar todos los elementos en castellano e inglés y ocultarlos ak cambiarles el atributo a 'ocultar'
    eleCast[i].setAttribute("class", "castellano oculta");
 }

 for (var i=0; i<eleEng.length;i++){ //bucle que va a tomar todos los elementos en castellano e inglés y ocultarlos ak cambiarles el atributo a 'ocultar'
   eleEng[i].setAttribute("class", "ingles oculta");
}
for (var i=0;i<valores.length;i++){ //bucle que va a asignar el atributo "mostrar" a los elementos con el valor elegido
  valores[i].setAttribute("class", valorElegido+" muestra");
}


}
