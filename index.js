//ARGUMENTOS CON VALOR PREDEFINIDO

// const CalculaIva = (importe, tasa = 0.21) => {

//     return importe * tasa
// }

// const CalculaIva = (importe, tasa = 0.21) => importe * tasa

// const res = CalculaIva(1000)

// console.log(res)

//////////////////////////////////////////////////////////

// const operar = () => {

//     console.log(Sumar(5,5))
//     console.log(Restar(5,5))
// }

// const Sumar = (a, b) => {
//     return a + b
// }

// const Restar = (a, b) => {
//     return a - b
// }

// operar()

// let nombre = "Marina"

// let arrayNombre = []

// for(let i = 0; i < nombre.length; i++){
//     arrayNombre.push(nombre[i])
// }

// for(let letra in nombre){
//     arrayNombre.push(nombre[letra])
// }

// arrayNombre = nombre.split("")

// console.log(arrayNombre)

// let perro = Array.from(nombre)

// console.log(perro)

// const nombre = "Carlos"
// let arrayN = []

// for(let i = 0; i < nombre.length; i++){
//     arrayN.push(nombre.slice(i, i+1))
// }

// console.log(arrayN)

// let numero = 5;
// let resultado = ""

// for(let i = 0; i < numero; i++){

//     resultado += "*"
//     console.log(resultado)
// }

// const tamanyo = 10;
// let fila = 1;

// while(fila <= tamanyo){
//     let linea = "";
//     for(let i = 0; i < tamanyo-fila; i++){
//         linea += "O";
//     }
//     for(let i = tamanyo-fila; i < tamanyo; i++){
//         linea += "*";
//     }
//     console.log(linea);
//     fila++;
// }

// let num = 5;
// let espacios = "     "
// let asteriscos = "*****"

// for (let i = num - 1; i >= 0; i--) {
//     arbol = espacios.slice(0, i)
//     arbol += asteriscos.slice(i, num)

//     console.log(arbol)
// }

let fila = "";

let numero = 5;

for (let i = 0; i < numero; i++) {
  for (let x = numero - 1; x >= 0; x--) {
    fila += i >= x ? "*" : " ";
  }

  console.log(fila);
  fila = "";
}
