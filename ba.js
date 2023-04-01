// print Counting 1 to N

function si(){
    var p = prompt("Prinicple Amount");
    var r= prompt("Rate of Interset");
    var t= prompt("Time");
    simpleI= (p*r*t)/100;
    console.log(simpleI)
}
// si();
function printCounting(){
    // var n = Number(prompt("Give a Random number"))
    n = 10;
    for(let i=1; i<=n; i++){
        console.log(i);
    }
}
// printCounting();

// Add N NUMBERS FROM USER?=
function addNumbers(n){
    let sum =0;
    for(let i=1; i<=n; i++ ){
        sum =sum+i;
    }
    return sum;
}
// let n =100;
// console.log(addNumbers(prompt("Give number for print")));

function oddPrintsNumberfromNCounting(k){
    odd= 0;
    for(let i=1; i<k; i+2){
        console.log(odd =odd+i);
    }
}

console.log(oddPrintsNumberfromNCounting(prompt("give Number")));