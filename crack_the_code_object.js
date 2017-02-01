var keyCodes = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
};
function decodes(str) {
  var words = str.split(' ');
  var result = '';
  words.forEach (function(word){
    keyCodes[word[0]] !== undefined ? result += word[keyCodes[word[0]]] : result += ' ';
  });
  return result;
}

console.log(decodes('craft block argon meter bells brown croon droop'));
