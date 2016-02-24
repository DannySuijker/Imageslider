var picture = ['image/forest.jpg','image/mountain.jpg','image/sao-paulo.jpg'];
var index = 0;

function onClick(direction) {
    if(direction === 'left') {

        if(index !== 0) {
            index--;
            var source = picture[index];
            document.getElementsByClassName('image')[0].src = source;
        }
        else {
            index = picture.length-1;
            var source = picture[index];
            document.getElementsByClassName('image')[0].src = source;
        }
    }
    else {
        if(index !== picture.length-1) {
            index++;
            var source = picture[index];
            document.getElementsByClassName('image')[0].src = source;
        }
        else {
            index = 0;
            var source = picture[index];
            document.getElementsByClassName('image')[0].src = source;
        }
    }
}