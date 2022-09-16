class Formula{
 
private a:number=4;
private b:number=3;
private c: number=-1;
private resultadox1:number;   
private resultadox2:number;


public formula(){
    this.calcular();
}
private calcular(){
    this.resultadox1= -this.b - Math.sqrt((this.b * this.b) - 4 * this.a * this.c) / (2 * this.a);
    this.resultadox2= -this.b + Math.sqrt((this.b * this.b) - 4 * this.a * this.c) / (2 * this.a);
}
public mostrar(){
    console.log(`El resultado de x1 es: ${this.resultadox1}`);
    console.log(`El resultado de x2 es: ${this.resultadox2}`);
}
}
let formula1=new Formula();
formula1.formula();
formula1.mostrar();

