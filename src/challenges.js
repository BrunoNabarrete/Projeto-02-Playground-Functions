// Desafio 1
function compareTrue(valeu1, valeu2) {
  if (valeu1 && valeu2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let area = 0;
  area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  let result = string.split(" ");
  return result;
}

// Desafio 4
function concatName(array) {
  let firstArray = array[0];
  let lastArray = array[array.length - 1];
  let result = lastArray + ', ' + firstArray;
  return result;
}

// Desafio 5
function footballPoints(wins, ties) {
  
  wins = wins * 3;
  ties = ties * 1;
  let points = wins + ties;
  return points;
}

//Desafio 6
function highestCount(array) {
  let countNumb = 0;
  let result = 0;

  for (let index = 0; index < array.length; index += 1) {
    let verification = array[index];
    for (let index2 = 0; index2 < array.length; index2 += 1) {
      if (verification < array[index2]) {
        result = array[index2]; 
      }
    }
  }
  for (let index3 = 0; index3 < array.length; index3 += 1) {
    if (result === array[index3]) {
      countNumb += 1;
    }
  }
  return countNumb;
}

//Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let resultado;
  if (Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse)) {
    resultado = 'cat2';
  } else if (Math.abs(mouse - cat1) < Math.abs(mouse - cat2)) {
    resultado = 'cat1';
  } else if (Math.abs(mouse - cat1) === Math.abs(mouse - cat2)) {
    resultado = 'os gatos trombam e o rato foge';
  }
  return resultado;
}

// Desafio 8
function fizzBuzz(array) {
  // seu código aqui
  let arrayResult = [];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      arrayResult.push('fizzBuzz');
    } else if (array[index] % 5 === 0) {
      arrayResult.push('buzz');
    } else if (array[index] % 3 === 0) {
      arrayResult.push('fizz');
    } else {
      arrayResult.push('bug!');
    }
  }
  return arrayResult;
}


// Desafio 9
function encode(string) {
  //let codificado = string.split('');
  let array = string.split('');
  
  for (let index = 0; index < array.length; index += 1) {
      if (array[index] === 'a') {
        array[index] = '1';
      } else if (array[index] === 'e') {
        array[index] = '2';
      } else if (array[index] === 'i') {
        array[index] = '3';
      } else if (array[index] === 'o') {
        array[index] = '4';
      } else if (array[index] === 'u') {
        array[index] = '5';
      } else {
        
      }
    }
    let stringEncode = array.toString().replace(/,/g,"");
  return stringEncode;
}

console.log(encode('hello'));

function decode(string) {
  // seu código aqui
    //let codificado = string.split('');
    let array = string.split('')
    //console.log(array)
    
    for (let index = 0; index < array.length; index += 1) {
        if(array[index] === '1'){
          array[index] = 'a';
        } else if (array[index] === '2') {
          array[index] = 'e';
        } else if (array[index] === '3') {
          array[index] = 'i';
        } else if (array[index] === '4') {
          array[index] = 'o';
        } else if (array[index] === '5') {
          array[index] = 'u';
        } else {
          
        }
      }
      let stringEncode = array.toString().replace(/,/g,"");
    return stringEncode;

}
console.log(decode('h2ll4'));

// Desafio 10
function techList(array, string) {
  array.sort();
  let techList = [];
  
  if (array.length === 0) {
    return ('Vazio!');
  }
  
  for (let index = 0; index < array.length; index += 1) {
      let objeto = {
        tech : array[index],
        name : string
      };
      techList.push(objeto);
  }
  
  //techList['name'] = string
  
  return techList 
}


module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
