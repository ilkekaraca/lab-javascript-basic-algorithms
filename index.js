// Itconst hacker1="Bob"
console.log(`The driver's name is ${hacker1}`);
const hacker2 = "Jack";
console.log(`The navigator's name ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length > hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names,${hacker1.length} characters!.`
  );
}

// Iteration 3: Loops
let person1 = "";
for (let i = 0; i < hacker1.length; i++) {
  person1 += hacker1[i].toUpperCase() + " ";
}
console.log(person1);

let person2 = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  person2 += hacker2[i];
}
console.log(person2);

if (hacker1 === hacker2) {
  console.log("What?! You both have the same name?");
} else {
  for (let i = 0; i < hacker1.length; i++) {
    if (hacker1[i] < hacker2[i]) {
      console.log("The driver's name goes first.");
      break;
    } else if (hacker1[i] > hacker2[i]) {
      console.log("Yo, the navigator goes first, definitely");
      break;
    }
  }
}

//Bonus 1

const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at ex lacus. Nunc at finibus erat. Duis viverra ipsum sed mattis venenatis. Praesent at laoreet ligula. Proin at felis ac urna suscipit mollis quis quis lectus. Ut mi urna, iaculis vel eros sed, luctus ultrices neque. Vestibulum tempor, sapien id cursus rutrum, quam erat porta justo, eget venenatis ipsum turpis nec tortor. Maecenas egestas erat quis purus molestie feugiat. Etiam pulvinar purus metus, at vehicula turpis tristique ut. Phasellus viverra et augue eget malesuada. Praesent ut neque aliquam, aliquet dui eget, laoreet lacus. Ut at elementum diam, et molestie tellus.

Mauris commodo purus lectus, tempus fermentum velit pulvinar vel. Nunc et dapibus sapien. Maecenas suscipit magna orci, sit amet tincidunt dolor maximus ut. Morbi nec leo ante. Suspendisse sit amet interdum nibh. Vivamus luctus purus ante, id pharetra diam vestibulum at. Aenean ultricies ipsum in massa rutrum congue. Praesent scelerisque in justo eget pulvinar. Nulla facilisi.

Sed id eleifend turpis, vel pellentesque eros. Sed sodales malesuada nibh in eleifend. Nulla facilisi. Ut varius, nunc id volutpat fringilla, ante odio dictum libero, vel facilisis urna dui nec ex. Sed tristique orci mi, vel congue mauris lacinia nec. Duis ac pharetra ligula. Nulla porttitor ex ligula, sed posuere dui vestibulum vel. Suspendisse sit amet eros id nibh vehicula porttitor. Praesent felis nisi, elementum nec massa eget, pellentesque posuere nisi. Quisque porttitor tortor eu nibh varius egestas. In nec varius leo. Quisque sit amet nulla non lacus laoreet scelerisque. Cras placerat turpis et nibh finibus, a fringilla tortor laoreet.`;

console.log(lorem.split(" ").length);
console.log(lorem.match(/et/g).length);

//Bonus 2

const phraseToCheck = "kazak";
let isPalindrome = true;
for (let i = 0; i < phraseToCheck.length; i++) {
  if (phraseToCheck[i] !== phraseToCheck[phraseToCheck.length - 1 - i]) {
    console.log("It is not a polindrome");
    isPalindrome = false;
    break;
  }
}
if (isPalindrome) {
  console.log("It is palindrome");
}
