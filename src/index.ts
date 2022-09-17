class operacion{
    private a:number;
    private b:number;
    cont:number;
 

    setNumero(a:number, b:number){
        this.a=a;
        this.b=b;
    }
    getNumero():number{
        return this.a, this.b;

    }
    calcular():void{
        for(let i=1; i<=this.b; ++i){
            console.log(`${this.a} + ${this.b} = ${this.cont=this.b+this.b}`)
        }
        /*let s:number=1;
        while(s<11){
            console.log(`${this.numero} x ${s} = ${s*this.numero}`)
            ++s;
        }*/
    }
}
let operacion1 = new operacion();
operacion1.setNumero(5,7);
/*console.log('variable privada: ' + operacion.getNumero());
tabla1.tem=6;
console.log('variable publica: ' + tabla1.tem);*/
operacion1.calcular();