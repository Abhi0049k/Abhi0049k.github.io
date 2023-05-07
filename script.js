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

// Skill Section Start

const progressBars = document.querySelectorAll('.inner-line');

window.addEventListener('scroll', function(){
    progressBars.forEach(function(progressBar){
        const rect = progressBar.getBoundingClientRect();
        if(rect.top < window.innerHeight && rect.bottom >= 0){
            const width = progressBar.getAttribute('data-width');
            progressBar.style.width = width+'%';
        }
    });
});


let navLinks = document.querySelectorAll('header nav ul li a');
console.log(navLinks)
let sections = document.querySelectorAll('section');

window.addEventListener('scroll', ()=>{
    const scrollPos = window.scrollY + 10
    sections.forEach(section => {
        if(scrollPos > section.offsetTop && scrollPos < (section.offsetTop + section.offsetHeight)){
            navLinks.forEach(link=>{
                link.classList.remove('active');
                if(section.getAttribute('id')===link.getAttribute('href').substring(1)){
                    link.classList.add('active');
                }
            });
        }
    });
});
