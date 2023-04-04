
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
