// let year = prompt("Nhập năm:");
// let month = prompt("Nhập tháng:");

// if (year > 0 && month > 0 && month <=12) {
//
//     switch (month) {
//         case 2:
//             if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//                 days = 29;
//             } else {
//                 days = 28;
//             }
//             break;
//         case 4:
//         case 6:
//         case 9:
//         case 11:
//             days = 30;
//             break;
//         case 1:
//         case 3:
//         case 5:
//         case 7:
//         case 8:
//         case 10:
//         case 12:
//             days = 31;
//             break;
//         default:
//             alert("Tháng không hợp lệ.");
//     }

//     if (days !== null) {
//         alert(`Tháng ${month} năm ${year} có ${days} ngày.`);
//     }
// } else {
//     alert("Bạn nhập sai thông tin.");
// }


let year = prompt("Nhập năm:");
let month = prompt("Nhập tháng:");

if (year > 0 && month >0 && month <=12) {
        if (month === 2) {
            if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
                days = 29; 
            } else {
                days = 28; 
            }
        } else if (month === 4 || month === 6 || month === 9 || month === 11) {
            days = 30; 
        } else {
            days = 31; 
        }
        alert(`Tháng ${month} năm ${year} có ${days} ngày.`);
} else {
    alert("Bạn nhập sai thông tin.");
}
