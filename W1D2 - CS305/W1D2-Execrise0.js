/*eslint-disable*/

/*
1. Write a function, that computes the area of a triangle using Heron's formula
    Area= sqrt{ s(s-a)(s-b)(s-c) }
    where s = (a+b+c)/s (s is known as the semi-perimeter)
    where a,b,c are the lengths of the three triangle sides

    write a separate function to compute the semi-perimeter

*/
function computeArea (sideA, sideB, sideC) {
    let s;
    function semiPerimeter (sideA,sideB,sideC) {
        s= (sideA+sideB+sideC)/2;
        return s;
    }
    semiPerimeter (sideA, sideB, sideC);
    area = Math.sqrt(s*(s-sideA)*(s-sideB)*(s-sideC));

return area;

}

console.log((computeArea(3,4,5)));
