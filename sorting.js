let array = [1,2,2,2,5,8,22,9,3,3,4,5,4,5,6]
let uniqueArray = array.filter((c, index) => {
    return array.indexOf(c) === index;
});
let temp=0
for (let i = 0; i < uniqueArray.length; i++) {
  for (let j = i + 1; j < uniqueArray.length; j++) {
    if (uniqueArray[i] > uniqueArray[j]) {
      temp = uniqueArray[i];
      uniqueArray[i] = uniqueArray[j];
      uniqueArray[j] = temp;
    }
  }
}
    console.log(uniqueArray)

