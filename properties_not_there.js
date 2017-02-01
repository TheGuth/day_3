

var arrayOfObjects = [
  {
    name: 'Federer',
    job: 'GOAT',

  },
  {
    name: 'James',
    job: 'Developer',
    boss: 'Chris',

  },
  {
    name: 'Aaron',
    job: 'Developer',
    boss: 'Tauhida',
  }
]
var key = 'boss';
arrayOfObjects.forEach(function(person) {
  if (key in person) {
    console.log(`${person['job']} ${person['name']} reports to ${person['boss']}`);
  }
  else {
    console.log(`${person['job']} ${person['name']} reports to nobody`);
  }

});



/*5. Properties that aren't there

Expand on the previous example by adding a boss property to everyone except the owner of the company.
Change the iteration to print out messages in this format: "${title} ${name} reports to ${boss}.". For example: Junior Engineer Bob reports to Fred..
What gets printed out for the owner?
Adjust the message so that people with no boss display "${title} ${name} doesn't report to anybody." - for example, Founder John doesn't report to anybody.*/
