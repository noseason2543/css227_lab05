window.onload = function(){
    var c2 = document.getElementById('out');
    var c1 = document.getElementById('t1').onkeydown = (e)=>{
        if(e.which == '13'){
            var n = document.createElement('p');
            n.innerText = document.getElementById('t1').value;
            document.getElementById('t1').value = '';
            n.innerHTML = '<img src="https://www.pngfind.com/pngs/m/457-4577925_bin-png-iconos-de-eliminar-png-transparent-png.png" width="20px">'+' '+n.innerText;
            
            c2.appendChild(n);
             
        }
        var j = document.querySelectorAll('img').forEach(g => g.addEventListener('click',naja));
        function naja(e){
            var m = e.currentTarget;
            var parent1 = m.parentNode;
            parent1.parentNode.removeChild(parent1);
        }

        var pp = document.querySelectorAll('p').forEach(g => g.addEventListener('click',kamui));
        function kamui(event){
            var text1 = event.currentTarget.innerText;
            event.currentTarget.innerHTML = '<img src="https://www.pngfind.com/pngs/m/457-4577925_bin-png-iconos-de-eliminar-png-transparent-png.png" width="20px">'+' '+'<s>'+text1+'</s>';
            var j = document.querySelectorAll('img').forEach(g => g.addEventListener('click',naja));           
        }
    };
    

}
