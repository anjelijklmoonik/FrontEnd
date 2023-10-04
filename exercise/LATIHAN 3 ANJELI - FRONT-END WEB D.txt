// LATIHAN 3 ANJELI - FRONT-END WEB DEVELOPMENT

// ARRAY EXERCISE
let people = ["Greg", "Mary", "Devon", "James"];

// NO 1 Using for-loop to show all in people
console.log("Latihan no 1");

for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
}

// NO 2 using forEach() to show all in people
console.log("Latihan no 2");

people.forEach(function(i) {
    console.log(i);
});

// NO 3 remove "Greg"
console.log("Latihan no 3");

people.shift("Greg");
console.log(people);


// NO 4 remove "James"
console.log("Latihan no 4");

people.pop();
console.log(people);

// NO 5 add "Matt" to the front
console.log("Latihan no 5");

people.unshift("Matt");
console.log(people);

// NO 6 add my name to the end
console.log("Latihan no 6");

people.push("Anjeli");
console.log(people);

// NO 7 using for-loop till "Marry"
console.log("Latihan no 7");

for (let i = 0; i < people.length; i++) {
    if (people[i] === "Mary") {
        console.log("Mary");
        break;
    }
    console.log(people[i]);
}

// NO 8 make a copy using SLICE without "Mary" & "Matt"
console.log("Latihan no 8");

let p2 = people.slice(2);
console.log(p2);

// NO 9 redefine the array using SPLICE & remove "Devon" & add "Elizabeth" and "Artie"
console.log("Latihan no 9");

people.splice(2,1, "Elizabeth", "Artie");
console.log(people);

// NO 10 create new variable "withBob" & set it equal to the people array concatenated with the string of "Bob"
console.log("Latihan no 10");

let withBob = people.concat("Bob");
console.log(withBob);

// OBJECT EXERCISES
console.log("OBJECT EXERCISE");

let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};

// NO 1 add the language "Go" to the end of the languages array

programming.languages.push("Go");

// NO 2 using bracket notation & change the difficulty to the value of 7

programming["difficulty"] = 7;

// NO 3 using delete keyword & remove the "jokes" key

delete programming.jokes;

// NO 4 using dot notation & add a new key "isFun" & value of "true"

programming.isFun=true

// NO 5 using map() & update each element to be "0 - JavaScript, 1 - Python, ...." where 0 represents the index of the array & console.log the output

programming.languages = programming.languages.map((languages, index) => `${index} - ${languages}`);
console.log(programming);