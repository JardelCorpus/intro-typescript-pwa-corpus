//CLASS

class Persona{ //private, protected, public
    nombre:string;
    edad:number;

    constructor(a:string,b:number){
        //Inicializar la propiedad de la clase 
        this.nombre=a;
        this.edad=b;
        //this hace referencia a la propiedad de la clase actual
    }

    /*setNombre(a:string){
        this.nombre=a;
    }
    */
   /*getNombre():string{
        return this.nombre;
    }
    */

    imprimir():void{
        console.log(`}Nombre: ${this.nombre} y edad: ${this.edad}`)
    }
}
let persona1:Persona;
persona1=new Persona('Alejandro',21);
let persona2=new Persona('Daniela',20);
persona1.nombre='Jardel';
persona1.edad=21;
//persona1.setNombre('Frederik');
//console.log(persona1.getNombre());
persona2.nombre='Daniela';
persona2.edad=20;
persona1.imprimir();
persona2.imprimir();

class Dado{
    private valor:number;
    public tirar(){
        this.generar();
    }
    private generar(){
        this.valor=Math.floor(Math.random()*6)+1;
    }
    public imprimir(){
        console.log(`Salio el valor ${this.valor}`);
    }
}
let dado1=new Dado();
dado1.tirar();
dado1.imprimir();