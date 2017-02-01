var obj = {
  foo: 2,
  bar: 3,
  fum: 4,
  quux: 5,
  spam: 8888
}
for (var prop in obj) {
  console.log(`${prop} ${obj[prop]}`);
}

/*2. Iterating over an object's properties

Create an object with five properties: foo, bar, fum, quux, and spam. Give each property a unique value of your choosing.
Loop over the object using for ... in
Use console.log to show each property name and its associated value.*/
