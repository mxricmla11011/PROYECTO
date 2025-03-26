const newButton=document.getElementById('newButton')

function changeBackgroundColor(){
    const randomColor=`hsl.(${math.random()*360},100%,75%)`;
document.body.style.backgroundColor=randomColor
}
newButton.eddEventListener('click',changeBackgroundColor);