const myNums = [1, 2, 3]
//this is also callback func
const myTotal = myNums.reduce(function (acc, currVal) { //currVal is the values in the array
   // console.log((`acc: ${acc} and currval: ${currVal}`));
    
    return acc + currVal
}, 0) //this 0 is basically strating point of accumulator, kis value se accumulator start hoga
//0 bhi de skte kuch aur v de skte, ye bas depict krta hai ki initial value kya hoga accumulator ka

console.log(myTotal);

//using arrow function

const myTotal1 = myNums.reduce( (acc, curr) => (acc + curr), 0)
console.log(myTotal1);

const shoppingCart =[
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "mobile dev",
        price: 5999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "data science course",
        price: 12999
    }
]

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0)
console.log(priceToPay);


// ye saare array methods sbkuch loops se bhi hoskta h, bas ye better tareeka h krne ka
