romanConventerBasic = (number) => {
  const romanValue = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];
  const decimalValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

  let romanized = '';

  decimalValue.map((numberRoman, index) => {
    while (numberRoman <= number) {
      romanized += romanValue[index];
      number -= numberRoman;
    }
  });

  return romanized;
}

console.log(romanConventerBasic(189));
