/*Exemplo mostrando sem formatação.
let valores = [8, 1, 7, 4, 5, 9]

for(let pos=0; pos < valores.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/

/* Forma simplificada
let valores = [8, 1, 7, 4, 5, 9]

for(let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/

// buscar valores dentro de um vetor
let num = [5, 8, 2, 9, 3]
num.push(4)// vai adicionar um valor
num.sort() // ele vai colocar em ordem crescente
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(8) // ele esta insformanfo a posição do valor
console.log(`O valor 8 esta na posição ${pos}`)