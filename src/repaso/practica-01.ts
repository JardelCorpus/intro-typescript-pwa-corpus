interface utlAlumno{
    nombre:string;
    edad:number;
    calle:string;
    pais:string;
    estado:string;
    numero:number;
    mostrarDireccion:()=>void;
}

function alumnoUT(alumno:utlAlumno):void{
    alumno.nombre='Daniela';
    alumno.edad=20;
    alumno.calle="16 de septiembre";
    alumno.pais="Mexico";
    alumno.estado="Guanajuato";
    alumno.numero=27;
}

const pruebaAlumno:utlAlumno={
    nombre:"Jardel",
    edad:21,
    calle:"Guerrero",
    pais:"Mexico",
    estado:"Guanajuato",
    numero:100,
    mostrarDireccion(){
        console.log("Funciona")
    },
}
console.table(pruebaAlumno);