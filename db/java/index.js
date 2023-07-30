// Imports

// a: STT bức ảnh
// b: 1 bức ảnh có a và b
var arr = [];
var countImg = 10;
function getImg(a, b){
    var image = document.querySelector(`.img-${a}-${b}`);
    image.src = `/db/img/open${a}.jpg`;
    var imgData = {
        src: image.src,
        img: `.img-${a}-${b}`
    };
    arr.push(imgData);
    handleEventImg();
}

function handleEventImg(){
    if(arr.length == 2){
        if(arr[0].src === arr[1].src && arr[0].img != arr[1].img){
            setTimeout(chooseTrue,500);
        }
        else{
            setTimeout(chooseFalse,500);
        }
    }
    else if(arr.length >= 3){
        chooseFalse();
    }
}
// Chọn 2 ảnh giống nhau
function chooseTrue(){
    if(arr.length >= 2) {
        document.querySelector(arr[0].img).remove();
        document.querySelector(arr[1].img).remove();
        arr.splice(0, 2);
        countImg--;
    }
}

// Chọn 2 ảnh khác nhau
function chooseFalse(){
    if(arr.length >= 2) {
        document.querySelector(arr[0].img).src = '/db/img/close.jpg';
        document.querySelector(arr[1].img).src = '/db/img/close.jpg';
        arr.splice(0, 2);
    }
}

// Thanh thời gian
var time = document.querySelector('.progressTime');
var timeEnd = document.querySelector('.timePresent');
var timePlay = localStorage.getItem("time");
var timePresent = 0;
timeEnd.innerHTML = formatTime(timePlay);
function timeStart(){
    time.setAttribute('value', timePlay - timePresent);
    timeEnd.innerHTML = formatTime(timePlay - timePresent);
    time.setAttribute('max', timePlay);
    if(timePresent < timePlay) timePresent++;
}

function formatTime(seconds) {
    var minutes = Math.floor(seconds / 60);
    var remainingSeconds = Math.floor(seconds % 60);
    var formattedTime = (minutes < 10 ? '0' : '') + minutes + ':' + (remainingSeconds < 10 ? '0' : '') + remainingSeconds;
    return formattedTime;
}

var point = [];
// Hiển thị thông báo trò chơi
var success = document.querySelector('#successGames');
var failure = document.querySelector('#failureGames');
var box = document.querySelector('.box');
function showResult(){
    // Ngăn chặn không cho người dùng thao tác khi kết thúc thời gian
    if(countImg == 0 && timePresent < timePlay) {
        success.style.display = 'block';
        setTimeout(function () {
            point.push(timePlay - timePresent + 4);
            localStorage.setItem('point', point);
            window.location.href = "start.html";
            
        }, 4000);
    }
    else if(countImg > 0 && timePresent == timePlay) {
        failure.style.display = 'block';
        box.style.pointerEvents = 'none';
        setTimeout(function () {
            window.location.href = "start.html";
        }, 3000);
    }
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
    setInterval(timeStart, 1000);
    setInterval(showResult,1000);
}

run();