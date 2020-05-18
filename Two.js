const readline = require('readline');
const operators = ["+", "-", "*", "/", "%"];
const zeros = [
  '00000000',
  '0000000',
  '000000',
  '00000',
  '0000',
  '000',
  '00',
  '0',
]
let N;
let testeArray = [];
let i=0;
let num = [];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const operatorsQuestion = _ => {

  return new Promise((resolve, reject) => {
    
    console.log('Entrada: ')
    rl.question('Insira o Operador: ', (answer) => {
      N = answer;
      resolve();
    });
  });
}

const operatorsNumbers = (operator) => {
  return new Promise ((resolve, reject) => {
    console.log(`Insira o primeiro e o segundo número: `)
      rl.on('line', lines => {
        testeArray.push(lines);
        i++;
        if(i == 2) resolve()
      })
  })
}

const operatorsResolver = _ => {

  
  let x = parseInt(testeArray[0], 2);
  let y = parseInt(testeArray[1], 2);
  return new Promise((resolve, reject) => {
    console.log('Saída: ');

    if(N == operators[0]) {
      let sum = x + y;
      let response = sum.toString(2);
      console.log('lenght', response.length)
      let zerosSalt = zerosCount(response.length)
      console.log('ZerosSalt', zerosSalt)
      console.log(`${
        zeros[-zerosSalt + 7] + response
      }`);
    }

    if(N == operators[1]) {
      let sub = x - y;
      let response = sub.toString(2);
      let zerosSalt = zerosCount(response.length)
      console.log(`${
        zeros[-zerosSalt + 7] + response
      }`);
    }

    if(N == operators[2]) {
      let mult = x * y;
      let response = mult.toString(2);
      let zerosSalt = zerosCount(response.length)
      console.log(`${
        zeros[-zerosSalt + 7] + response
      }`);
    }

    if(N == operators[3]) {
      let div = x / y;
      let response = div.toString(2);
      let zerosSalt = zerosCount(response.length)
      console.log(`${
        zeros[-zerosSalt + 7] + response
      }`);
    }

    if(N == operators[4]) {
      let mod = x % y;
      let response = mod.toString(2);
      let zerosSalt = zerosCount(response.length)
      console.log(`${
        zeros[-zerosSalt + 7] + response
      }`);
    }

  resolve();
  })
}

const zerosCount = (length) => {
  let salt;
  salt = -(length - 7)
  return salt
}

const main = async () => {
  await operatorsQuestion();
  await operatorsNumbers();
  await operatorsResolver();

  rl.close();
}

main();