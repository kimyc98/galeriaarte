// guardaremos en el espacio dentro del navegadorsolo rut, nombre y fecha


class usuario{
    rut;
    nombre;
    fecha;
    //  mutadores

    // que tal clase guarde como parametro r, n o fecha
    setRut(rut){this.rut=rut;}
    setNombre(nombre){this.nombre=nombre;}
    setFecha(fecha){this.fecha=fecha;}

    // accesador
    getRut(){return this.rut;}
    getNombre(){return this.nombre;}
    getFecha(){return this.getFecha;}

    // toString()
    // necesitamos crear el objeto
    imprimir(){
        return 'Rut: '+this.rut+ ' Nombre: ' +this.nombre+ ' Fecha: '+this.fecha;

    }
}