let MenuBtn = document.getElementById('MenuBtn');


MenuBtn.addEventListener('click', function(){
    document.querySelector('body').classList.toggle('menuActive');
    MenuBtn.classList.toggle('fa-xmark');
})


let type = new Typed('.auto-input', {
    strings: ['Backend Developer...', 'Nodejs Developer...', 'Javascript Developer...', 'Full Stack Web Developer...'],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 2000,
    loop: true
})