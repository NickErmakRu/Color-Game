let colorCode = $('#colorCode');
let boxes = $('.box');
let statusMsg = $('#statusMsg');
let playAgain = $('#playAgain');
let header = $('.header');

let pickedColor = '';
let colors = [];

function init() {
    pickedColor='';
    colors=[];
    
    for (let i=0; i<6; i++) {
        let color = randomColor();
        colors.push(color);
    }
    
    let pickedIndex = Math.floor(Math.random() * 5); 
    pickedColor = colors[pickedIndex];
    
    colorCode.text(pickedColor);
    statusMsg.text('');
    header.css('background-color', 'steelblue');
    
    $.each(boxes, function(index, box) {
    let $box = $(box);
        $box.css('background-color', colors[index]);
    });
    
}

function randomColor() {
    let r = Math.floor(Math.random() * 255); 
    let g = Math.floor(Math.random() * 255); 
    let b = Math.floor(Math.random() * 255); 
    
    return 'rgb(' + r + ', ' + g + ', ' + b + ')'; 
}

boxes.on('click', function() {
    let box = $(this);
    let backgroundColor = box.css('background-color');
    
    if (pickedColor === backgroundColor) {
        statusMsg.text('Correct!');
        $.each(boxes, function(index, box) {
            let $box = $(box);
            $box.css('background-color', pickedColor);
        });
        header.css('background-color', pickedColor);
        
    } else {
        statusMsg.text('Try again!');
        box.css('background-color','white');
    }
});

playAgain.on('click', function() {
    init();
})

init();















