
//a
var boys = ["Peter", "lars", "Ole"];
var girls = ["Janne", "hanne", "Sanne"];

//b
var all = boys.concat(girls);
console.log(all);

//c
var prettyListComma = all.join(", ");
var prettyListHyphen = all.join(" - ");
console.log(prettyListComma);
console.log(prettyListHyphen);

//d
all.push("Lone", "Gitte");
var prettyListComma = all.join(", ");
console.log(prettyListComma);

//e
all.unshift("Hans", "Kurt");
var prettyListComma = all.join(", ");
console.log(prettyListComma);

//f
all.shift("Hans");
var prettyListComma = all.join(", ");
console.log(prettyListComma);
//g

all.pop("Gitte");
var prettyListComma = all.join(", ");
console.log(prettyListComma);

//h
all.splice(3,2);
var prettyListComma = all.join(", ");
console.log(prettyListComma);

//i
all.reverse();
var prettyListComma = all.join(", ");
console.log(prettyListComma);

//j
all.sort();
var prettyListComma = all.join(", ");
console.log(prettyListComma);

//l
var toUpperCase = function(x){
    return x.toUpperCase();
};
var allUpper = all.map(toUpperCase);
var prettyListComma = allUpper.join(", ");
console.log(prettyListComma);

//m
var lorL = function(x){
    return x.startsWith("l") || x.startsWith("L");
};
var all = all.filter(lorL);
var prettyListComma = all.join(", ");
console.log(prettyListComma);