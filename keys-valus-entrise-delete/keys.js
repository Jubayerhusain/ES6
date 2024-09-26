const product = {
    name: 'glass',
    color: 'golden',
    price: 422,
    isCleand: true
}
// console.log(product);
// const keys = Object.keys(product) //keys also show object property //keys === property..
// console.log(keys);

// const value = Object.values(product) //values also show object values //values === value..
// console.log(value);

// const pair = Object.entries(product) //while i will get the property and values then must use the entries keyword it will be show.
// console.log(pair);

// Delete.product.isCleand; //while i i will delete any property then it will use for our program;
// console.log(product);


// optional delete oftion 
const {isCleand, ...shortClass} = product
console.log(shortClass)


