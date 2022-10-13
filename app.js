const hamburger = document.querySelector('.hamburger'),
hamburSpan=document.getElementsByClassName('span'),
li=document.querySelectorAll('.list'), 
section = document.getElementById('section'), 

ul = document.getElementById("ulList");

for(let i=0; i <li.length; i++) {

    li[i].addEventListener('click', function(e) {
        li.forEach(el => el.classList.remove('active'))    
        
        const clicked = e.target.closest('.list')
        clicked.classList.add('active')
        if(!clicked) return;
        
    })
   
}






hamburger.addEventListener('click', function() {
   
    // ul.style.marginLeft='0px'; 
    section.style.marginLeft='240px';
    hamburger.style.marginLeft='270px';
    hamburger.classList.add('active')
    



    ul.classList.toggle('ul_show')
    
    
})



document.addEventListener('keyup', function(e) {
    if(e.key===`Escape`) {
        
        ul.style.marginLeft='-240px'; 
        section.style.marginLeft='0px';
        hamburger.style.marginLeft='20px';

    }
})