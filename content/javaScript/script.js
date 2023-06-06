/* Menu-Mobile */

let menuMobile = document.querySelector("#checkbox-menu");

menuMobile.addEventListener('click', function()  {
    let menuContainer = document.querySelector(".menuBar-mobileItens");

    if(menuContainer.classList.contains('open')){
        menuContainer.classList.remove('open');
    }else {
        menuContainer.classList.add('open');
    }
});



/* Div animated */

const target = document.querySelectorAll("[data-animation]");
const animationClass = "animate";


function animeScroll() {
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
    target.forEach(function(e){
        if((windowTop) > e.offsetTop){
            e.classList.add(animationClass);
        }
    });
}

window.addEventListener('scroll', function() {
    animeScroll()
})


/* Pop-Pup */

function popup() {
    const container = document.querySelector('.mySkills-itens');
    const elementos = container.querySelectorAll('.mySkills-container');
    const popupClose = document.querySelector(".popup-close");
    const popupContainer = document.querySelector(".popup-wrapper");

    elementos.forEach((elemento, index) => {
        elemento.addEventListener('click', () => {
            if(index === 0 ) {
                const popupTittle = document.querySelector("#popup-tittle")
                const p1 = document.querySelector("#p1");
                const p2 = document.querySelector("#p2");
                const p3 = document.querySelector("#p3");

                popupContainer.style.display = "flex";
                popupTittle.textContent = "Html";
                p1.textContent = "Linguagem fundamental da web. Essencial e indispensável,"
                p2.textContent = "o HTML é o alicerce que dá forma às páginas online. Com ele, busco criar layouts robustos, prezando pela semântica correta,"
                p3.textContent = "para facilitar tanto a criação quanto a manutenção do site. Descubra o poder de construir uma base sólida para a sua presença na web!"


            }

            else if(index === 1 ) {
                const popupTittle = document.querySelector("#popup-tittle")
                const p1 = document.querySelector("#p1");
                const p2 = document.querySelector("#p2");
                const p3 = document.querySelector("#p3");


                popupContainer.style.display = "flex";
                popupTittle.innerHTML = "Css";
                p1.textContent = "Estilização e personalização visual, com poder transformador, o CSS é a chave para dar vida ao layout, tornando-o único e cativante."
                p2.textContent = "Busco constantemente me atualizar sobre suas funcionalidades, empenhado em criar páginas da web sólidas, fluidas e altamente interativas."
                p3.textContent = "Persevero no aperfeiçoamento contínuo, explorando todo o potencial do CSS para oferecer uma experiência visualmente impactante."

            }

            else if(index === 2 ) {
                const popupTittle = document.querySelector("#popup-tittle")
                const p1 = document.querySelector("#p1");
                const p2 = document.querySelector("#p2");
                const p3 = document.querySelector("#p3");


                popupContainer.style.display = "flex";
                popupTittle.innerHTML = "JavaScript";
                p1.textContent = "Com JS, posso dar vida aos elementos, manipular dados e criar experiências ricas para os usuários."
                p2.textContent = "Busco constantemente me aperfeiçoar nas funcionalidades do JS, explorando suas poderosas capacidades para criar páginas da web que vão além do estático."
                p3.textContent = "Consigo transformar ideias em ações, buscando oferecer uma interatividade envolvente e uma experiência do usuário excepcional."

            }

            else if(index === 3 ) {
                const popupTittle = document.querySelector("#popup-tittle")
                const p1 = document.querySelector("#p1");
                const p2 = document.querySelector("#p2");
                const p3 = document.querySelector("#p3");


                popupContainer.style.display = "flex";
                popupTittle.innerHTML = "Git";
                p1.textContent = "Git é uma ferramenta incrível que me ajudou muito no desenvolvimento do meu trabalho, tanto em equipe quanto individualmente. "
                p2.textContent = "fundamental para o meu crescimento como desenvolvedor, proporcionando uma experiência de trabalho mais fluida e eficiente."
                p3.textContent = "Com ele, consigo progredir nos meus projetos de forma mais organizada e rápida. "

            }


        })
    })

    popupClose.addEventListener('click', function() {
        popupContainer.style.display = "none";
    })

}

popup()

 /* Smoth link */



