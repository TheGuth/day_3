function createMyObject() {
  return {
    foo: 'bar',
    answerToUniverse: 42,
    "olly olly": 'oxen free',
    sayHello: function() {
      return 'hello';
    },
  }
}

var myObject = createMyObject();
console.log(myObject.sayHello());

console.log(createMyObject());