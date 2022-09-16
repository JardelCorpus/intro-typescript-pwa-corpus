class Formula{
private resultado:number;    
private a:number=3;
private b:number=5;
private c: number=7;

public formula(){
    this.calcular();
}
private calcular(){
    this.resultado= -this.b + Math.sqrt(this.b * this.b - 4 * this.a * this.c) / (2 * this.a);
}
public mostrar(){
    console.log(`El resultado es: ${this.resultado}`);
}
}
let formula1=new Formula();
formula1.formula();
formula1.mostrar();

