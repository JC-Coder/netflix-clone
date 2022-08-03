let navbarToggler = document.querySelector('.mobile-nav-toggler');
let mobileNavbar = document.querySelector('.mobile-nav-content');
let closeMobileNavBtn = document.querySelector('.mobile-nav-content .close');

navbarToggler.addEventListener('click', ()=>{
    mobileNavbar.classList.toggle('active');
});

closeMobileNavBtn.addEventListener('click', ()=>{
    mobileNavbar.classList.remove('active');
})