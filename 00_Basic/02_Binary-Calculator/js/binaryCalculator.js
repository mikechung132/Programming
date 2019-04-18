//const result = document.getElementById('res');
let result = "";

function clickEqual() {
  if(result.indexOf('+') != -1){
    let num = result.split('+');
    let operand1 = parseInt(num[0], 2);
    let operand2 = parseInt(num[1], 2);
    let sum = operand1 + operand2;
    let ans = sum.toString(2);
    result = ans;
  }else if(result.indexOf('-') != -1){
    let num = result.split('-');
    let operand1 = parseInt(num[0], 2);
    let operand2 = parseInt(num[1], 2);
    let sub = operand1 - operand2;
    let ans = sub.toString(2);
    result = ans;
  }else if(result.indexOf('*') != -1){
    let num = result.split('*');
    let operand1 = parseInt(num[0], 2);
    let operand2 = parseInt(num[1], 2);
    let mult = operand1 * operand2;
    let ans = mult.toString(2);
    result = ans;
  }else if(result.indexOf('/') != -1){
    let num = result.split('/');
    let operand1 = parseInt(num[0], 2);
    let operand2 = parseInt(num[1], 2);
    let divide = operand1 / operand2;
    let ans = divide.toString(2);
    result = Math.floor(ans);
  }else{
    alert("Something went wrong.");
  }

  // Display results on screen
  //result = ans;
  document.getElementById('res').innerHTML = result;
}


function key(e){
  result += e;
  document.getElementById('res').innerHTML = result;
}

function clr() {
  // Reassign empty string to clear results
  result = "";
  document.getElementById('res').innerHTML = "";
}

// if(!checkOperator()) {
//   const re = /\d+/g;
//   const re2 = /[\+\-\*\/]+/g;
//   const numbers = result.innerHTML.match(re);
//   const operations = result.innerHTML.match(re2);
//
// }
