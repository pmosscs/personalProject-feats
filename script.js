const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navLinks');

    const navLinks = document.querySelectorAll('.navLinks li');
    // toggle nav

    burger.addEventListener('click', () => {
    nav.classList.toggle('burgerActive')
    //animate links
    navLinks.forEach((link, index) => {
        //NONE OF THIS MAKES SENSE RIGHT HERE
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + .25}s`
        }
    })
    burger.classList.toggle('toggle');
    })
    
}

navSlide();






