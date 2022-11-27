// Desafio 11
function generatePhoneNumber(array) {
  // seu código aqui
  let phoneNumber = '(xx) xxxxx-xxxx';
  let contador = 0;

  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  };
  
  for (let index = 0; index < array.length; index += 1) {
    let verification = array[index];
    //console.log(verification);
    for (let index2 = 1; index2 < array.length; index2 += 1) {
      if (verification === array[index2]) {
        contador +=1;
      }
    }
    if (array[index] < 0 || array[index] > 9 ) {
      return 'não é possível gerar um número de telefone com esses valores';
    } else if(contador >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    contador = 0;
    phoneNumber = phoneNumber.replace('x', array[index]);
    

  }
  return phoneNumber;
}

console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  if ((lineA+lineB) < lineC || (lineB+lineC) < lineA || (lineA + lineC) < lineB) {
    return false;
  } else if (Math.abs(lineA - lineB) > Math.abs(lineC) || Math.abs(lineC - lineB) > Math.abs(lineA) || Math.abs(lineA - lineC) > Math.abs(lineB)) {
    return false;
  } else {
    return true
  }
}
console.log(triangleCheck(10, 14, 8));

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
