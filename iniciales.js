// definicion de variables
var a=3;
const b="hola mundo";
let c=4;

a=7;

console.log(a);

//NaN -> no a number
//null -> nunca se creo la data
//undefined -> sin definir

//condiciones
if(a<c){
    console.log("c es mayor");
}else{
    console.log("a es mayor");
}

//condicional ternario

(a<c)? console.log("c es mayor"):console.log("a es mayor");

//ciclos
let i = 0;
while(i<=10){
    console.log(`La multiplicacion entre ${i}X7=${i*7}`);
    i++;
}

for (let i = 0; i <= 10; i++) {
    console.log(`La multiplicacion entre ${i}X7=${i*7}`);   
}

//funciones

//noob
function suma(a, b){
    return a+b;
}
//pro
const suma=(a, b)=>{
    return a+b;
}

console.log(suma(5,6));

//desestructuracion 

let persona ={
    'nombre':'Daniel',
    'apellido':'Arteaga',
    'celular':'3016889827'
  }
  
  //let nombre=persona.nombre;
  
  let {nombre, apellido}=persona
  
  console.log(apellido)

