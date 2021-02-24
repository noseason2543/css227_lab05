var j = document.querySelectorAll('button').forEach(d => d.addEventListener('click',colorclick));
var text1 = document.getElementById('text');
text1.addEventListener('click',changeText);
function colorclick(event){
    event.currentTarget.style.backgroundColor = 'black';
    event.currentTarget.style.color = 'white';
    alert(event.currentTarget.textContent+" =#=!!!!");      
}
function changeText(){
    d.innerText = "hello";     
}
