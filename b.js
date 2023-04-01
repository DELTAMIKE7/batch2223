var salary = Number(prompt("Kitni salary hai be ter"));

if(salary>50000){
    abc = salary * 10/100;
    finalbata= salary - abc;
    console.log("aapki tax value "+ abc +"  itni hai "+ "aur  aapki final payment"+  finalbata);
}
else if(salary>30000 && salary<40000){
    abd = salary * 5/100;
    panchper = salary - abd;
    console.log("aapki tax value"+ abd + " hai "+ "aur  aapki final payment  "+  panchper);
}
else {
   document.write("ok")
}
