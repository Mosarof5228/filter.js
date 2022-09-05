//filter() almost map er motoi.
//ati array  er  sathe bose tar protite element k nibe
//and parent thesis er bitore kicu kaj kore arekti array return kore.
//nicher filter() parent thesis er bitore akti arrow function nia bole disi
//j number  golu 15 er theke boro segoke return korbe.

const numbers = [20, 70, 50, 90, 80, 53, 83, 30, 60, 100, 12, 13, 15, 18];
const bigNumbers = numbers.filter(x => x > 15);
const tinyNumbers = numbers.filter(x => x < 20);
const eventNumber = numbers.filter(num => num % 2 == 0);
const products = [
    {id:1, productName:'laptop',price:12000},
    {id:2, productName:'Mobaile',price:120},
    {id:3, productName:'computer',price:6300},
    {id:4, productName:'iphone',price:25000},
    {id:5, productName:'ipad',price:53000}
]
const expensive = products.filter(product => product.price < 5000);
console.log(expensive);
console.log(bigNumbers);
console.log(tinyNumbers)
console.log(eventNumber);


