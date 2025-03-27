const a = [1, 2, 3, 4, 5];

// const x = new Array(1,2,4,55,2);
// for(let i =0; i<a.length; i ++){
//     console.log(a[i]);
// }

// Bài 1: Thêm 1 phần tử vào đầu mảng 
const newElement1 = 0; 
const b = new Array(a.length + 1);
b[0] = newElement1;
for (let i = 0; i < a.length; i++) {
    b[i + 1] = a[i];
}
console.log(b); 
// Bài 2: Thêm 1 phần tử vào cuối mảng
const newElement2 = 6; // Phần tử cần thêm
const b = new Array(a.length + 1);
for (let i = 0; i < a.length; i++) {
    b[i] = a[i];
}
b[a.length] = newElement2;
console.log(b); 
// Bài 3: Xóa 1 phần tử ở đầu mảng
const b = new Array(a.length - 1);
for (let i = 1; i < a.length; i++) {
    b[i - 1] = a[i];
}
console.log(b); 
// Bài 4: Xóa 1 phần tử ở cuối mảng
const b = new Array(a.length - 1);
for (let i = 0; i < a.length - 1; i++) {
    b[i] = a[i];
}
console.log(b); 