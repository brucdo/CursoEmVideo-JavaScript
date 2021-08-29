console.log('O console funcionou corretamente')
//precione f8 para executar

//Array - variavel composta 
var num = [5,8,4]
console.log(`${num}`) 
console.log(num)
num[3]=6
console.log(num)
num.push(7) //add item na ultima posição do vetor
console.log(num)
console.log(num.length) //tamanho
num.sort() //ordena o itens
console.log(num)
for(var pos=0;pos<num.length;pos++){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
console.log('Imprimindo com for in:')
for(var pos1 in num){
    console.log(`A posição ${pos1} tem o valor ${num[pos1]}`)
}
//para buscar um valor no array:
console.log(num.indexOf(7))
var n = num.indexOf(3) //>quando nao tem o valor procurado no arrya retorna -1
console.log(n)
if (n==-1){
    console.log(`O valor nao foi encontrado`)
}else{
    console.log(`Valor esta na posição ${n}`)
}

/*//For: Inicio, incremento, condição
for(var e=1;e<=100;e++){
    console.log('For '+e)
}
console.log('Fim do programa em: '+e)*/

/*var c=1
//While: estrutura de reprtição com teste lógico no inicio
while(c<10){
    console.log('Mais 1 - '+c)
    c++
}
console.log('Fim do programa em '+c)*/

/*//Do While: Estrutura de repeticao com teste lógico no fim - Primeiro executa o código, depois testa
var d = 1
do {
    console.log('Mais 1 - '+d)
    d++
} while(d<10)
console.log('Fim do programa em '+d)*/

/*var vel = 60.5
console.log(`A velocidade do seu carro é ${vel} km/h`)
if(vel>50){
    console.log('Você foi multado \n')
}else{
    console.log('Velocidade ok')
}*/



