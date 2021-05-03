// funciones

function mensaje() {
    alert('hola mundo');

}



function validarFormulario(){
    // validar rut
    var resp = validaRut();
    if(resp == false){
        return false;
    }
    resp = validaFecha();
    if (resp==false) {
        return
    }
    return true;
}

function validaFecha() {
    var fechaUsuario = document.getElementById('txtFechaNaci').value;
    var fechaSistema = new Date();
    console.log('Fecha usuario: ' +fechaUsuario);
    console.log('Fecha sistema: '+fechaSistema);
    
// cortamos el año primero ya que ecribe aa/mm/dd
    var ano = fechaUsuario.slice(0,4);
    var mes = fechaUsuario.slice(5,7);
    var dia = fechaUsuario.slice(8,10);
    console.log('Año: '+ano);
    console.log('Mes: '+mes);
    console.log('Dia: '+dia);
// le restamos 1 al mes ya que la consola en los meses es, enero=0 , febrero=1, etc)
    var fechaNuevaUsuario = new Date(ano,(mes-1),dia);
    console.log('Nueva fecha: ' +fechaNuevaUsuario);
    // fecha ingresada menor a la actual
    if(fechaNuevaUsuario > fechaSistema){
        // alert('fecha incorrecta');
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Algo salio mal con la fecha!',
            footer: '<a href>Por que tengo este problema?</a>'
          })
        return false;
    }
    // minimo 18 años
     var unDia = 24* 60 * 60 *1000; // 1 dia en milisegundos
     //el get time nos da la info en milisegundos
    var diferencia = Math.trunc((fechaSistema.getTime() - fechaNuevaUsuario.getTime()) / unDia );
    console.log('Dias: '+diferencia);
    var anos = Math.trunc( diferencia/365);
    console.log('Edad: '+anos);
    if(anos<18){
        // alert('es menor de edad, usted tiene '+anos);
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Algo salio mal con la edad!',
            footer: '<a href>Por que tengo este problema?</a>'
          })
        return false;
    }
    return true;
}




function validaRut(){
    // recuperamos el documento, el elemento que tiene por id txtRut
    var rut = document.getElementById('txtRut').value;
    // alert(rut);

    // nos muestra los mensajes dentro de la consola
    console.log(rut);
    
    var num=3;
    var suma=0;
    // parte del 0 index=0, tamaño del arreglo 8 por el rut
    // let es igual que var solo que let s local y var es global
    
    for (let index = 0; index < 8 ; index++) {
        // con slice cortamos el rut, parte de la posicion 0 o index
        // corta uno a uno, siindex es 0 corta del 0 al que sigue asi que solo toma un numero
        var caracter = rut.slice(index, index+1);
        console.log(caracter+ ' x ' +num)
        //alert(caracter+ 'x'+num);
        // una vez cortaoms lo tenemos que multiplicar por 32,765432
        suma =suma + (caracter*num);
        
        num = num - 1;
        // parte del 3, pero cuando llegue a 1 va hacer 7 y disminuira
        if(num==1){
            num=7;
        }
        
        
  
    }

    console.log('suma: '+suma)
    // lo que resta
    var resto= suma % 11;
    var dv = 11-resto;
    

    if (dv> 9) {
        if (dv==10) {
            dv= 'K'

            
        }else{
            dv= '0'
        }
        
    }

    // si es que el dv es ingresado es incorrecto, distinto al que el sistema calcula
    console.log(dv);
    var dv_usuario = rut.slice(-1).toUpperCase();
    if( dv != dv_usuario){
        // alert('rut es incorrecto');
        // Swal.fire('rut incorrecto');
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Algo salió mal con el rut!',
            footer: '<a href>Por que tengo este problema?</a>'
          })
        return false;
    }
    return true;


}