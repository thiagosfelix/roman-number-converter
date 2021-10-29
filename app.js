const convertToRoman = (num) => {
  let romanNumber = '';
  if((num / 1000) > 0) {
    for(let i = 0; i < Math.floor(num / 1000); i++) {
      romanNumber += 'M';
    }
    num = num % 1000;
  }
  if((num / 500) > 0) {
    for(let i = 0; i < Math.floor(num / 500); i++) {
      romanNumber += 'D';
    }
    num = num % 500;
  }
  if((num / 100) > 0) {
    for(let i = 0; i < Math.floor(num / 100); i++) {
      romanNumber += 'C';
    }
    num = num % 100;
  }
  if((num / 50) > 0) {
    for(let i = 0; i < Math.floor(num / 50); i++) {
      romanNumber += 'L';
    }
    num = num % 50;
  }
  if((num / 10) > 0) {
    for(let i = 0; i < Math.floor(num / 10); i++) {
      romanNumber += 'X';
    }
    num = num % 10;
  }
  if((num / 5) > 0) {
    for(let i = 0; i < Math.floor(num / 5); i++) {
      romanNumber += 'V';
    }
    num = num % 5;
  }
  if((num / 1) > 0) {
    for(let i = 0; i < Math.floor(num / 1); i++) {
      romanNumber += 'I';
    }
    num = num % 1;
  }
  romanNumber = romanNumber.replace('DCCCC','CM')
  romanNumber = romanNumber.replace('CCCC','CD')
  romanNumber = romanNumber.replace('LXXXX','XC')
  romanNumber = romanNumber.replace('XXXX','XL')
  romanNumber = romanNumber.replace('VIIII','IX')
  romanNumber = romanNumber.replace('IIII','IV')
  return romanNumber;
}

convertToRoman(3999);