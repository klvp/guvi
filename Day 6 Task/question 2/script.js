/** @format */

// invoke the alert
function invoke_alert() {
  alert("I’m invoked!");
}

// correct score
function correct_score() {
  let value = prompt("How many runs you scored in this ball");
  value = +value;
  if (value === 4) {
    console.log("You hit a Four");
  } else if (value === 6) {
    console.log("You hit a Six");
  } else {
    console.log("I couldn't figure out");
  }
}

//diffused code
function diffused_code() {
  var a = "2" > "12"; // Comparison for string data type is considered by taking the ASCII Value and ASCII value of 2 is greater than the ASCII value of 1
  //Don't touch below this
  if (a) {
    console.log("Code is Blasted");
  } else {
    console.log("Diffused");
  }

  var a = 2 > 12;
  if (a) {
    console.log("Code is Blasted");
  } else {
    console.log("Diffused");
  }
}

//guvi geeks
function guvi_geeks() {
  let admin = 9,
    fname = 10.5;
  fname = "Guvi";
  lname = "geek";
  admin = fname + " " + lname;
  alert(admin);
}

//hello guvi geeks
function hello_guvi_geeks() {
  let fname = 10.5;
  fname = "Guvi";
  lname = " geek";
  let name = fname + lname;
  alert(`hello ${name}`);
}

//success in console
function success_in_console() {
  let a = prompt("Enter a number?");
  a = +a; // string data is converted into number data type0
  //Don't modify any code below this
  if (a) {
    console.log("OMG it works for any number inc 0");
  } else {
    console.log("Success");
  }
}

//sum of two numbers
function sum_of_two_numbers() {
  let a = prompt("First number?");
  let b = prompt("Second number?");
  alert(+a + +b);
}

//welcome the employee
function welcome_employee() {
  let login = "Employee";
  let message =
    login == "Employee"
      ? "Welcome"
      : login == "Director"
      ? "Greetings"
      : login == ""
      ? "No login"
      : "";
  console.log(message);
}

//welcome the boss
function wellcome_the_boss() {
  // You cant change the value of the msg
  let message;
  if (null || 2 || undefined) {
    message = "welcome boss"; //let variable should not be redeclared
  } else {
    message = "Go away";
  }
  console.log(message);
}

//welcome the boss 2
function wellcome_the_boss2() {
  let message;
  let lock = 0; // cahnge the value of lock to 0
  //Dont change any code below this
  if (null || lock || undefined) {
    message = "Go away";
  } else {
    message = "welcome";
  }
  console.log(message);
}

//welcome the boss 3
function wellcome_the_boss3() {
  let message;
  let lock = 0; // cahnge the value of lock to 0
  //Dont change any code below this
  if ((lock && " ") || undefined) {
    message = "Go away";
  } else {
    message = "welcome";
  }
  console.log(message);
}

function code_to_print() {
  //You can change only 2 characters
  let i = 3;
  while (i) {
    console.log(i--);
  }
}

function one_to_ten() {
  let num = 1;
  array = [];
  array.push(num);
  num += 1;
  array.push(num);
  num += 1;
  array.push(num);
  num += 1;
  array.push(num);
  console.log(...array);
  array = [];
  num += 1;
  array.push(num);
  num += 1;
  array.push(num);
  num += 1;
  array.push(num);
  console.log(...array);
  array = [];
  num += 1;
  array.push(num);
  num += 1;
  array.push(num);
  console.log(...array);
  num += 1;
  console.log(num);
}

function even_numbers() {
  //You are allowed to modify only one character
  for (let num = 2; num <= 20; num += 2) {
    console.log(num);
  }
}

function all_gifts() {
  let gifts = ["teddy bear", "drone", "doll"];
  for (let i = 0; i < 3; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }
}

function disarm_the_bomb() {
  let countdown = 100;
  while (countdown >= 0) {
    countdown--;
    if (countdown == 0) {
      console.log("bomb triggered");
    }
  }
}

function message_printed() {
  var lemein = "0";
  var lemeout = 0;
  var msg = "";
  if (lemein) {
    msg += "hi";
  }
  if (lemeout) {
    msg += "Hello";
  }
  console.log(msg);
}
invoke_alert();
console.log("\n");
correct_score();
console.log("\n");
diffused_code();
console.log("\n");
guvi_geeks();
console.log("\n");
hello_guvi_geeks();
console.log("\n");
success_in_console();
console.log("\n");
sum_of_two_numbers();
console.log("\n");
welcome_employee();
console.log("\n");
wellcome_the_boss();
console.log("\n");
wellcome_the_boss2();
console.log("\n");
wellcome_the_boss3();
console.log("\n");
code_to_print();
console.log("\n");
one_to_ten();
console.log("\n");
even_numbers();
console.log("\n");
all_gifts();
console.log("\n");
disarm_the_bomb();
console.log("\n");
message_printed();
