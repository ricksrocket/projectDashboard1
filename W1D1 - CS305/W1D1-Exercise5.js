/*
Cost of House                   Down Payment
$0 to less than 50K             5% of the cost
$50K to less than 100K          $1000 + 10% of (cost - $50K)
$100K to less than 200K         $2000 + 15% of (cost - $100K)
$200K and above                 $5000 + 10% of (cost - $200K)
*/

const prompt=require("prompt-sync")();
let costOfHouse=prompt("What is the cost of the house?: ");
costOfHouse = +costOfHouse;
let downPmt;
if (costOfHouse>0 && costOfHouse<50000){
    downPmt=costOfHouse*0.05;
}
else if (costOfHouse>=50000 && costOfHouse<100000){
    downPmt = 1000 + 0.10*(costOfHouse -50000);
}
else if (costOfHouse>=100000 && costOfHouse<200000){
    downPmt = 2000 + 0.15*(costOfHouse -100000);
}
else if (costOfHouse>=200000){
    downPmt = 5000 + 0.10*(costOfHouse -200000);
}
console.log(`The down payment is  $${downPmt}`);
