1.
var user = "Delta mike"
console.log(user)

2
var flower = 'Chamekli ka Fool';
var tree = 'Bhoot wala peepal ka ped';
console.log('Bhai' +" "+ flower + 'milta hai' + tree +"niche")

3
var num1 = 3;
var num2 = 4;
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 / num2);
console.log(num1 * num2);

4
var nam = prompt("Please Enter Your Name");
var age = prompt("Please Enter your age");
console.log('Hii'+" "+ nam +" "+ 'I hope your Doing well');
console.log(nam +" "+ "Your age is"+" "+ age);

5
var length = prompt("Enter length of Rectangle");
var width = prompt("Enter width of Rectangle")
var p= 2*(Number(length) + Number(width));
console.log("Hey Your perimeter of Rectangel is" +" "+ p);

6
var no1 = prompt("Enter your password , i'll match same or not");
var no2 = prompt("Enter again your password");
if(no1 === no2){
    console.log("Hey Your Password ,You can go Forward");
}
else{
    console.log("Abe Sahi se likh ");
}

7
var number1 = prompt("Enter you number ,ill check it , is it postive or negative");

var yno = Math.sign(Number(number1));

if(yno ===1){
    console.log("Your this " + number1 +" "+ "Number is Positive")
}
else if(yno === -1){
    console.log("Your this " + number1 +" "+ "Number is Negative")

}
else if(yno === 0){
    console.log("Your this " + number1 +" "+ " Number is Positive Zero")
}
else if(yno === -0){
    console.log("Your this " + number1 +" "+ "Numbernis Negative Zero")
}
else{
    console.log("Tera ye " +"--"+number1+ "--" + "  NUmber hi nahi hai" )
}


8
var checkAge= prompt("Enter you Age");
if(checkAge <= 18){
    console.log("your under 18 ,You are not allowed ,,nikal jaa");
}
else if(checkAge >18){
    console.log("OK 18 se bade ho, you are allowed")
}

11
var prin = prompt("Batoo mai aapko kitne baar print karke du");
 
for (let index = 0; index < Number(prin) ; index++) {
    console.log("hii you ,!! ")
}


13
var n =prompt("enter a number")
for (let i=1 ; i< n ; i++){
    console.log(i);
}


let i =0;
while(i< 10){
  
    console.log("ok"+ i);
    i++;
}