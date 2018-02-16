const Orders = [
    { amount: 250 },
    { amount: 400 },
    { amount: 100 },
    { amount: 325 }
];

function totalOrdersForLoop(theOrders) {
    let total = 0;
    for (let i = 0; i < theOrders.length; i++) {
        total += theOrders[i].amount;
    }
    return total;
}

function totalOrdersArrayReduce(theOrders) {
    return theOrders.reduce((total, curr) => total + curr.amount, 0);
}

// let total = totalOrdersForLoop(Orders);
// let total = totalOrdersArrayReduce(Orders);

// console.log(total);

console.log(totalOrdersForLoop(Orders));
console.log(totalOrdersArrayReduce(Orders));
