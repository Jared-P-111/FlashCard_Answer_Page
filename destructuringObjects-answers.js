'use-strict';
//------------------------------DESTRUCTURING OBJECTS--------------------------------
//------------------------SELECTING PROPERTY'S IN OBJECTS----------------------------

//Create an object named animalsAtZoo with the following criteria.
//      1.) Make two property's named cage1 & cage2 with a different animal in each.
//      2.) Make two property's that are Arrays named cage3 and cage 4 with 3 animals in each of the same species.
//          In cage 3 put 3 chimps with chimp<name> etc... and in cage 4 put 3 with baboon<name> etc...
//      3.) Make two arrays with keys foodMenuMeat & foodMenuVegtables assign them four
//          of each catagory with there food type.
//      4.)Make a method that takes a food order for an animal and the type of food needed using destructuring
//         to enter an object as the argument.

const animalsAtZoo = {
  cage1: 'Tony',
  cage2: 'Billy',
  cage3: 'Philly',
  cage4: 'Brian',
  animalCage: ['Baboon Steve', 'Baboon Mike', 'Baboon Sarah', 'Tony the Tiger', 'Billy the Bear'],
  foodMenuMeat: ['chicken', 'lamb', 'beef', 'turkey'],
  foodMenuVegtables: ['broccoli', 'asparagus', 'carrots'],

  animalFoodOrder: function ({ animalIndex, meatIndex, vegIndex }) {
    console.log(`Food order recieved: ${this.foodMenuMeat[meatIndex]} & ${this.foodMenuVegtables[vegIndex]} will be deliverd to
${this.animalCage[animalIndex]}.`);
  },
};

console.log('-----------------------Problem 1------------------------------');
//------------------------ASSIGN VARIABLES WITH DESTRUCTURING----------------------------

//Create three variables using destructuring use the names in the console log.

const { cage1, cage3, cage4 } = animalsAtZoo;
console.log(cage1, cage3, cage4);

console.log('-----------------------Problem 2------------------------------');
//------------------------RENAMING VARIABLES WITH DESTRUCTURING----------------------

//Rename cage1, cage3, cage4 to bearCage, chimpCage, baboonCage. Use destructuring.
const { cage1: bearCage, cage2: chimpCage, cage4: baboonCage } = animalsAtZoo;
console.log(bearCage, chimpCage, baboonCage);

console.log('-----------------------Problem 3------------------------------');
//--------------MUTATING VARIABLES WITH AN OBJECT AND DESTRUCTURING----------------------

//create two variables using let named a and b and assign them numbers. Then create an object
//called obj with 3 propertys each property key should be a, b, c and the values assign them numbers.
//Now using the global var's mutate them with the object.

let a = 100;
let b = 200;

const obj = { a: 22, b: 33, c: 44 };
({ a, b } = obj);
console.log(a, b);

console.log('-----------------------Problem 4------------------------------');
//----------------USING AN OBJECT AS AN ARGUMENT WITH DESTRUCTURING----------------------

//create a method inside the animalsAtZoo object named animalFoodOrder that takes an object as the
//argument. Then use that method below to output new values using the key names in the method.

animalsAtZoo.animalFoodOrder({
  meatIndex: 1,
  vegIndex: 2,
  animalIndex: 4,
});
