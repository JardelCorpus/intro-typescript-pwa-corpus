interface Direccion{
    calle:string;
    pais:string;
    estado:string;
}
interface DatosAlumno{
    nombre:string;
    edad:number;
    direccion:Direccion;
mostrarDir:()=>string;
}
const AlumnoUTL:DatosAlumno={
    nombre:'Mario',
    edad:23,
    direccion:{
        calle:'veracruz',
        pais:'Mexico',
        estado:'Guanajuato'
    },
    mostrarDir(){
        return this.nombre+', '+this.direccion.estado+', '+this.direccion.pais;
    }
}
const direccion=AlumnoUTL.mostrarDir();
console.log(direccion);