let arr = [];

let arrTwo = [1, 2, 3, 4, 5, 6, 7];

console.log(arrTwo.length);

console.log(arrTwo[0], arrTwo[3], arrTwo[6]);

let mixedDataTypes = ["Eduardo", "Godoi", 20, true, 1.76, null];

console.log(mixedDataTypes.length);

let itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];

console.log(itCompanies);
console.log(itCompanies.length);
console.log(itCompanies[0], itCompanies[4], itCompanies[6]);

for (let i = 0; i < itCompanies.length; i++) {
  console.log(itCompanies[i]);
}

for (let i = 0; i < itCompanies.length; i++) {
  console.log(itCompanies[i].toUpperCase());
}

itCompanies.includes("CWI") ? console.log("CWI") : console.log("Is not found");

console.log(itCompanies.join());
/*
for (let i = 0; i < itCompanies.length; i++) {
  if (itCompanies[i].includes("o", 2)) {
    console.log(itCompanies.splice(i, 1))
  }
}*/
console.log(itCompanies.sort())
//console.log(itCompanies.reverse())
//console.log(itCompanies.slice(0,4))
//console.log(itCompanies.slice(3,7))
//console.log(itCompanies.slice(3,4))


