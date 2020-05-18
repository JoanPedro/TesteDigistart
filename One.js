const readline = require('readline');
const [maxRange, minRange] = [1000, -1000];
let N;
let i = 0;
const testeArray = [];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const questionOne = _ => {
  return new Promise((resolve, reject) => {
    console.log('Entrada: ')
    rl.question('Insira o valor de N: ', (answer) => {
      N = answer;
      resolve();
    });
  });
}

const questionTwo = _ => {
  return new Promise ((resolve, reject) => {
    console.log(`Insira ${N} inteiros: `)
      rl.on('line', lines => {
        testeArray.push(lines);
        i++;
        if(i == N) resolve()
      })
  })
}


const resolveQuestions = (arrayOfString) => {

  return new Promise((resolve, reject) => {
    
    const answer = arrayOfString.toString()
    const numFloat = [];
    const numOutRange = [];
    let numIsNaN = false;
    let numUnique;
    
    let num = answer.split(',').map(x => {
  
      const checkNaN = parseInt(x)
      
      if(isNaN(checkNaN)) {
        numIsNaN = true;
      }
  
      if(x % 1 !== 0) {
        numFloat.push(x);
      } else 
          if(x > maxRange || x < minRange) {
          numOutRange.push(x);
        } else { 
          return parseInt(x); //
        };
  
    });
  
    if(num.length < 1 || num.length > 1000) {
      console.log('Fora da quantidade numérica.');
    } else {
        if (numFloat.length > 0) {
          console.log(`Números informados não são totalmente inteiros: ${numFloat}.`);
      } else 
          if(numOutRange.length > 0) { 
            console.log(`Números informados fora do range -1000 <= x <= 1000: ${numOutRange}.`);
        } else 
            if(numIsNaN){
              console.log('Você passou número em branco.');
          } else {
            const numSorted = num.sort((a, b) => a - b);
            numUnique = [...new Set(numSorted)];
            
            console.log('Saída: ')
            numUnique.forEach(x => console.log(x))
            // console.log(numSorted);
            // console.log(numUnique); 
          }
    }
  resolve();
  })
}

const main = async () => {
  await questionOne();
  await questionTwo();
  await resolveQuestions(testeArray);

  rl.close();
}

main();