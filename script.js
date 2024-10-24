gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform
    ? "transform"
    : "fixed",
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

document.addEventListener("DOMContentLoaded", function () {
  // Initialize Tilt.js
  $(".card").tilt({
    maxTilt: 20,
    perspective: 800,
    easing: "cubic-bezier(.25,1,0,1)",
    scale: 1,
    speed: 300,
    transition: true,
    disableAxis: null,
    reset: true,
    glare: false,
    maxGlare: 1,
  });
});

// Back to Top
let backToTop = document.querySelector(".backtotop");
let scroll = backToTop.querySelector(".scroll");
function mouseClick(ref){
  console.log(ref)
ref.addEventListener("mouseover", (e) => {
   
      let scroll=ref.firstElementChild;
      scroll.firstElementChild.style.top="200%";
      scroll.firstElementChild.style.opacity = "0";
      scroll.lastElementChild.style.top = "0%";
     
      scroll.lastElementChild.style.opacity = "1";
  
});
ref.addEventListener("mouseout", (e) => {{
      let scroll=ref.firstElementChild;
      scroll.firstElementChild.style.top="0%";
    scroll.firstElementChild.style.opacity = "1";
    scroll.lastElementChild.style.top = "200%";
    scroll.lastElementChild.style.opacity = "0";
    
  }
});
}
let a=document.querySelector(".quick-links");
a.addEventListener("mouseover",(e)=>{
  
        if(e.target.id=="instagram"){
         console.log(e.target.nextElementSibling);
         e.target.style.top="0";
         e.target.style.opacity="0";
         e.target.nextElementSibling.style.top="50%";
         e.target.nextElementSibling.style.opacity="1";
        }
      
})
a.addEventListener("mouseout",(e)=>{
  
  if(e.target.id=="facebook"){
   console.log(e.target.previousElementSibling);
   e.target.style.top="100%";
   e.target.style.opacity="0";
   e.target.previousElementSibling.style.top="50%";
   e.target.previousElementSibling.style.opacity="1";
  }

})


window.addEventListener("scroll",()=>{
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTop.style.display = 'block';
  } else {
    backToTop.style.display = 'none';
  }
});
backToTop.addEventListener("click", function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
backToTop.addEventListener("mouseover", () => {
  scroll.firstElementChild.style.top = "-20%";
  scroll.firstElementChild.style.opacity = "0";
  scroll.lastElementChild.style.top = "50%";
  scroll.lastElementChild.style.opacity = "1";
});
backToTop.addEventListener("mouseout", () => {
  scroll.firstElementChild.style.top = "50%";
  scroll.firstElementChild.style.opacity = "1";
  scroll.lastElementChild.style.top = "100%";
  scroll.lastElementChild.style.opacity = "0";
});

var t1 = gsap.timeline();
// gsap.to(".backtotop",{
//     display:"block",
//     opacity:1,
//     scrollTrigger:{
//         trigger:".backtotop",
//         scroll:"body",
//         markers:true,
//         start:"top 80%",
//         end:"top 10%",

//     }
// })

function cursorEffect() {
  var page1Content = document.querySelector("body");
  var cursor = document.querySelector("#cursor");
  page1Content.addEventListener("mousemove", (dets) => {
    gsap.to(cursor, {
      x:dets.x,
      y:dets.y,
    });
  });
  page1Content.addEventListener("mouseenter", () => {
    gsap.to(cursor, {
      scale: 1,
      opacity: 1,
    });
  });
  page1Content.addEventListener("mouseleave", () => {
    t1.to(cursor, {
      scale: 0,
      opacity: 0,
    });
  });
}

cursorEffect();

  // function time(){
  //     var a=0;
  //     let id=setInterval(() => {
  //         a=a+Math.floor(Math.random()*20);
  //         if(a<100){
  //             document.querySelector("#loader h1").innerHTML=a+"%";
  //        }
  //        else{
  //            a=100;
  //            document.querySelector("#loader h1").innerHTML=a+"%";
  //            clearInterval(id);
  //        }
  //    }, 150);
  //   }

t1.from(".navbar img,.navbar  .nav-items  ", {
  y: -200,
  // opacity: 0,
  duration: 0.5,
  delay:0.2,
  stagger: 0.1,
});

// t1.to("#loader h1",{

//     duration:0.8,
 
//     onStart:time(),

// })
// t1.to("#loader",{
//     top:-2000,
//     stagger:0.3,
//     duration:1,

// })
// gsap.from(".carousel-caption h1",{
    
// })
// gsap.from("#header", {
//   y: -50,
//   delay: 0.5,
//   duration: 1,
//   stagger: 0.3,
// });
// gsap.from(".nav li .btn-group .dropdown-menu", {
//   y: 200,
//   delay: 1,
//   duration: 1,
// });

gsap.from(".card1", {
  y:100,
  duration: 1,
  scrollTrigger: {
    trigger: ".card1",
    scroller: "#main",
  },
});
gsap.from(".circle", {
  y: 200,
  scale: 1,
  opacity: 1,
  color: "blue",
  scrollTrigger: {
    trigger: ".circle",
    scroller: "#main",
    scrub: 1,
  },
});
gsap.from(".circle1", {
  y: 100,
  opacity: 2,
  color: "blue",
  scrollTrigger: {
    trigger: ".circle1",
    scroller: "#main",
 
    scrub: 2,
  },
});
// gsap.from(".card1 img", {
// //   y: -100,
//   delay: 0.5,
//   duration: 1,
//   opacity: 0,

//   scrollTrigger: {
//     trigger: ".card1,card-img",
//     scroller: "#main"
//   },
// });
// gsap.from(".card-img img", {
//   y: -100,

//   duration: 1,
//   opacity: 0,
//   stagger: 0.3,
//   scrollTrigger: {
//     trigger: ".card-img img",
//     scroller: "#main",
//   },
// });
gsap.from(".card-img", {
  y: -100,
  duration: 1,
  opacity: 0,
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".card-img",
    scroller: "#main",
    // markers:true,
   
  },
});
gsap.from(".counter-section", {
  duration: 1,
  
   
  scrollTrigger: {
    trigger: ".counter-section",
    scroller: "#main",
      // markers:true,
    //  start:"top 80%",
    //  end:"top 30%",
    //  scrub: 2,
     onEnter:counter,
  },
});
// javascript hear
function counter(){
    let a=0;
    let b=0;
    let c=0;
    document.querySelector(".expreince").innerHTML=0;
    document.querySelector(".predicition").innerHTML=0;
    document.querySelector(".puja").innerHTML=0;
    document.querySelector(".satisfaction-rate").innerHTML=0;
    let id= setInterval(() => {
       a++;
      
      if(a<=5){
          document.querySelector(".expreince").innerHTML=a+"+";
      }
      else{
       clearInterval(id);
      }
   }, 250);
   let id1= setInterval(() => {
    b+=Math.floor(Math.random()*2);
    if(b<=100){
      document.querySelector(".predicition").innerHTML=b+"%";
    }
   else{
    document.querySelector(".predicition").innerHTML=100+"%";
    clearInterval(id1);
   }
}, 15);
let id3= setInterval(() => {
  c+=Math.floor(Math.random()*100);
 
 if(c<=5000){
     document.querySelector(".puja").innerHTML=c+"+";
 }
 else{
  document.querySelector(".puja").innerHTML=5000+"+";
  clearInterval(id3);
 }
}, 13);
let id4= setInterval(() => {
b+=Math.floor(Math.random()*2);
if(b<=99){
 document.querySelector(".satisfaction-rate").innerHTML=b+"%";
}
else{
  document.querySelector(".satisfaction-rate").innerHTML=99+"%";
clearInterval(id4);
}
}, 15);
    
}



      // contact starts here
let number=document.getElementById("number");
console.log(number);
number.addEventListener("keydown",(e)=>{
   if(e.key!==8){
  if(e.key<"0"||e.key>"9"){
    e.preventDefault();
  }
}
})

const form = document.getElementById('form');
const result = document.getElementById('result');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const formData = new FormData(form);
  const object = Object.fromEntries(formData);

  const json = JSON.stringify(object);
  result.innerHTML = "Please wait..."

    fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
        .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
                result.innerHTML = json.message;
            } else {
                result.innerHTML = json.message;
            }
        })
        .catch(error => {
            console.log(error);
            result.innerHTML = "Something went wrong!";
        })
        .then(function() {
            form.reset();
              alert("Form submited");
        });
});