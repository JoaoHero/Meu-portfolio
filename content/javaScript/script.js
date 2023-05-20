let menuMobile = document.querySelector("#checkbox-menu");

menuMobile.addEventListener('click', function()  {
    let menuContainer = document.querySelector(".menuBar-mobileItens");

    if(menuContainer.classList.contains('open')){
        menuContainer.classList.remove('open');
    }else {
        menuContainer.classList.add('open');
    }
});


const target = document.querySelectorAll("[data-animation]");
const animationClass = "animate";


function animeScroll() {
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
    target.forEach(function(e){
        if((windowTop) > e.offsetTop){
            e.classList.add(animationClass);
        }else {
            e.classList.remove(animationClass);
        }


        console.log(e.offsetTop);
    });
}

window.addEventListener('scroll', function() {
    animeScroll()
})