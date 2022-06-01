for (let i = 1; i <= 30; i++) {
  let count = 0;
  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      count = 1;
    }
  }
  if (count === 0) {
    console.log(i);
  }
}
