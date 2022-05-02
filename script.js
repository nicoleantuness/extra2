 const newArray = [23, 544, -56, 77, -1, -43]
function contaNegativos(arr){
    counter = []
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            counter++
        }
    }
    return counter
}
console.log(contaNegativos(newArray))

function somaNegativos(arr){
    counter = 0
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            counter+=arr[i]
        }
    }
    return counter
}
console.log(somaNegativos(newArray))

function quantosPares(number){
    counter = 0
    for(let i = 0; i < number; i++){
        if(i % 2 == 0){
            counter++
        }
    }
    return counter
}
console.log(quantosPares(10))

function retornaNegativos(arr){
    counter = []
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            counter+=arr[i]
        }
    }
    return counter
}
console.log(retornaNegativos(newArray))

function retornaTrueOrFalse(arr){
    for(let i = 0; i < arr.length; i++){
        if(arr[i]++ > arr.length){
            return true
        }
    }
    return false
}
console.log(retornaTrueOrFalse(newArray))

function soma5(arr){
    let counter = []
    for(let i = 0; i < arr.length; i++){
       counter+=arr[i] + 5 + ', '
    }
    return counter 
}
console.log(soma5(newArray)) 

 function maiorQueMedia(arr){
  let maior = 0
   
    for(let i = 0; i < arr.length; i++){
        let media = arr[i] / arr.length
        if(media > maior){
            maior=arr[i]
        }
    }
    return maior
}
console.log(maiorQueMedia(newArray)) 

 function contaA(str){
    counter = 0
    for(let i = 0; i < str.length; i++){
        if(str[i] == 'a')
        counter++
    }
    return counter
}
console.log(contaA('abacate')) 

 function somaComprimento(arr){
    counter = 0
    for(let i = 0; i < arr.length; i++){
        counter+=arr[i].length
    }
    return counter
}
console.log(somaComprimento(['abacate', 'bananinha', 'chocolate']))

function comprimentoImpar(str){
    counter = []
    for(let i = 0; i < str.length; i++){
        if(str[i].length % 2 !== 0){
         counter= str[i]
}
}
    return counter
}
console.log(comprimentoImpar(['manga uvas'])) 

function substituiLetras(str){
    let counter = str.replaceAll('o', 'O')
    return counter
}
console.log(substituiLetras('ovo'))

function substitui(str){
    let counter = str.replaceAll('p', 'P')
    return counter
}
console.log(substitui('pato'))