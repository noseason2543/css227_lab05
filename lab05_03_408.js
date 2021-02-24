var c = document.getElementById('gg');
c.addEventListener('click',change_day_night);
var day = true;
var gg1 = document.querySelector('h1');
var gg2 = document.querySelector('h2');
var back_color = document.querySelector('body');
var allp = document.querySelectorAll('p');
var sp = document.querySelector('span');
function change_day_night(){
    if(day){
        gg1.textContent = 'GOOD NIGHT';
        gg2.textContent = 'This is night time!';
        gg1.style.color ='white';
        gg2.style.color = 'white';
        back_color.style.backgroundColor = 'black'
        allp[0].style.color = 'white';
        allp[1].style.color = 'white';
        allp[1].textContent = 'Click the botton below to active the Day mode.'
        sp.style.color = 'blue';
        day = false;
    }else{
        gg1.textContent = 'GOOD MORNING';
        gg2.textContent = 'This is day time!';
        gg1.style.color ='black';
        gg2.style.color ='black';
        back_color.style.backgroundColor = 'white'
        allp[0].style.color = 'black';
        allp[1].style.color = 'black';
        allp[1].textContent = 'Click the botton below to active the Night mode.'
        sp.style.color = 'red';
        day = true;
    }
}