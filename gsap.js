gsap.registerPlugin(ScrollTrigger);
const section= document.querySelectorAll('section')
// const dot2=document.getElementsByClassName('Dots2')


// Section one img
gsap.to('.oti', {

    y: -500,
    duration: 3,
    repeat:-1,
    delay:2,
    scrollTrigger:{
        trigger:'.one',
    // markers:true
    toggleActions:'restart none none none'
} ,
    // start:0,

})
gsap.to('.obi', {

    y: -500,
    duration: 3,
    delay:2.5,
    repeat:-1,
    scrollTrigger:{
        trigger:'.one',
        toggleActions:'restart none none none'
    // markers:true
} ,
    // start:0,


})
// let tween = gsap.to(".tti", {
//     y: 860,
//     duration: 5,
// })
// section two img
gsap.to(".tti", {
    y: 860,
    duration: 5,
    repeat:-1,
    scrollTrigger:{
        trigger:" .tti",
        start:"top bottom",
        // toggleActions:" repeat none none none"
    }


})

gsap.to(".tbi", {
    y: -900,
    duration: 5,
    repeat:-1,


})
// section three img
gsap.to('.trti',{
    y:-500,
    duration:7,
    repeat:-1,
    // scrollTrigger: ".three"
})
gsap.to('.trbi',{
    y:500,
    duration:7,
    repeat:-1,
    // scrollTrigger: ".three"
})
// section four img

gsap.to('.fobipb',{
    y:100,
    x:130,
    duration:7,
    repeat:-1,
    // scrollTrigger: ".four"
})
gsap.to('.fotibr',{
    y:100,
    x:-100,
    duration:7,
    repeat:-1,
    // scrollTrigger: ".four"
})
gsap.to('.fotifm',{
    y:500,
    duration:7,
    repeat:-1,
    // scrollTrigger: ".four"
})
gsap.to('.fotihm',{
    y:-400,
    duration:7,
    repeat:-1,
    // scrollTrigger: ".four"
})
gsap.to('.fotibrd',{
    y:-100,
    x:-80,
    duration:7,
    repeat:-1,
    // scrollTrigger: ".four"
})
// section 5 img
gsap.to('.fvtikar',{
    y:270,
    duration:7,
    repeat:-1,
    // scrollTrigger: ".five"
})
gsap.to('.fvtian',{
    y:690,
    duration:7,
    repeat:-1,
    // scrollTrigger: ".five"
})
gsap.to('.fvtikar2',{
    x:-400,
    duration:7,
    repeat:-1,
    // scrollTrigger: ".five"
})
gsap.to('.fvtiksn',{
    y:-300,
    duration:7,
    repeat:-1,
    // scrollTrigger: ".five"
})
gsap.to('.fvtidsm',{
    y:-400,
    duration:7,
    repeat:-1,
    // scrollTrigger: ".five"
})
// section 6
gsap.to('.sbi',{
    y:-530,
    duration:7,
    repeat:-1,
    // scrollTrigger:".six"
})
// section 7
gsap.to('.svbi',{
    y:-50,
    duration:7,
    repeat:-1,
    // scrollTrigger:'.seven'
})


// gsap.utils.toArray("sections").forEach((el, i) => {
//     const tl = gsap.timeline({ paused: true });
//     // tl.to(el, {
//     //     width: '400px',
//     //     duration: 1
//     // })  
    
    
//     dots1.addEventListener('click', function () {
//           if (tl.paused()) {
//               tl.play();
//           } else {
              
//           }
//     })
    
//   })