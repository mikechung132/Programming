// Tutorial 3 - ReadLine Module

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let num1 = Math.floor((Math.random() * 10) + 1);
let num2 = Math.floor((Math.random() * 10) + 1);
let ans = num1 + num2;

rl.question(`What is ${ num1 } + ${ num2 }? \n`, (userInput) => {
      if(userInput.trim() == ans){
        rl.close();
      }else{
        rl.setPrompt('Incorrect Response. Try Again.\n');
        rl.prompt();
        rl.on('line', (userInput) => {
            if(userInput.trim() == ans)
              rl.close();
            else{
              rl.setPrompt(`Your answer of ${userInput} is incorrect.`);
              rl.prompt();
            }//end else
        });//end rl.on
      }//end else
});//end rl.question

rl.on('close', () => {
  console.log('Correct!');
});
