
//Exportar e Importar
import {calcularIVA, Producto} from './repaso/05-desestructurar-funciones'

const carrito:Producto[]=[
{
    desc:'Telefono1',
    precio:1270
},
{
    desc:'Telefono2',
    precio:1270
}
];
const[total,iva]=calcularIVA(carrito);
console.log('Total:',total);
console.log('Total + IVA:', iva);