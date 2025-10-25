let input = "playwright" ;
let reverse = "" ;

for (let i = input.length-1; i>=0;i--) {
reverse = reverse+input.charAt(i);
}
console.log(reverse);

let word = "javascript";
let count1 = 0 ;
let count2 = 0 ;

for (let j=0; j<=word.length; j++) {
if(word.charAt(j) == "a"){
count1++ }
else if(word.charAt(j) == "s") {
count2++ }
}
console.log(`output: a = ${count1} and s = ${count2}`);
