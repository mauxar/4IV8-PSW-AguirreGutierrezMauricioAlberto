function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado == 8)return true;

    var patron = /[0-9\d .]/;

    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
}

function calculo(){
    var valor0 = document.formulario.num_1.value;
    var valor1 = document.formulario.num_2.value;
    var valor2 = document.formulario.num_3.value;
    var valor_a = parseFloat(valor0);
    var valor_b = parseFloat(valor1);
    var valor_c = parseFloat(valor2);
    
    if (valor0 == "" || valor1 == "" || valor2 == ""  ) {
        window.alert("LLene todas las casillas, por favor.");
    }
    else{
        if (valor_c == valor_a & valor_a == valor_b) {num_3 = "son iguales"
            
        }    
    else{
        if (valor_a > valor_b & valor_a > valor_c) {
        num_3 = valor_a
    }

    else{
        if (valor_b > valor_c) {
        num_3 = valor_b
    }
    else{
        if (valor_c >= valor_a ) {
        num_3 = valor_c
    }


     }}}}
    
    
     document.formulario.final_num.value = num_3;}
        

function borrar(){
    document.formulario.num_1.value = "";
    document.formulario.num_2.value = "";
    document.formulario.num_3.value = "";
    document.formulario.final_num.value = "";
}