let str1 = "who is the best cricket player?";
let str2 = "his name is Imran Khan";
let found = 0;
let found2 = 0;
str1Array = str1.split(" ");
str2Array = str2.split(" ");
storeArr = [
  [["a", "the", "is", "an"], 1],
  [["who", "why", "which"], 3],
  [["his", "her"], 2],
];

for (let i = 0; i <= 2; i++) {
  for (let j = 0; j <= 2; j++) {
    if (str1Array.includes(storeArr[i][0][j])) {
      found += storeArr[i][1];
      break;
    }
  }
}
for (let i = 0; i <= 2; i++) {
  for (let j = 0; j <= 2; j++) {
    if (str2Array.includes(storeArr[i][0][j])) {
      found2 += storeArr[i][1];
      break;
    }
  }
}

console.log(found);
console.log(found2);
