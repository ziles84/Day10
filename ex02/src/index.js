var myClothes = {
  "hat": "Fedora",
  "shirt": "Nike",
  "shoes": "Converse"

};


function myFunction(myObj) {
  var hatValue = myClothes.hat;
  var shirtsValue = myClothes.shirt;
  var shoesValue = myClothes.shoes;

  return {hatValue, shirtsValue, shoesValue};
}



console.log(myFunction(myClothes));

module.exports = myFunction(myClothes);
