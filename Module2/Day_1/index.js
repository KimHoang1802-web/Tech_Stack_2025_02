// Khai báo biến
let name = 'AAA', age = 20, isGood = true;
console.log(age + 10); // 30
console.log(age % 3); // 2
console.log(name + ' BBB'); // 'AAA BBB'
console.log(!isGood); // false
console.log(name == 'aaa' && age >= 20); // false
console.log(name != 'aaa' && isGood); // true
console.log(!(age < 10) && !isGood); // false

let a = 10, b = 20, c = 30, d = '40';
console.log(a + b + c); // 60
console.log(a - b / c); // 9.333
console.log(a - (b * c)); // -590
console.log(d - (a * b) - c); // NaN
console.log(a + b + c + d); // '6040'
console.log(d + a + b + c); // '40102030'
console.log(d + a - b + c); // NaN
console.log(a - b + d - c); // NaN
console.log(d - c + a - b); // NaN
console.log(a * b + d * c); // 1400

let x = true, y = false, z = 10;
console.log(x && y); // false
console.log(x && !y); // true
console.log(x && z == 10); // true
console.log((x && z == 10)); // true
console.log(!(x && z == 10)); // false
console.log(!(x && z == 50)); // true
console.log(x && y && z == 10); // false
console.log(x && !y && z == 10); // true
console.log(x || y || z == 10); // true
console.log((x && y) || z != 10); // false
console.log(!(x && z == 10) || y); // false

let a1 = 1, b1 = '2', c1 = 3, d1 = '4';
console.log(b1 + d1); 
console.log(a1 + b1 + c1 + d1); 
console.log(a1 - b1 + c1 - d1); 
console.log(a1 - b1 - c1 + d1); 
console.log((b1 + d1) - (a1 + c1)); 
console.log((a1 + b1) - (c1 + d1)); 
console.log(a1 * c1 + b1 * d1); 
console.log(-b1 + d1); 
console.log(-b1 - d1); 
console.log(-(b1 + d1)); 

let age1 = 25, isMarried = false, isRich = true;
console.log(age1 > 25 && isMarried && isRich); // false
console.log((age1 <= 25 || isMarried) && isRich); // true
console.log((age1 > 10 || isRich) && isMarried); // false
console.log(!(age1 >= 15 && isMarried) && isRich); // true
console.log(!(age1 <= 20) || !(isMarried && isRich)); // true
console.log((age1 > 8 && !isMarried) || isRich); // true
console.log(!(age1 < 8 && !isMarried) || isRich); // true
console.log((age1 == 8 && isMarried) || !isRich); // false

let a2 = 11, b2 = '22', c2 = 33;
console.log(a2 + b2); // '1122'
console.log(a2 - c2); // -22
console.log(a2 + b2 + c2); // '112233'
console.log(a2 + c2 + b2); // '4433'
console.log((a2 + b2) % 3); // NaN
console.log(a2 * b2 > 50); // true
console.log(a2 ** b2 > 100); // true
console.log(a2 - (b2++) == 5); // false
console.log(a2 - (++b2) == 5); // false

let isTall = true, isMuscle = false, isHandsome = true;
console.log(isTall && isMuscle); // false
console.log(!isHandsome); // false
console.log(!isTall || !isMuscle); // true
console.log(isTall || !(isMuscle && isHandsome)); // true
console.log(isMuscle && !(isTall || isHandsome)); // false