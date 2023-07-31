let n1;
let n2;

n1 = prompt('Digite o primeiro número:');
n2 = prompt('Digite o segundo número!');

let number1 = Number(n1);
let number2 = Number(n2);

let sumResult = number1 + number2;
let subtResult = number1 - number2;
let multResult = number1 * number2;
let divResult = number1 / number2;
let remResult = number1 % number2;

let message1 = `${n1} + ${n2} = ${sumResult};`;
let message2 = `${n1} - ${n2} = ${subtResult};`;
let message3 = `${n1} * ${n2} = ${multResult};`;
let message4 = `${n1} / ${n2} = ${divResult};`;
let message5 = `${n1} % ${n2} = ${remResult};`;

let isEven;
let message6;
if (sumResult % 2 === 0) {
  message6 = 'A soma dos números é par';
} else {
  message6 = 'A soma dos números é ímpar';
}

let message7;
if (n1 === n2) {
  message7 = 'Os números são iguais';
} else {
  message7 = 'Os números são diferentes';
}

alert(message1);
alert(message2);
alert(message3);
alert(message4);
alert(message5);
alert(message6);
alert(message7);
