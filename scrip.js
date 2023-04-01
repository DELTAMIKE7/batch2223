// // gsap likhne ka tarekka

// gsap.to('.alpha',{scrollTrigger:{
//     trigger:".page4",
//     start:"top 20%",
//     // markers:true,
//     // scrub:true
// },
// x:885,
// duration:3,
// rotate: "45deg"
// })


// gsap.to('.bravo',{scrollTrigger:{
//     trigger:".page4",
//     start:"top 20%",
//     // markers:true,
//     // scrub:true
// },
// x:-885,
// duration:3,
// rotate: "-45deg"
// })
// // ---------------ye upar part------


// // ---------------ye niche part------
// // ye Gsap ka timeline use karne ka tarekaa
// var nareshtime =gsap.timeline({scrollTrigger:{
//     trigger:".page4",
//     start:"top 20%",
//     markers:true,

// }})
// .to('.alpha',{
// x:885,
// duration:3,
// rotate: "45deg"
// })
// .to('.alpha',{
//     backgroundColor:"red",
//     duration:1
// })


// var time =gsap.timeline({scrollTrigger:{
//     trigger:".page4",
//     start:"top 20%",
//     markers:true,

// }})
// .to('.bravo',{
// x:-885,
// duration:3,
// rotate: "-45deg"
// })
// .to('.bravo',{
//     backgroundColor:"blue",
//     duration:1
// })


















// gsap.to('.mimg',{scrollTrigger:{
//     trigger:".page2",
//     // scroller:"#main",
//     start:"top 40%",
//     markers:true
// },
// y:500,
// duration:5
// })

var page4 = gsap.timeline({scrollTrigger:{
    trigger:".page4",
    start:"top 40%",
    end:"top 5%",
    // markers:true,
    scrub:true
}})
.to('.alpha',{
    x:885,
    duration:5,
    backgroundColor:'white'
})
.to('.alpha',{
    rotate:"30deg",
    scale:2
})
.to('.alpha',{
    x:"0",
    scale:1
})
.to('.bravo',{
    x:0,
    rotate:"45deg"
})
.to('.bravo',{
    borderRadius:'50%'
})



// var page2 = gsap.timeline({scrollTrigger:{
//     trigger:".page2",
//     start:"top 30%",
//     markers:true
// }})
// .to('.mimg',{
//     y:100,
//     duration:3,
//     backgroundColor:'green'
// })




function discussWalaButton(){
    let dBtn = document.querySelector('.dproject');
let wBg = document.querySelector('.whitebg');
let dkapara = document.querySelector('.dproject>p');


dBtn.addEventListener('mouseenter', function(){
    wBg.style.opacity = "1";
    wBg.style.transform = "scale(25)";
    dkapara.style.color="black"
});
dBtn.addEventListener('mouseleave', function(){
    wBg.style.opacity = "0";
    wBg.style.transform = "scale(1)";
    dkapara.style.color="white"
});
}
discussWalaButton();

function socialWaleButtons(){
    let socialBtn =document.querySelector('.socialbtn');
    let socialBg =document.querySelector('.socialbg');
    let socialName =document.querySelector('.socialname');
    let socialIcon =document.querySelector('.socialicon');
    socialBtn.addEventListener('mouseenter', ()=>{
        socialBg.style.top ="0";
        socialBtn.style.borderTop="0px solid white"
        socialName.style.padding ="0px 15px"
        socialIcon.style.marginRight="15px"
    })
    socialBtn.addEventListener('mouseleave', ()=>{
        socialBg.style.top ="-100%";
        socialBtn.style.borderTop="2px solid white"
        socialName.style.padding ="0px 5px"
        socialIcon.style.marginRight="5px"

    })
}
// socialWaleButtons();

function nayaWalSocialbtn(){
    let socialBtn =document.querySelectorAll('.socialbtn');
    socialBtn.forEach(function(elem){
        elem.addEventListener("mouseenter", function(){
        elem.children[0].style.top ="0";
        elem.style.borderTop="0px solid white"
        elem.children[1].style.marginLeft ="15px"
        elem.children[2].style.marginRight="15px"
        })
        elem.addEventListener("mouseleave", function(){
        elem.children[0].style.top ="-100%";
        elem.style.borderTop="2px solid white"
        elem.children[1].style.marginLeft ="5px"
        elem.children[2].style.marginRight="5px"
        })
    })
}
nayaWalSocialbtn();






// var ans = new Promise((res, rej)=>{
//     if(true){
//         return res();
//     }
//     else{
//         return rej();
//     }
// })
// ans
// .then(function(){
//     console.log("resolve hua tha");
// })
// .catch(function(){
//     console.log("reject hua");
// })


// ---- Random above & below 5 using Promise------
// var ans = new Promise((res, rej)=>{
//     var n= Math.floor(Math.random()*10);
//     if(n<5){
//         return res();
//     }
//     else{
//         return rej();
//     }
// })
// ans
// .then(function(){
//     console.log("Below 5");
// })
// .catch(function(){
//     console.log("Above 5");
// })

// ---- Promises ek ke bad bad ------
var ans = new Promise((res, rej)=>{
    return res('sabse pahle ghar aao');
})
var p2 = ans.then(function(data){
    console.log(data);
    return new Promise((res, rej)=>{
        return res("gate kholo aur gate lagaoo")
    })
})
var p3 = p2.then(function(data){
    console.log(data);
    return new Promise ((res, rej)=>{
        return res("khana pakao ");
    })
})
p3.then(function(data){
    console.log(data);
    return new Promise((res ,rej)=>{
        return res("ok")
    })
})

