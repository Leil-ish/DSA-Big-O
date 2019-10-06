const sheep = function (num){
    for (let i = num; i > 0; i--) {
      console.log(`${i}: another jumped over the fence.`);
    }
    console.log('All sheep jumped over the fence.');
  };
  
  // console.log(sheep(5));
  
  const powerCalc = function (base, exp) {
    let result = 1;
    for (let i = 1; i <= exp; i++ ){
      result *= base;
    }
    return result;
  };
  
  // console.log(powerCalc(2, 0));
  
  
  const reverseString = function (str) {
  
    let output = '';
  
    for (let i = str.length-1; i >= 0; i--) {
  
      output += str[i];
    }
  
    return output;
  };
  
  // console.log(reverseString('abcdefg'));
  
  
  const trianglularNumber = function (num) {
  
    let output = 0;
  
    for (let i = 1; i <= num; i++) {
  
      output += i;
    }
  
    return output;
  };
  
  // console.log(trianglularNumber(3));
  
  
  const stringSplitter = function (str) {
  
    let output = '';
  
    for (let i = 0; i < str.length; i++) {
      if (str[i] !== '/') {
        output += str[i];
      }
    }
  
    return output;
  };
  
  // console.log(stringSplitter('02/02/2020'));
  
  const fibonacci = function (num) {
  
    let result = [];
    for (let i = 1; i <= num; i++) {
  
      if (i === 1) {
        result.push(0);
      }
      else if (i === 2) {
        result.push(1);
      }
      else {
        result.push(result[i - 2] + result[i - 3]);
      }
    }
  
    return result;
  };
  
  // console.log(fibonacci(100));
  
  const factorial = function (num) {
  
    let output = 1;
  
    for (let i = 1; i <= num; i++) {
  
      output *= i;
    }
  
    return output;
  };
  
  console.log(factorial(3));