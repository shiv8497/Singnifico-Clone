gsap.set(".slidesm",{
    scale: 5,

    // *** when two animation prefrom parallely when be create "Timeline"
})

function homePageAnimation(){

    
var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".home",
        start: "top top", // used for where animation are start
        end: "bottom bottom", // used for where are  animation end
        markers: true,
       // pin:true, // pin used for wo section wahi rahe move na ho only clip disappear ho jaye
        scrub: 1,  // scrub is used for jab ham scroll kare tab clip ho jab ham scrolling rok de wo ruk jaye 
        // scrolling ke based element move kare isliye ham scrob use karte hai
    }
})



// yaha pe aap kahe rahe ho is value ko follow karna is timeline mein
// Zoom in Zoom out animation
 tl
 .to(".vdodiv", {
   
    '--clip': "0%",                // you can apply both animation parallely set same flag jisko aapp animate karana chahate ho toh pass same parameter
                                   // set falg like 'a'
    ease: Power2,
 
} , 'a')
                                
.to(".slidesm", {
   
 scale: 1,
 ease: Power2,
 
}, 'a')

.to(".slidesm", {
   
    scale: 1,
    ease: Power2,
    
   }, 'a')

.to(".lft", {
   
    xPercent: -20,
    stagger: .03,
    ease: Power4,
    
   } , 'b')
   .to(".rgt", {
   
    xPercent: 20,
    stagger: .03,
    ease: Power4,
    
   } , 'b')
}


function realPageAnimation() {

    gsap.to(".slides" , {
        scrollTrigger: {
            trigger: ".real",
            start: "top top",
            end: "bottom bottom",
            markers: true,
            scrub: 1
        },
        xPercent: -200,
        ease: Power4
    })
}

function teamAnimation(){
    document.querySelectorAll(".litelem1")
    .forEach(function(el){
        el.addEventListener("mousemove", function(dets){
          gsap.to(this.querySelector('.picture'), {
            opacity:1,
            x: gsap.utils.mapRange(0, window.innerWidth, -200, 200, dets.clientX),
            ease:Power4,
            duration: .5,
          })
        }) 
    
        el.addEventListener("mouseleave", function(dets){
            gsap.to(this.querySelector('.picture'), {
                opacity:0,
                ease:Power4,
                duration: .5,
              })
        }) 
       
    })
}

function paraAnimation(){
    var clutter = ""
    document.querySelector(".textpara")
    .textContent.split("")
    .forEach(function(e){
        if(e === " ")
            clutter += `<span>&nbsp</span>`
        clutter += `<span>${e}</span>`
    })  
    document.querySelector(".textpara").innerHTML = clutter;
    
    gsap.set(".textpara span", {opacity: .1})
    gsap.to(".textpara span", {
        scrollTrigger:{
            trigger: ".para",
            markers:true,
            start: "top 60%",
            end: "bottom 90%",
          
            scrub: 2,
           
            
        },
            opacity:60,
            stagger:.3,
            ease: Power4,
    })
    
}


function Loco(){

    (function () {
        const locomotiveScroll = new LocomotiveScroll();
    })();
}

function capsuleAnimation(){
    gsap.to(".capsule:nth-child(2)",{
        scrollTrigger: {
            trigger: ".capsules",
        start: "top 70%",
        end: "bottom bottom",
        markers: true,
        scrub:1,
    },
  
        y: 0,
        ease:Power4
    },

)
}

function changeColor(){

    document.querySelectorAll(".section")
.forEach(function(e){
    ScrollTrigger.create({
        trigger: e,
        start: "top 50%",
        end: "bottom 50%",
        markers: true,
        onEnter: function(){
          document.body.setAttribute("theme" , e.dataset.color);
        },
        onEnterBack: function(){
            document.body.setAttribute("theme" , e.dataset.color); 
        }
    })
})

}


changeColor();
homePageAnimation();
realPageAnimation();
teamAnimation();
paraAnimation();
Loco();
capsuleAnimation();