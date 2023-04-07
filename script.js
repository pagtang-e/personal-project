
let xGamesCard = document.getElementById('xGamesCard');
function xGames(){
    xGamesCard.classList.toggle('active');
    disableScroll();
}
let laaxOpenCard = document.getElementById('laaxOpen');
function laaxOpen(){
    laaxOpenCard.classList.toggle('active');
    disableScroll();
  
}
let olympicsCard = document.getElementById('olympics')
function olympicGames(){
    olympicsCard.classList.toggle('active');
    disableScroll();
}

function disableScroll(){
    TopScroll = window.pageYOffset || document.documentElement.scrollTop;
LeftScroll = window.pageXOffset || document.documentElement.scrollLeft,
window.onscroll = function() {
    window.scrollTo(LeftScroll, TopScroll);
            };
}
        
    

function hide(){

    laaxOpenCard.classList.remove('active');
    xGamesCard.classList.remove('active');
    olympicsCard.classList.remove('active')
    console.log("click");
    window.onscroll = function() {};
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