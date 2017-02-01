// Arrays of objects

// Create 3-5 objects, each with a name and a job_title. Use people you know, or characters from fiction,
// or your own inventions.
// Store these objects in an array.
// Iterate over the array and use console.log to show each person's job title and name.

var arrayOfObjects = [
  {
    name: 'Federer',
    job: 'GOAT',
  },
  {
    name: 'James',
    job: 'Developer',
  },
  {
    name: 'Aaron',
    job: 'Developer',
  }
]

arrayOfObjects.forEach(function(person) {
  console.log(`${person['name']} ${person['job']}`);
});