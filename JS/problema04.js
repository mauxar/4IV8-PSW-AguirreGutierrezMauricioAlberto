function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado == 8)return true;

    var patron = /[0-9\d ]/;

    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
}

function calculo(){
    var valor0 = document.formulario.examen_1.value;
    var valor1 = document.formulario.examen_2.value;
    var valor2 = document.formulario.examen_3.value;
    var valor3 = document.formulario.examen_final.value;
    var valor4 = document.formulario.trabajo_final.value;
    var valor_a = parseInt(valor0);
    var valor_ab = parseInt(valor1);
    var valor_ac = parseInt(valor2);
    var valor_b = parseInt(valor3);
    var valor_c = parseInt(valor4);
    var promedio_examen = (valor_a + valor_ab + valor_ac)/3;
    var promedio = (promedio_examen * 0.55) + (valor_b * 0.30) + (valor_c * 0.15);

    if (valor0 > 10 || valor1 > 10 ||valor2 > 10 ||valor3 > 10 ||valor4 > 10 ) {
        window.alert("Digite un numero entre 0 y 10, por favor.");
    }
    else{
    if (valor0 == "" || valor1 == "" ||valor2 == "" ||valor3 == "" ||valor4 == "" ) {
        window.alert("LLene todas las casillas, por favor.");
    }
        
    
     else {
         
     
        document.formulario.promedio_final.value = promedio;
    }}
}

function borrar(){
    document.formulario.examen_1.value = "";
    document.formulario.examen_2.value = "";
    document.formulario.examen_3.value = "";
    document.formulario.examen_final.value = "";
    document.formulario.trabajo_final.value = "";
    document.formulario.promedio_final.value = "";
}