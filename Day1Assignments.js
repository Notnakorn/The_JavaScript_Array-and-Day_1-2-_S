 //Observe: no return type, no type on parameters
 function add(n1, n2) {
     if (typeof n1 === "number" && typeof n2 === "number") {
         return n1 + n2;
     } else {
         return "Incorrect parameters";
     }

 }

 var sub = function (n1, n2) {
     if (typeof n1 === "number" && typeof n2 === "number") {
         return n1 - n2;
     } else {
         return "Incorrect parameters";
     }
 };

 var mul = function (n1, n2) {
     if (typeof n1 === "number" && typeof n2 === "number") {
         return n1 * n2;
     } else {
         return "Incorrect parameters";
     }
 };

 var cb = function (n1, n2, callback) {

     if (typeof callback !== "function") {
         return "Incorrect callback parameter. Must be a function";
     }
     if (typeof n1 !== "number" || typeof n2 !== "number") {
         return "Incorrect value for n1 or/and n2. Should be a number";
     } else {
         return "Result from the two numbers: " + n1 + "+" + n2 + "=" + callback(n1, n2);
     }
 };


 console.log(add(1, 2));
 console.log(add);
 console.log(add(1, 2, 3));
 console.log(add(1));
 console.log(cb(3, 3, add));
 console.log(cb(4, 3, sub));
 // console.log(cb(3, 3, add())); skal have en metode reference ikke kører metoden, når den i parameterfeltet til cb-metoden.
 console.log(cb(3, "hh", add)); // Her fungerer det, da der kun er en reference til add.
 console.log(cb(3, 4, mul));

 var result = cb(10, 2, function (n1, n2) {
     return n1 / n2;
 });

 console.log(result); //anonym division-function som callback i cb.

 var names = ["Lars", "Jan", "Bo", "Fredereik", "Kaj"];

 var namesLessThanTree = function (name) {

     if (name.length <= 3) {
         return name;
     }

 };
 var shortNames = names.filter(namesLessThanTree);

 console.log("Full list of names: ");
 names.forEach(function (name) {
     console.log(name);
 });
 console.log("Names with 3 or less letters: ");
 shortNames.forEach(function (name) {
     console.log(name);
 });

 var upperCaseNames = names.map(function (name) {
     return name.toUpperCase();
 });

 console.log(upperCaseNames);

 //3
 var rowNames = names.map(function (name) {
     return "<li>" + name + "</li>";
 });

 var tableWithNames = "<ul>" + rowNames.join("") + "</ul>";

 console.log(tableWithNames);

 //4
 var cars = [{
         id: 1,
         year: 1997,
         make: 'Ford',
         model: 'E350',
         price: 3000
     },
     {
         id: 2,
         year: 1999,
         make: 'Chevy',
         model: 'Venture',
         price: 4900
     },
     {
         id: 3,
         year: 2000,
         make: 'Chevy',
         model: 'Venture',
         price: 5000
     },
     {
         id: 4,
         year: 1996,
         make: 'Jeep',
         model: 'Grand Cherokee',
         price: 4799
     },
     {
         id: 5,
         year: 2005,
         make: 'Volvo',
         model: 'V70',
         price: 44799
     }
 ];

 var newCars = cars.filter(function (car) {
     if (car.year > 1999) {
         return car;
     }
 });
 console.log("These cars are newer than 1999");
 console.log(newCars);

 var volvoCars = cars.filter(function (car) {
     if (car.make === "Volvo") {
         return car;
     }
 });
 console.log("These cars are Volvos");
 console.log(volvoCars);

 var priceBelow500 = cars.filter(function (car) {
     return car.price < 5000;
 });
 console.log("These cars cost less than 5000");
 console.log(priceBelow500);

 var carFilterFunction = function (type, array, value) {

     return array.filter(function (car) {
         switch (type) {

             case "year":

                 return car.year > value;

             case "make":

                 return car.make === value;


             case "price":

                 return car.price > value;

         }
     });
 };
 var newCarArray = carFilterFunction("price", cars, 40000);
 console.log(newCarArray);

 var carTableInsert  = cars.map(function(car){
    return "INSERT INTO cars (id,year,make,model,price) VALUES (" + car.id + "," + car.year + ","+ car.make + ","+ car.model + ","+ car.price + ");";
 });

console.log(carTableInsert);

// 1) Given the code below answer, don’t execute the code, in what order you would expect to see the outputs:
var msgPrinter = function(msg,delay){
  setTimeout(function(){
    console.log(msg);
  },delay);
};
console.log("aaaaaaaaaa");
msgPrinter ("bbbbbbbbbb",2000);
console.log("dddddddddd");
msgPrinter ("eeeeeeeeee",1000);
console.log("ffffffffff");
// 2) Forventede a, d, f, e, b. Var også hvad der forekom.

// this and constructor functions 
// 1)


/*function Person(name){
    this.name = name;
    console.log("Name: "+ this.name);
    setTimeout(function(){
      console.log("Hi  "+this.name);  //Explain this
    },2000);
  }*/
  // Denne type funktion kaldes en konstruktor funktion.
  //Person("Kurt Wonnegut");  //This calls the function og adder et delay på, det der kommer bagefter 
  //console.log("I'm global: "+ name); // da function ikke gemmer personen i nogen 'var', bliver name ikke tildelt nogen værdi.
  
  /*function Person(name){
    this.name = name;  
    console.log("Name: "+ this.name);
    setTimeout(function(){
      console.log("Hi  "+this.name);  
    }.bind(this),2000);
  }

  Person("Kurt Wonnegut");  
  console.log("I'm global: "+ name); //nu får vi en name is not defined error.
  */
//4

  var greeter = function(){
    console.log(this.message);
  };
  var comp1 = { message: "Hello World" };
  var comp2 = { message: "Hi" };
  
  var g1 = greeter.bind(comp1 );//We can store a reference, with a specific “this” to use
  var g2 = greeter.bind(comp2 );//And here another “this”
  setTimeout(g1,3000);
  setTimeout(g2,4000);
  
  //Vi opretter først en greeter funktion, der har en en this.message i sig. Dernæst oprettes 2 message objekter. 
  //Og da vi så kalder greeter metoden 2 gange binder vi hver gang en ny besked på metoden.

  //Javascript objects

  //1

  function Dude(name, birthday, hobby, email){
      this.name = name;
      this.birthday = birthday;
      this.hobby = hobby;
      this.email = email;
      
  }
   
  var dude = Dude.bind("Dude", 1999, "Biking", "Dude@dude.dude");

  for (var property in Dude){
    console.log(dude[property]);
  } 

 //---------------------------------------------------------------------
 //These are notes from class and not part of the study point assignment
 //--------------------------------------------------------------------- 

 /*var numbers = [1, -4, 9, 104, 55];

 var numbersBelow50 = function (number) {
     return number < 50;
 };
 var numbersAbove90 = function (number) {
     return number > 90;
 };



 var numbersBelow50 = numbers.filter(numbersAbove90);
 console.log(numbersBelow50.join(", "));

 /* Objekt array med javascript
  var names = [
      {name: "Lars", gender: "male"},
      {name: "Mette", gender: "female"},
      {name: "LarsLars", gender: "male"}
 ];*/

 /*for(var i = 0; i<numbers.length; i++){
     console.log("Value is: " + numbers[i]);
 }

 var printArrayNumbers = function (number) {
     console.log("Value is: " + number);
 };

 numbers.forEach(printArrayNumbers);

 /* numbers.forEach(function(number){
      console.log("Value is: " + number);
  });

 var myCallback1 = function (numbers) {
     return numbers * -1;
 };

 var myCallback2 = function (numbers) {
     return "<tr><td>" + numbers + "</td></tr>";
 };

 var newSign = numbers.map(myCallback1);
 var rows = numbers.map(myCallback2);
 var table = "<table>" + rows.join("") + "</table>";


 console.log(newSign);
 console.log(table);*/