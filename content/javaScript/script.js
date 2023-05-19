let menuMobile = document.querySelector(".menuBar-mobile");

menuMobile.addEventListener('click', function()  {
    let menuContainer = document.querySelector(".menuBar-mobileItens");

    if(menuContainer.classList.contains('open')){
        menuContainer.classList.remove('open');
    }else {
        menuContainer.classList.add('open');
    }
});
