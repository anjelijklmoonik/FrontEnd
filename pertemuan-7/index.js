// STRING LITERAL
// -----------------------

// let fullName = "Anjeli Moonik";
// let age = "20";
// let address = "Motoling";

// console.log("Nama saya", fullName,", umur saya", age, "tahun,", "saya tinggal di", address);

// cara lama
// let kalimat = "Halo nama saya " + fullName + ", umur saya " + age + "tahun, " + "saya tinggal di " + address;
// console.log(kalimat);

// cara baru
// let k = `Halo nama saya ${fullName}, umur saya ${age} tahun, saya tinggal di ${address}`;
// console.log(k);



// ERROR FUNCTION
// ------------------------

// function says(name) {
//     return `HI ${name}`;
// };
// console.log(says("Anjeli"));

// //
// const say = (name) => {
//     return `Hello ${name}`
// };
// console.log(say("Saskia"));

// //IMPLICIT
// const sayy = (name) => `Hellow ${name}`;
// console.log(sayy(Anjeli));

// IVE
// let output = (() => `Hello`)();

// CALLBACK
// let num1 = [1,2,3,4,5];
// let num2 = num1.map((item) => item);


// DEFAULT PARAMETER
// ------------------------

// const sayGreetings = (fullName, age) => {
//     console.log(`Hello ${fullName}`);
// };
// sayGreetings("Saskia");

// const sayGreetings2 = (fullName, age) => {
//     if(fullName === undefined){
//         fullName = "Moonik";
//     };
//     console.log(`Hello ${fullName}`);
// };
// sayGreetings2();

// // cara lebih mudah
// const sayG = (fullName = "Anjeli", age = 20) => {
//     console.log(`Hello ${fullName}`);
// };
// sayG();