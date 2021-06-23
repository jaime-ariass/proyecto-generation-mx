var datos  = [];
var objeto = {};
var Titulo;
var Precio
var Plataforma
/* function demo(){
var Titulo       = new Array();
var Precio       = new Array();
var Plataforma   = new Array();
Titulo[0] = "Devil May Cry";
Titulo[1] = "Halo";
Titulo[2] = "Half Life";
Precio[0] = "900";
Precio[1] = "1500";
Precio[2] = "500";
Plataforma[0] = "Play";
Plataforma[1] = "Xbox";
Plataforma[2] = "PC";
var datos  = [];
var objeto = {};
for(var i= 0; i < Titulo.length; i++) {
    var nombre = Titulo[i];
    
   datos.push({ 
        
        
        "Titulo"  : Titulo[i],
        "Precio"  : Precio[i],
        "Plataforma": Plataforma[i] 
    });
}
objeto.datos = datos;
console.log(JSON.stringify(objeto));
//$("#res").text(JSON.stringify(objeto));
}
 */
function Agregar() {

    
  
   Titulo = document.getElementById('i1').value; // Se convertira a un dato obtenido de un DIV
   Precio = document.getElementById('i2').value;
   Plataforma =document.getElementById('i3').value;
  
  datos.push({ 
        
        
    "Titulo"    : Titulo ,
    "Precio"    : Precio,
    "Plataforma": Plataforma 
    
});
objeto.datos = datos;

console.log(objeto);
console.log(datos);
console.log(JSON.stringify(Titulo));
console.log(JSON.stringify(objeto));
}

/* document.getElementById('b1').onclick=function(){
  alert("Elemento guardado")
} */

/* document.getElementById('b2').onclick=function(){
  alert("Elemento guardado")
} */

function alertar(){
  alert("Elemento guardado")
}

function reset(){
  document.getElementById("i1").value='';
  document.getElementById("i2").value='';
  document.getElementById("i3").value='';
}

function mostrar(){
  console.log(JSON.stringify(Titulo));

  /* for(i=0;i<datos.length;i++){
    
  } */
  document.getElementById('h1').innerHTML=datos[i].Titulo+" "+datos[i].Precio;
  document.getElementById('h2').innerHTML=datos[1].Titulo+" "+datos[1].Precio;
  document.getElementById('h3').innerHTML=datos[2].Titulo+" "+datos[2].Precio;
  document.getElementById('h4').innerHTML=datos[3].Titulo+" "+datos[3].Precio;
  document.getElementById('h5').innerHTML=datos[4].Titulo+" "+datos[4].Precio;
  document.getElementById('h6').innerHTML=datos[5].Titulo+" "+datos[5].Precio;
  document.getElementById('h7').innerHTML=datos[6].Titulo+" "+datos[6].Precio;
  document.getElementById('h8').innerHTML=datos[7].Titulo+" "+datos[7].Precio;
  document.getElementById('h9').innerHTML=datos[8].Titulo+" "+datos[8].Precio;
  document.getElementById('h10').innerHTML=datos[9].Titulo+" "+datos[9].Precio;
 

}