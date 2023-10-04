let students = ["Anjeli", "Deylafaith", "Mon", "Agustina"];
let number = [1, 12, 123, 1234];
let anjeli = ["Moonik", 21, "LILI", true];

console.log(students);
console.log(number);
console.log(anjeli);
console.log(number[2]);
students[2] = "Monica";
console.log(students);
console.log(students.length);
console.log(students[students.length-1]);

// //cara lama for untuk looping array
// for (let i=0; i<students.length; i++) {
//     console.log(students[1]);
// }

// // Array method

// // toString()
// console.log(anjeli.toString());

// // toJoin -> sama dengan toString, tapi bedanya di penghubung
// console.log(anjeli.join(" "));

// // pop
// anjeli.pop();
// console.log(anjeli);

// // push
// anjeli.push("Hallo");
// console.log(anjeli);

// // shift
// anjeli.shift();
// console.log(anjeli);

// // unshift
// anjeli.unshift("Hi!");
// console.log(anjeli);

// // obhect
// let nama = {
//     firstName: "Anjeli",
//     lastName: "Moonik",
//     age: 20,
//     isMarried: false,
//     grade: [88, 99, 89],
//     address: {
//         city: "Manado",
//         province: "Sulut",
//         postalCode: "674768",
//     },
//     sayGreetings: function () {
//         console.log("Hello my name is" + this.firstName)
//     },
// };

// // Dot notation
// console.log(nama.firstName);
// console.log(nama.grade);
// console.log(nama.address.postalCode);
// console.log(nama.sayGreetings());

// // Bracket notation -> bukan index, tapi menggunakan properti
// console.log(nama["firstName"]);
// console.log([grade[1]]);
// console.log(nama[sayGreetings]());

// // Array Object
// let students = [
//     {
//         id: 1,
//         name: "Anjeli",
//     },
//     {
//         id: 2,
//         name: "Saskia",
//     },
//     {
//         id: 3,
//         name: "Moonik",
//     },
// ]

// // cara baru untuk looping array (harus ada value, index dan array optional)
// students.forEach(function(item) {
//     console.log(item);
//     console.log(item.id);
// });

// let output = students.nam(function(item) {
//     return item.name;
// });
// console.log(output);

// let out = students.filter(function(item) {
//     return item.name === "Anjeli";
// });
// console.log(out);

// let put = students.find(function(item) {
//     return item.id === 1;
// });
// console.log(put);