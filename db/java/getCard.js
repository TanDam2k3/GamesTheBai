// Handle Data Image Web
import {images} from './dataImg.js';
function getCard(){
    const card = document.querySelector('.box');
    for(var i = 0; i < arrays.length; i++){
        card.innerHTML += `
            <div class="card">
                <img class="img-${arrays[i].id}-${arrays[i].choose}" src="db/img/close.jpg" alt="" onmousedown="getImg(${arrays[i].id},'${arrays[i].choose}')">
            </div>
        `;
    }
}
// Tạo mảng thẻ
const arrays = []
function arrayCard(){
    for(var i = 0; i < images.length; i++) {
        const imageA = {
            id: images[i].id,
            src: images[i].src,
            choose: 'a'
        };
        const imageB = {
            id: images[i].id,
            src: images[i].src,
            choose: 'b'
        };
        arrays.push(imageA);
        arrays.push(imageB);
    }
    arrays.sort(() => 0.5 - Math.random());
}

arrayCard();
getCard();