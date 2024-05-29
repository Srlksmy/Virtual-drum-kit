
for(var i=0;i<document.querySelectorAll('.drum').length;i++){

    document.querySelectorAll('.drum')[i].addEventListener('keydown',function(event){
        var k = event.key;
        makesound(k)
        keyanimation(k);
    });
    

    document.querySelectorAll('.drum')[i].addEventListener('click',function(){
        
        clickanimation(this);
        var u = this.innerHTML;
        makesound(u);
    });
    }


function clickanimation(event) {
    event.classList.add('pressed');
    setTimeout( function (){
        event.classList.remove('pressed');
    },100);

}

function keyanimation(key) {
    document.querySelector('.'+key).classList.add('pressed');
    setTimeout( function (){
        document.querySelector("."+key).classList.remove('pressed');
    },100);

}
function makesound(key){
    switch (key) {
        case 'w':
            var sound=new Audio("tom-1.mp3");
            sound.play();
            
            
            break;
        case 'a':
            var sound=new Audio("tom-2.mp3");
            sound.play();
           
            break;
        case 's':
            var sound=new Audio("tom-3.mp3");
            sound.play();
            
            break;
        case 'd':
            var sound=new Audio("tom-4.mp3");
            sound.play();
            
            break;
        case 'j':
            var sound=new Audio("snare.mp3");
            sound.play();
            break;  

        case 'k':
            var sound=new Audio("crash.mp3");
            sound.play();
            break;  

        case 'l':
            var sound=new Audio("kick-bass.mp3");
            sound.play();
            
            break;  
            
        default:
            break;}
}
