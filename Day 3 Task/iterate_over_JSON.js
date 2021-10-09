/** @format */

let family = [
  {
    name: "lakshmi vara prasad",
    role: "Full Stack developer",
  },
  {
    name: "manohar",
    role: "working inspector",
  },
  {
    name: "usha",
    role: "SPM",
  },
  {
    name: "savithri",
    role: "Home Engineer",
  },
];

// Iterate through for loop
console.log("For Loop");
for (var i = 0; i < family.length; i++) {
  for (let k in family[i]) {
    console.log(k, ":", family[i][k]);
  }
  console.log(family[i]);
}

// Iterate through for-in loop
console.log("For-in Loop");
for (let i in family) {
  for (let key in family[i]) {
    console.log(key, ":", family[i][key]);
  }
  console.log("\n");
}

// Iterate through forEach loop
console.log("ForEach Loop");
Object.entries(family).forEach((value, index) => {
  Object.keys(family[index]).forEach((v) => {
    console.log(v, ":", family[index][v]);
  });
  console.log("\n");
});

// Iterate through for-of loop
console.log("For-of Loop");
for (var i of family) {
  for (var items of Object.keys(i)) {
    console.log(items, ":", i[items]);
  }
  console.log("\n");
}
