const reverse = (str) => {
  let newStr = "";

  const reverseAgain = (index) => {
    if (index >= 0) {
      newStr += str[index];
      reverseAgain(index - 1);
    }
  };

  reverseAgain(str.length - 1);
  return newStr;
};

const str = "romesh";
console.log(reverse(str)); 
