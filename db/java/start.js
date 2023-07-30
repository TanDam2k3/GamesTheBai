// Chọn chế độ chơi
function regime(){
    const off = document.querySelectorAll('.pape-home');
    const on = document.querySelectorAll('.play');
    off.forEach((item) => item.style.display = 'none');
    on.forEach((item) => item.style.display = 'block');
}

function timeEnd(time) {
    localStorage.setItem("time", time);
}

function run(){
    // document.addEventListener("keydown", function (event){
    //     if (event.ctrlKey){
    //        event.preventDefault();
    //     }
    //     if(event.keyCode == 123){
    //        event.preventDefault();
    //     }
    // });
    // document.addEventListener('contextmenu',
    //     event => event.preventDefault()
    // );
    console.log(localStorage.getItem('point'));
}

run();