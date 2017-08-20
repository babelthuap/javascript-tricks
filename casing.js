// Convert cased string to array

function camelToArray(str) {
  return str.replace(/[A-Z]/g, ' $&').split(' ');
}

function titleToArray(str) {
  return str.replace(/[A-Z]/g, ' $&').slice(1).split(' ');
}

function kebobToArray(str) {
  return str.split('-');
}

function snakeToArray(str) {
  return str.split('_');
}


// Convert array to cased string

function arrayToCamel(arr) {
  return arr.map(function(word, i) {
    word = word.toLowerCase();
    return i > 0 ? word[0].toUpperCase() + word.slice(1) : word;
  }).join('');
}

function arrayToTitle(arr) {
  return arr.map(function(word) {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  }).join('');
}

function arrayToKebob(arr) {
  return arr.join('-').toLowerCase();
}

function arrayToSnake(arr) {
  return arr.join('_').toLowerCase();
}

function arrayToConstant(arr) {
  return arr.join('_').toUpperCase();
}



console.log(camelToArray('myAwesomeCamelCaseExample'));
console.log(titleToArray('MyAwesomeTitleCaseExample'));
console.log(arrayToCamel([ 'My', 'Awesome', 'Title', 'Case', 'Example' ]));
console.log(arrayToTitle([ 'my', 'awESome', 'TITLE' ]));
console.log(arrayToKebob([ 'my', 'awESome', 'TITLE' ]));
console.log(arrayToSnake([ 'My', 'Awesome', 'Title', 'Case', 'Example' ]));
console.log(arrayToConstant([ 'my', 'awESome', 'TITLE' ]));
