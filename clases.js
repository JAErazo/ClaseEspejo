//clase
class Gato{
    //atributos
    color="Negro";
    raza="Angora";
    #peso;

    //Contructor
    constructor(color, raza, peso, edad=null){
        this.color=color;
        this.raza=raza;
        this.#peso=peso;
        this.edad=edad;
    }
}

//instancia
let michin=new Gato("Dorado","Persa",45.3)
console.log("la edad es: "+michin.edad)
console.log(michin.color)