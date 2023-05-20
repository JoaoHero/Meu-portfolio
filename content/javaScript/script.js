let menuMobile = document.querySelector("#checkbox-menu");

menuMobile.addEventListener('click', function()  {
    let menuContainer = document.querySelector(".menuBar-mobileItens");

    if(menuContainer.classList.contains('open')){
        menuContainer.classList.remove('open');
    }else {
        menuContainer.classList.add('open');
    }
});

