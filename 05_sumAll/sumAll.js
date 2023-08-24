const sumAll = function(x, y) {
  if (typeof x != 'number' || typeof y != 'number' || x < 0 || y < 0) return 'ERROR';
  let num1 = (x > y) ? y : x;
  let num2 = (x > y) ? x : y;
  
  let result = 0;
  for (let i = num1; i <= num2; i++) result += i;
  return result;
};

// Do not edit below this line
module.exports = sumAll;
