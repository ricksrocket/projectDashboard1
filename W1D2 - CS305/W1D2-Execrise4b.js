function sumDigits (num) {
   let str=num.toString();
   let prod=1;
   //str=num.toString;
   for (let i=0; i<str.length; i++){
      let Di= Number(str.charAt(i));
      prod = prod * Di;
   }
   return prod
}
console.log(sumDigits(1234));
