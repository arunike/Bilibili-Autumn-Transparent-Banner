let imageList = document.querySelectorAll('.content img');
console.log(imageList);

function initStatus() {
    imageList.forEach((item, i) => {
        item.style.transition = 'all 0.3s ease';
        let offset = 100;
        let blur = 10;
        let percent = 0;
        let offsetValue = (offset / (imageList.length - i)) * percent;
        let blurValue = Math.pow((i / imageList.length - percent), 2) * blur;
        item.style.setProperty('--offset', `${offsetValue}px`);
        item.style.setProperty('--blur', `${blurValue}px`);
    });
    setTimeout(() => {
        imageList.forEach(item => {
            item.style.transition = '';
        });
    }, 300);
}

initStatus()

document.querySelector('.content').addEventListener('mousemove', function(e) {
    let progress = e.clientX / window.outerWidth;
    let percent = progress.toFixed(2);
    imageList.forEach((item, i) => {
        let offset = 100;
        let blur = 10;
        let offsetValue = (offset / (imageList.length - i)) * percent;
        let blurValue = Math.pow((i / imageList.length - percent), 2) * blur;
        item.style.setProperty('--offset', `${offsetValue}px`);
        item.style.setProperty('--blur', `${blurValue}px`);
    });
});

document.querySelector('.content').addEventListener('mouseout', function(e) {
    initStatus();
});

function handleBlink() {
    setInterval(() => {
        document.querySelectorAll('.content img')[1].src = './images/bilibili-autumn-2_1.png';
        setTimeout(() => {
            document.querySelectorAll('.content img')[1].src = './images/bilibili-autumn-2_2.png';
        }, 120);
        setTimeout(() => {
            document.querySelectorAll('.content img')[1].src = './images/bilibili-autumn-2.png';
        }, 250);
    }, 5000);
}

handleBlink()