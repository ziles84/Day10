
var myPet = {
  "species": "Buldog",
  "name": "Brnjo",
  "legs": 4,
  "friends": ["Kuko", "Milo"]
};

function myFunction(myObj) {
  return myObj;
}



console.log(myFunction(myPet));

module.exports = { myPet, myFunction };
