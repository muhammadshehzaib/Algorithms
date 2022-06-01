let str1 = "Who is the best cricket player?";
let str2 = "His name is Imran Khan";
let found = 0;
let found2 = 0;
storeArr = [
  [["a", "the", "is", "an"], 1],
  [["who", "why", "which"], 3],
  [["his", "her"], 2],
];
for (let i = 0; i <= 2; i++) {
  storeArr[i][0].forEach((element, index) => {
    string1 = str1.includes(element);
    if (string1 === true) {
      found = storeArr[i][1];
      i++;
    }
  });

  for (let i = 0; i <= 2; i++) {
    storeArr[i][0].forEach((element, index) => {
      string1 = str2.includes(element);
      if (string1 === true) {
        found2 = storeArr[i][1];
        i++;
      }
    });
  }
  console.log(found);
  console.log(found2);
}
