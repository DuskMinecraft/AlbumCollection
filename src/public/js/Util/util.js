
function getResolution() {
    let winWidth = 0;
    let winHeight = 0;
    if (document.documentElement && document.documentElement.clientHeight && document.documentElement.clientWidth) {
        winHeight = document.documentElement.clientHeight;
        winWidth = document.documentElement.clientWidth;
        return {
            'width': winHeight,
            'height': winWidth
        };
    } else {
        return null;
    }
}