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

let total = totalOrdersForLoop(Orders);

console.log(total);
