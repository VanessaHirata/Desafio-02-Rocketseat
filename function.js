let name = prompt("Qual é o nome do aluno?");

let n1 = prompt("Qual é a nota da primeira prova?");
let n2 = prompt("Qual é a nota da segunda prova?");

let average = (Number(n1) + Number(n2)) / 2;

let result = average > 7;

if (result) {
    alert ("Parabéns " + name + "! Sua média foi: " + average)    
} else {
    alert ("Reprovado.")
}