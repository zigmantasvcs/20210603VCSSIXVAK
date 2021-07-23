// cia rasyime funkcijas

// 
function sum1(x, y){
    return x + y;
}

function sum2(x, y){
   let sum = x + y;
   return sum;
}

function sum3(x, y){
    let sum = 0;
    sum += x;
    sum += y;
    return sum;
 }

 function showSum(x, y, element){
    let sum = sum1(x, y);

    element.innerHTML = sum; // idedu rezultata i elementa
 }