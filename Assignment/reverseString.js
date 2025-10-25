let orgWord = "madam";
let splitChar = orgWord.split("");

let revWord = "";

for (let i = splitChar.length-1; i >= 0; i--) {
  
  revWord = revWord+splitChar[i];
}

console.log("Reversed Word:", revWord);

if (orgWord == revWord) {
  // if (orgWord === revWord)
  console.log(" It is a palindrome");
} else {
  console.log("Not a palindrome");
}



