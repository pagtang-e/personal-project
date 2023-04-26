

let xGamesCard = document.getElementById('xGamesCard');
let xGamesBtn = document.getElementById('xGamesBtn');

function xGames(){
    xGamesCard.classList.toggle('active');
    xGamesBtn.setAttribute('aria-expanded', true)
    disableScroll();
    
    
}
let laaxOpenCard = document.getElementById('laaxOpen');
let laaxOpenBtn = document.getElementById('laaxOpenBtn');
function laaxOpen(){
    laaxOpenCard.classList.toggle('active');
    laaxOpenBtn.setAttribute('aria-expanded', true)

    disableScroll();
  
}
let olympicsCard = document.getElementById('olympics')
let olymipicsBtn = document.getElementById('olympicGamesBtn')
function olympicGames(){
    olympicsCard.classList.toggle('active');
    olymipicsBtn.setAttribute('aria-expanded', true)
    disableScroll();
}

let html = document.querySelector('html')
function disableScroll(){
    
    TopScroll = window.pageYOffset || document.documentElement.scrollTop;
LeftScroll = window.pageXOffset || document.documentElement.scrollLeft,
window.onscroll = function() {
    window.scrollTo(LeftScroll, TopScroll);
            };

            html.setAttribute('style', 'scroll-behavior:auto;');

}
        
    

function hide(){

    laaxOpenCard.classList.remove('active');
    xGamesCard.classList.remove('active');
    olympicsCard.classList.remove('active');
    window.onscroll = function() {};
    html.removeAttribute('style');
    olymipicsBtn.setAttribute('aria-expanded', false)
    laaxOpenBtn.setAttribute('aria-expanded', false)
    xGamesBtn.setAttribute('aria-expanded', false)

}

const buttons = document.getElementsByClassName('carousel-button');
const buttonsArray = Array.from(buttons);
buttonsArray.forEach(button => {

    button.addEventListener('click', ()=>{
        const offset = button.classList.contains("next") ? 1 : -1;
        const slides = document.getElementById("carouselUl");
        const activeSlide = slides.querySelector(".active");
       let newIndex = Array.from(slides.children).indexOf(activeSlide) + offset;
       if(newIndex < 0)newIndex = slides.children.length -1;
       if (newIndex >= slides.children.length)newIndex=0;

        slides.children[newIndex].classList.add('active')
        activeSlide.classList.remove("active");

    })

});

let openHamburger = document.getElementById('openHamburger');
let navUl = document.querySelector('nav ul');
let lines = document.getElementsByClassName('line');

openHamburger.addEventListener('click', ()=>{

   

navUl.classList.toggle('active');

for(let i = 0; i < lines.length; i++)
{
    lines[i].classList.toggle('active');
}

if(navUl.classList.contains('active')){
    openHamburger.setAttribute('aria-label','close navigation menu')
    openHamburger.setAttribute('aria-expanded', true)
    disableScroll();
}
else{
    openHamburger.setAttribute('aria-label','open navigation menu')
   openHamburger.setAttribute('aria-expanded', false)
   window.onscroll = function() {
    
   };
}


})
navUl.addEventListener('click', ()=>{

    navUl.classList.remove('active');

    for(let i = 0; i < lines.length; i++)
    {
        lines[i].classList.remove('active');
    }

   openHamburger.setAttribute(aria-label,'open navigation menu')
   openHamburger.setAttribute(aria-expanded, false)

})
let arrowUp = document.querySelector(".arrowUp");
window.onscroll = function(){
  
    if(window.pageYOffset>window.innerHeight){


        arrowUp.style.opacity = "1";

    }
    else{

        arrowUp.style.opacity="0"

    }

   

}