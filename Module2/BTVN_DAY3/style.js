// 1. Hãy khai báo 2 mảng. Mỗi mảng đều có 3 phần tử lần lượt là ‘a’, ‘b’, ‘c’. Cho biết kiểu dữ liệu của 2 mảng đó? -Sử dụng toán tử ‘+’ để ‘cộng’ 2 mảng đó và cho biết kết quả? -Sử dụng toán tử ‘==’ để so sánh 2 mảng đó và cho biết kết quả?
arr1 = ['a', 'b', 'c'];
arr2 = ['a', 'b', 'c'];
// Kiểu dữ liệu của 2 mảng đó
console.log('Kiểu dữ liệu của mảng arr1: ',typeof arr1);
console.log('Kiểu dữ liệu của mảng arr2: ',typeof arr2);
// Sử dụng toán tử ‘+’ để ‘cộng’ 2 mảng đó và cho biết kết quả
const arr3 = arr1 + arr2;
console.log('Kết quả sau khi cộng 2 mảng: ', arr3);
// Sử dụng toán tử ‘==’ để so sánh 2 mảng đó và cho biết kết quả
console.log('Kết quả so sánh 2 mảng: ', arr1 == arr2);
// =============================//================================//


// 2. Khai báo 1 mảng gồm 4 số bất kỳ khác nhau. -In ra phần tử có chỉ số 0 và 3 trong mảng. -Thực hiện phép cộng giữa phần tử có chỉ số 1 và 2. -Thực hiện hoán đổi giá trị của phần tử có chỉ số 1 và 3.
// Khai báo 1 mảng gồm 4 số bất kỳ khác nhau
arrNumber = [22, 23, 24, 25];
// In ra phần tử có chỉ số 0 và 3 trong mảng
console.log('In ra phần tử có chỉ số 0 trong mảng: ', arrNumber[0]);
console.log('In ra phần tử có chỉ có số 3 trong mảng: ', arrNumber[3]);
// Thực hiện phép cộng giữa phần tử có chỉ số 1 và 2
const sumArrNumber = arrNumber[1] + arrNumber[2];
console.log('Kết quả phép cộng giữa phần tử có chỉ số 1 và 2: ', sumArrNumber);
// Thực hiện hoán đổi giá trị của phần tử có chỉ số 1 và 3
let temp = arrNumber[1];
arrNumber[1] = arrNumber[3];
arrNumber[3] = temp;
console.log('Mảng sau khi hoán đổi giá trị của phần tử có chỉ số 1 và 3: ', arrNumber);
// =============================//================================//


// 3. Khai báo 1 mảng gồm các số bất kỳ. -Hãy in ra các số chẵn trong mảng đó. -Hãy tính tổng các phần tử trong mảng. -Hãy tìm phần tử nhỏ nhất trong mảng.
// Khai báo 1 mảng gồm các số bất kỳ
let arrNumber2 = [22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 32, 33, 33, 34, 35, 1];
for(let i = 0; i < arrNumber2.length; i++){
    // In ra các số chẵn trong mảng
    if(arrNumber2[i] % 2 == 0){
        console.log('Các số chẵn trong mảng: ', arrNumber2[i]);
    }
} 
// Tính tổng các phần tử trong mảng
let sumArrNumber2 = 0;
for(let i = 0; i < arrNumber2.length; i++){
    sumArrNumber2 += arrNumber2[i];
}
console.log('Tổng các phần tử trong mảng: ', sumArrNumber2);
// Tìm phần tử nhỏ nhất trong mảng
let min = arrNumber2[0];
for(let i = 1; i < arrNumber2.length; i++){
    if(arrNumber2[i] < min){
        min = arrNumber2[i];
    }
}
console.log('Phần tử nhỏ nhất trong mảng: ', min);
// =============================//================================//


// 4. Khai báo 1 mảng rỗng. Nhập vào số n (n > 0). Hãy điền n số có giá trị ngẫu nhiên vào trong mảng đó.
let randomArr = [];
let n = 5
if (n > 0) {
    for (let i = 0; i < n; i++) {
        // Tạo số ngẫu nhiên từ 1 đến 100 (Math.random() * (max - min) + min)
        let randomNumber = (Math.random() * 100) + 1;
        randomArr.push(randomNumber);
    }

    console.log("Mảng các số ngẫu nhiên:", randomArr);
} else {
    console.log("Vui lòng nhập số n lớn hơn 0.");
}
// =============================//================================//


// 5. Khai báo 1 mảng gồm 2 phần tử. Nhập vào số n (n > 2). Hãy thêm vào đầu mảng phần tử có giá trị ‘0’ cho đấu khi độ dài của mảng bằng n.
// Khai báo một mảng gồm 2 phần tử
let arr = [5, 10]; 
// Nhập số n (n > 2)
let n1 = 3
// Kiểm tra nếu n > 2
if (n1 > 2) {
    while (arr.length < n1) {
        arr.unshift(0); 
    }
    console.log("Mảng sau khi thêm phần tử 0:", arr);
} else {
    console.log("Vui lòng nhập số n lớn hơn 2.");
}
// =============================//================================//


// 6. Khai báo 1 mảng bất kỳ nhiều hơn 1 phần tử. Hãy thực hiện xóa phần tử cuối cùng trong mảng đến khi độ dài mảng bằng 1.
// Khai báo 1 mảng bất kỳ nhiều hơn 1 phần tử
// let arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// while (arr4.length > 1) {
//     arr4.pop();
// }
// console.log("Mảng sau khi xóa phần tử cuối cùng:", arr4);
// =============================//================================//


// 7. Nhập vào 1 dãy số s và 1 số n Mỗi số cách nhau bởi dấu ‘,’. -In ra dãy số mới gồm các phần tử có giá trị là bình phương của các số trong dãy s. -Tìm tất cả số trong dãy s có giá trị lớn hơn hoặc bằng n. -Tìm 1 số đầu tiên trong dãy s có giá trị bằng n.

// Thực hành
// 1. Khai báo 1 mảng gồm các số bất kỳ. 
// -Tính tích của các phần tử trong mảng đó.
// -Tìm số nhỏ nhất mà chia hết cho 2 trong mảng.
// -Tìm số lớn nhất mà chia hết cho 3 trong mảng.
// -Tính giá trị trung bình của mảng.
// -Lọc ra các số nguyên tố trong mảng.
// -Kiểm tra xem trong mảng có số nhỏ hơn 10 hay không.
// -Kiểm tra xem tất cả phần tử trong mảng có lớn hơn 20 không.
// -Nhập vào số n cho đến khi n là 1 số trong mảng s.
// -Sử dụng thuật toán Bubble Sort để sắp xếp phần tử theo thứ tự tăng dần. (https://www.geeksforgeeks.org/bubble-sort/)
// 2. Khai báo 1 mảng s gồm các chuỗi bất kỳ. Nhập vào 1 chuỗi text.
// -Tìm 1 chuỗi đầu tiên có độ dài nhỏ nhất trong mảng.
// -Tìm những chuỗi trong mảng có chứa giá trị text.
// -Tạo mảng mới newS gồm các phần tử có giá trị là 3 ký tự đầu tiên của từng phần tử trong s.
// -Tạo ra 1 chuỗi là sự kết hợp của các phần tử trong s. Mỗi phần tử cách nhau bởi dấu ‘-’.
// 3. Nhập vào 2 dãy số d1, d2. Mỗi số trong mỗi dãy cách nhau bởi dấu ‘,’.
// -Kiểm tra xem tất cả các giá trị số trong d1 có nằm trong d2 không.
// -Kiểm tra xem có phần tử nào trong d2 chia hết cho tổng của d1 không.
// -Tạo mảng mới gồm các số có giá trị là các số chia hết cho 2 lần lượt trong d2 và d1.
// -Giả sử d1, d2 là các dãy số xếp theo thứ tự tăng dần. Hãy tạo ra 1 dãy số theo thứ tự tăng dần bao gồm các số của d1 và d2 (Sử dụng core của thuật toán Merge Sort).(https://www.geeksforgeeks.org/merge-sort/?ref=lbp)
// 4. Cho mảng đa chiều biểu thị mức độ tăng trưởng của 1 công ty qua các quý và năm tương ứng.
// Dữ liệu của năm: theo hàng.
// Dữ liệu của quý: theo cột.
// let growth = [
//     [5,8,9,16],
//     [2,7,1,9],
//     [5,6,8,12],
//     [10,2,1,8],
//     [20,4,9,1]
// ]
// -Tạo mảng mới gồm các phần tử có giá trị là trung bình tăng trưởng của từng năm (Tính trung bình theo hàng).
// -Tìm giá trị tăng trưởng trung bình theo năm lớn nhất.
// -Tìm giá trị tăng trưởng theo quý lớn nhất.
// -Tính giá trị tăng trưởng trung bình theo quý của các năm (Tính trung bình theo cột).
// 5. Tạo ra 1 mảng gồm các số bất kỳ. Hãy tính tổng của các số lẻ có trong mảng.