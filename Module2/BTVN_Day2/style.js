// Quizz 
// 0. Hãy viết chương trình nhập vào một chuỗi s. Nếu chuỗi s có độ dài >= 8, in ra màn hình console “Chuỗi này ok”. Ngược lại, in ra “Ngắn quá, dài thêm tí nữa”.
let s = prompt("Nhập vào chuỗi s: ");
if(s.length >= 8){
    alert("Chuỗi này ok");
}
else{
    alert("Ngắn quá, dài thêm tí nữa");
}
// 1. Hãy viết chương trình nhập vào một số a. Nếu a >= 18, in ra màn hình console “Đủ 18 thì quẩy tiếp”. Nếu a >= 16, in ra “Đợi thêm ít năm nữa”. Ngược lại, in ra “Còn quá nà trẻ”.
a = prompt("Nhập vào số a: ");
if(a >= 18){
    alert("Đủ 18 thì quẩy tiếp");
}
else if (a >= 16){
    alert("Đợi thêm ít năm nữa");
}
else{
    alert("Còn quá nà trẻ");
}
// Quizz 
// 0. Hãy tính tổng các số từ 1 đến 50.
let tong = 0;
for(let i = 1; i <= 50; i++){
    tong += i;
}
console.log('Tổng các số từ 1 đến 50 là: ', tong);
// Hãy tính tổng các số chẵn từ -10 đến 50.
let tongChan = 0;
for (let i = -10; i < 50; i += 2) { 
    tongChan += i;
}
console.log('Tổng các số chẵn từ -10 đến 50 là: ', tongChan);
// Hãy in ra màn hình console các số chia hết cho 9 trong đoạn [-100; 100]
for(let i = -100; i <=100; i++){
    if(i % 9 == 0){
        console.log("Các số chia hết cho 9 trong đoạn [-100; 100] là: ", i);
    }
}
// Hãy dùng while để in ra dãy số từ 1 đến 200.
let i = 1;
while(i <= 200){
    console.log("Các số từ 1 đến 200 là: ", i);
    i++;
}
// Hãy nhập vào 1 chuỗi s và 1 số l. Hãy thêm vào cuối chuỗi s ký tự ‘a’ cho đến khi độ dài chuỗi s >= l.
let chuoi_s = prompt("Nhập vào chuỗi s: ");
let l = parseInt(prompt("Nhập vào số l: "));
if (chuoi_s.length < l) {
    chuoi_s = chuoi_s.padEnd(l, 'a');
}
console.log("Chuỗi sau khi thêm ký tự 'a':", chuoi_s);
// Nhập vào 2 số 0 <= x < y <= 100. Hãy tăng dần giá trị của x, giảm dần giá trị của y và in ra các giá trị của x và y trong mỗi lần lặp cho đến khi x >= y.
let soX = parseInt(prompt("Nhập vào số x: "));
let soY = parseInt(prompt("Nhập vào số y: "));
if (soX >= 0 && soX < soY && soY <= 100) {
    while (soX < soY) {
        soX++;
        soY--;
        console.log("Giá trị của x và y là: ", soX, soY);
    }
}
// In ra dãy số từ 1 đến 500.
for(let i = 1; i <=50; i++){
    console.log("Dãy số từ 1 đến 500 là: ", i);
}
// In ra các số chia hết cho 2 và 3 từ 1 đến 300.
// Tính tổng các số chẵn trong đoạn [-30, 50].
// Nhập vào số n. Tính giai thừa của số n.
// Nhập vào 3 số a, b, x (a < b). Tìm trong khoảng a, b số nhỏ nhất mà chia hết cho x.
// Nhập vào số n (n >= 2). Hãy tính giá trị biểu thức sau: S = 1/(1.2) + 1/(2.3) + ... + 1/n(n+1)
// Nhập vào số n. Hãy in ra số ước của n.
// Nhập vào số n. Viết chương trình kiểm tra xem n có phải số nguyên tố không.
// Nhập vào chuỗi s (chỉ gồm chữ số) và số l. Hãy thêm vào đầu chuỗi s ký tự ‘0’ cho đến khi độ dài chuỗi s >= l.
// Nhập vào 2 số m, n (m > 0, n > 0). Tìm ước chung lớn nhất, bội chung nhỏ nhất của m, n.
// Trò chơi đoán số: Máy tính tự động tạo ra 1 số correct bất kỳ từ 1 đến 20. Người dùng nhập vào 1 số answer. Nếu answer bằng correct → in ra “Đoán đúng”. Ngược lại → in ra “Đoán sai” và yêu cầu nhập lại answer. Nếu nhập sai answer quá 5 lần → in ra “Bạn đã thua cuộc”.
// Nhập vào số n (2 <= n <= 10). Hãy in ra bảng cửu chương của số n.
// Nhập vào số n (n >= 2). Hãy in ra màn hình hình vuông có độ dài cạnh = n. VD: n = 3
// * * *
// * * *
// * * *
// Nhập vào 2 số m, n (m >= 2, n > =2). Hãy in ra màn hình hình chữ nhật có độ chiều rộng là m và chiều cao là n. VD: m = 4, n = 3
// * * * *
// * * * *
// * * * *
// Nhập vào số n (n >= 3). Hãy in ra màn hình hình tam giác vuông cân có độ dài cạnh góc vuông = n. VD: n = 3
// *
// * *
// * * *
// Nhập vào 2 số w và h là chiều cao và cân nặng của 1 người. Hãy tính chỉ số BMI và đưa ra kết quả: Nếu BMI < 18.5 → in ra “Nhẹ cân” Nếu 18.5 <= BMI < 23 → in ra “Bình thường” Nếu 23 <= BMI < 25 → in ra “Thừa cân” Nếu BMI >= 25 → in ra “Béo phì”
// Tạo 1 biến a có giá trị là 1 số tự nhiên ngẫu nhiên trong [5, 10]. Hãy nhập vào số n cho đến khi giá trị của n bằng a.