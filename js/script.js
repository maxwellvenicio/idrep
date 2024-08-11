const btnMobile = document.getElementById('btn_mobile');

function toggleMenu (event){
    console.log("Função toggleMenu chamada");
    if(event.type === 'touchstart') event.preventDefault(); //previnir o padrao quanto o evento for touch
    const navMenu = document.getElementById('nav'); //add class
    navMenu.classList.toggle('active');

    //acessibilidade
    const active = nav.classList.contains('active'); 
    event.currentTarget.setAttribute("aria-expanded", active); 

    if (active) {
        event.currentTarget.setAttribute("aria-label", "Fechar Menu");
    } else {
        event.currentTarget.setAttribute("aria-label", "Abrir Menu");   
    }
}

//eventos
btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("touchstart", toggleMenu);


