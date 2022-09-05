
const products = [
    {id:1, productName:'laptop',price:12000},
    {id:2, productName:'Mobaile',price:120},
    {id:3, productName:'computer',price:6300},
    {id:4, productName:'iphone',price:25000},
    { id: 5, productName: 'ipad', price: 53000 },
    { id: 6, productName: 'mouse', price: 55 },
    { id: 7, productName: 'keybord', price: 105 }
]
//filter() and find() ai doitai  condition onosare kaj kore
//filter() use korle joto condition match korbe sob goluke return korbe
//find() use korle joto condition match korbe sob goluke return korbe na borong first matching  condition take return korbe.
const five = products.find(x => x.price % 5 === 0);
console.log(five);


