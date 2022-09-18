class operacion{
    private a:number;
    private b:number;

    setNumero(a:number, b:number){
        this.a=a;
        this.b=b;
    }
    getNumero():number{
        return this.a, this.b;

    }
    calcular():void{
        for(let j=0;  j<=this.a*this.b; j=j+this.b){
            console.log(`${this.a} + ${j} = ${this.a + j}`)
        }
   /* calcular():void{
        for(let j=this.b;  j=this.a*this.b; ++j){
            console.log(`${this.a} x ${this.b} = ${j}`)
        }
        /*let s:number=1;
        while(s<11){
            console.log(`${this.numero} x ${s} = ${s*this.numero}`)
            ++s;
        }*/
    //}
    }
}
let operacion1 = new operacion();
operacion1.setNumero(5,2);
/*console.log('variable privada: ' + operacion.getNumero());
tabla1.tem=6;
console.log('variable publica: ' + tabla1.tem);*/
operacion1.calcular();