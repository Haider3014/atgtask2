const dot1=document.getElementById("Dots1")
const dot2=document.getElementById("Dots2")
const dot3=document.getElementById("Dots3")
const dot4=document.getElementById("Dots4")
const dot5=document.getElementById("Dots5")
const dot6=document.getElementById("Dots6")
const dot7=document.getElementById("Dots7")
const left=document.getElementById("left")
const svg=document.querySelector('svg')
const main=document.querySelector('div')



dot1.addEventListener('click',()=>{
    svg.setAttribute("style","background-color:#c471f5")
    main.setAttribute("style","background-color:#c471f5")
})
dot2.addEventListener('click',()=>{
    svg.setAttribute("style","background-color:#002D62")
    main.setAttribute("style","background-color:#002D62")
    
})
dot3.addEventListener('click',()=>{
    svg.setAttribute("style","background-color:#002244")
    main.setAttribute("style","background-color:#002244")
})
dot4.addEventListener('click',()=>{
    svg.setAttribute("style","background-color:#1F305E")
    main.setAttribute("style","background-color:#1F305E")
})
dot5.addEventListener('click',()=>{
    svg.setAttribute("style","background-color:#005A9C")
    main.setAttribute("style","background-color:#005A9C")
})
dot6.addEventListener('click',()=>{
    svg.setAttribute("style","background-color:#1034A6")
    main.setAttribute("style","background-color:#1034A6")
})
dot7.addEventListener('click',()=>{
    svg.setAttribute("style","background-color:#32de84")
    main.setAttribute("style","background-color:#32de84")
})