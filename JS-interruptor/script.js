const ligar = document.getElementById('ligar');
const desligar = document.getElementById('desligar');
const lampada = document.getElementById('lampada');
let body = document.getElementById('body')
 
function ligarLampada (){
    lampada.src="https://png.pngtree.com/png-vector/20241124/ourmid/pngtree-illuminated-lightbulb-icon-representing-ideas-and-creativity-png-image_14551183.png" ;
}
function desligarLampada (){
    lampada.src="https://png.pngtree.com/png-clipart/20240328/original/pngtree-light-bulb-turn-off-to-save-electrical-png-image_14702780.png";
}
 
ligar.addEventListener('click',ligarLampada);
desligar.addEventListener('click',desligarLampada);