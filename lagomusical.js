var canciones = Array();
document.addEventListener("DOMContentLoaded", function() {
    const boton = document.querySelector("#boton");
    const input = document.querySelector('#sonidosinput');
    const text = document.querySelector('#textp');
    const sonidosanimales =  [
                  {
                  "animal": "rana",
                  "sonido": "brr",
                  "cancion": ["brr","fiu","cric-cric","brrah"]
                  },
                  {
                  "animal": "rana",
                  "sonido": "birip",
                  "cancion": ["birip","trri-trri","croac"]
                  },
                  {
                  "animal": "rana",
                  "sonido": "brrah",
                  "cancion": ["brrah"]
                  },
                  {
                  "animal": "rana",
                  "sonido": "croac",
                  "cancion": ["croac"]
                  },
                  {
                  "animal": "libelula",
                  "sonido": "fiu",
                  "cancion": ["fiu"]
                  },
                  {
                  "animal": "libelula",
                  "sonido": "plop",
                  "cancion": ["plop","cric-cric","brrah"]
                  },
                  {
                  "animal": "libelula",
                  "sonido": "pep",
                  "cancion": ["pep"]
                  },
                  {
                  "animal": "grillo",
                  "sonido": "cric-cric",
                  "cancion": ["cric-cric"]
                  },
                  {
                  "animal": "grillo",
                  "sonido": "trri-trri",
                  "cancion": ["trri-trri"]
                  },
                  {
                  "animal": "grillo",
                  "sonido": "bri-bri",
                  "cancion": ["bri-bri"]
    }];
    function buscarcanto(sonido){
      sonidosanimales.forEach(function(el){
        if(el.sonido === sonido){
        //combinar un segundo array en un primer array existente
        Array.prototype.push.apply(canciones, el.cancion);}
      });
    }
    function mostrar(){
        var cadenadetexto="";
        canciones.forEach(function(el){
            if(el== "croac" || el== "brrah" ){
            cadenadetexto+= el + "<br>"}else{cadenadetexto+= el+","}
            });
        text.innerHTML=cadenadetexto;
    }
    boton.addEventListener("click", function(e){
        var selected = input.options[input.selectedIndex];
        buscarcanto(selected.value);
        mostrar();
    });
});