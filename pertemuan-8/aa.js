/* Rest Parameter & Spread Operator
tanpe menggunakan rest parameter dan
menggunakan rest parameter

rest parameter harus berada diakhir
*/

// tanpa menggunakan rest parameter
// const penjumlahanArray =(a, b,c, d) => {
//     let array = [a,b,c,d];
//     let total =0;
//     array.forEach((item) => {
//         total += item;
//     });
//     console.log(total);
// };

// penjumlahanArray(1,2,3,4);

// menggunakan rest parameter
// casenya -> memudahkan untuk penambahan data tnapa mengubah fungsi
// const penjumlahanArray =(...params) => {
//     let total =0;
//     params.forEach((item) => {
//         total += item;
//     });
//     console.log(total);
// };

// penjumlahanArray(1,2,3,4,9,8,7,6,5);

// untuk menyimpan data yang lain di variabel dan sisanya pada params
// const penjumlahanArray =(a,b,c,...params) => {
//     let total =0;
//     params.forEach((item) => {
//         total += item;
//     });
//     console.log(total);
// };

// penjumlahanArray(1,2,3,4,9,8,7,6,5);


// Spread Operator
// let array1 = [1,2,3,4,5,8];
// console.log(...array1);
// data dari array berubah menjadi string / melepaskan data dari array / untuk memecah array menjadi parameter
// kegunaan:
// duplikasi array
// let array2 = [...array1];
// console.log(array2);
// yang diduplikasi bukan nilai tetapi address
// array1.push(9);
// console.log('Array 1 = ${array1}');
// console.log('Array 2 = ${array2}');


// menggabungkan Array
// let a1 = [1, 2];
// let a2 = [3];
// let a3 = [5, 6];

// let a5 = a1.concat(4, a2, a3);
// console.log(a5);

// let a6 [...a1, 4, ...a2, ...a3];
// console.log(a6);


// pada objek







// Destructuring