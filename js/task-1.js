console.log("Task #1 - Order Droids");

function makeTransaction(quantity, pricePerDroid) {
    const totalPrice = quantity * pricePerDroid;
    console.log(`"You ordered ${quantity} droids worth ${totalPrice} credits!"`)    
}

makeTransaction(5, 3000);
makeTransaction(3, 1000);
makeTransaction(10, 500);

console.log("")