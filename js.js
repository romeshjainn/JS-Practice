function even(num) {
  function printEven(i) {
    if (num > 0) {
      num--;
      if (num % 2 == 0) {
        console.log(num);
      }
      printEven(num);
    }
  }
  printEven(num);
}
even(10);
