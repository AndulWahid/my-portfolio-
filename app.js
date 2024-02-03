let menuIcon = document.querySelector('#menu')
let menu = document.querySelector('.menu')
let video = document.querySelector('#video');
let btn = document.querySelector('#btn1');
let itemVid = document.querySelector('#item-vid');
let item = document.querySelectorAll('#item');
let close = document.querySelector('#close');
let boxes = document.querySelectorAll("#box")
let page3 = document.querySelector("#page3")

menuIcon.addEventListener('click',()=>{
   menu.style.right = 0
    //menuIcon.src = "./img/prevsong.svg"
})
close.addEventListener('click',()=>{
   menu.style.right = '100%'
    //menuIcon.src = "./img/prevsong.svg"
})


btn.addEventListener('mouseenter',()=>{
    video.style.opacity = 1;
})
btn.addEventListener('mouseleave',()=>{
    video.style.opacity = 0;
})


const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});



boxes.forEach((ele)=>{
    ele.addEventListener("mouseenter",()=>{
        let data = ele.getAttribute('data-image')
        // console.log(data);
        
        page3.style.backgroundImage = `url(${data})`
    })

})

boxes.forEach((ele)=>{
    ele.addEventListener("mouseleave",()=>{ 
        page3.style.backgroundImage = "";
    })
    
})


boxes.forEach((ele)=>{
    ele.addEventListener("mouseleave",()=>{
        document.querySelector("#images").style.opacity = 0
    })
})

  

// import { Shery } from "sheryjs";
// Shery.imageEffect("#page6",{
//     style:3,
//     scrollSnappiing: true,
//     scrollSpeed:6,
//     touchSpeed: 6,
//     damping: 7,
// });


/* page3.addEventListener('mousemove',(teds)=>{
    let img = document.querySelector("#images");
    img.style.left = teds.x+"px"
    img.style.top = teds.y+"px"
})
 */
/* boxes.addEventListener("mouseenter",()=>{
    let images = document.querySelector("#images");
    images.style.display = "block"
})

boxes.addEventListener("mouseleave",()=>{
    let images = document.querySelector("#images");
    images.style.display = "none"
}) */

/* 
gsap.to("#we", {
    left: "-100%",
    delay: 1
}) */
/* 
item.forEach((e)=>{
    console.log(e);
    e.addEventListener('mouseenter',()=>{
        itemVid.style.opacity = 1;
    })
    e.addEventListener('mouseleave',()=>{
        itemVid.style.opacity = 0;
    })
})
 */
/* item.addEventListener('mouseenter',()=>{
    itemVid.style.opacity = 1;
})
item.addEventListener('mouseleave',()=>{
    itemVid.style.opacity = 0;
}) */



//gsap.to('#red',{duration:1, y:-200, ease:"power2.inOut"});

//import LocomotiveScroll from 'locomotive-scroll';
  



// document.addEventListener('DOMContentLoaded', function(){
//     const imageContainers = document.querySelectorAll('#red');
//     imageContainers.forEach(conatiner=>{
//         const followerImage = conatiner.querySelector('#image');

//         conatiner.addEventListener('mouseenter',function(){
//             gsap.to(followerImage,{
//                 opacity:1,duration:0.3
//             });
//            // followMouse(container,followerImage);
//         });

//         conatiner.addEventListener('mouseleave',function(){
//             gsap.to(followerImage,{opacity:0, duration:0.3});
//         });
//     });

//         function followerImage(conatiner,followerImage){
//             conatiner.addEventListener('mousemove',function(event){
//                 const rect = conatiner.getBoundingClientRect();
//                 const x = event.clientX - rect.left;
//                 const y= event.clientY - rect.top;

//                 gsap.to(followerImage,{x,y,ease:'power2out', duration:0.3});
//             });
//         }

// });

