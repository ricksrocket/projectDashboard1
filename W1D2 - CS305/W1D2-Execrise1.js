/*
1. Write a function, computeSalesCommission that takes a Boolean argument for salaried and 
number argument for salesAmount. It should return the sales commission based on following rules.
   First make a defining table for the function.
        • If the salesman is salaried then
        • These is no commission for sales below $300
        • 1% for sales between $300 and $500 (inclusive, and commission on the entire amount)
        • 2% for sales above $500 (only for the portion above 500 plus the 1% commission on
          the first 500)

          • If the salesman is NOT salaried then
          • no commission for sales below $300
          • 2% for sales between $300 and $500 (inclusive, and commission on the entire amount)
          • 3% for sales above $500 (only for the portion above 500 plus the 2% commission on 
            the first 500)

console.log("expect 0: ", computeSalesCommission(true, 200)); 
console.log("expect 0: ", computeSalesCommission(false, 200)); 
console.log("expect 3: ", computeSalesCommission(true, 300)); 
console.log("expect 6: ", computeSalesCommission(false, 300)); 
console.log("expect 65: ", computeSalesCommission(true, 3500)); 
console.log("expect 100: ", computeSalesCommission(false, 3500));

*/
const prompt=require("prompt-sync")();
function computeSalesCommission (salaried, sales) {
    let commission=0;
    salaried=prompt("Is the salesman salaried?: true/false  ");
    sales=prompt("Enter the sales amount in $  ");
    sales=+sales;
    console.log(salaried);
    //console.log(salaried, sales);
    if (salaried === "true"){
        console.log("Yes");
       if (sales<300){
        commission = 0;
       }
       else if(sales >= 300 && sales <= 500){
        commission = 0.01*sales;
       }
       else if (sales>500){
        commission = 5+ 0.02*(sales-500)
       }
  
    }
    else if (salaried === "false"){
        if (sales>=300 && sales<500){
            commission = 0.02*sales;
        }
        else if (sales >=500){
          commission = 10+0.03*(sales-500);
        }
    }
return commission;
}

console.log(computeSalesCommission());
