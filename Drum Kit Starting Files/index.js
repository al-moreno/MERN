'use strict';
//1st step
//add event listener to the first button and respond by calling a function that displays an alert
// we wait for a click befor running the function
// document.querySelector('button').addEventListener('click', handleClick);
//
// function handleClick(){
//     alert('I got clicked');
// }



//2nd Step
// anonymous functions

// document.querySelector('button').addEventListener('click', function(){
//     alert("I got clicked.")
// });



//3rd Step
// iteration through all drum button. Follow up with adding event listener and responding with alert

// let drumButtons = document.querySelectorAll('.drum').length
//
// for (let i = 0; i < drumButtons; i++){
//     document.querySelector('.drum')[i].addEventListener('click', function (){
//         alert("I got clicked");
//     });
//
// };


//4th Step
// play a sound instead of showing the alert by using a constructor function and using the method play()

// let drumButtons = document.querySelectorAll('.drum').length;
//
// for (let i = 0; i<drumButtons; i++){
//     document.querySelector('.drum')[i].addEventListener('click', function(){
//         let audio = new Audio('./sounds/crash.mp3');
//         audio.play();
//     });
// }



//5th Step
// add a sound to each button that is unique by using "this"

let drumButton = document.querySelectorAll('.drum').length;
for (let i = 0; i<drumButton;i++){
    document.querySelectorAll('.drum')[i].addEventListener('click', function(){
        console.log(this.innerHTML);
    });
}















// Detecting Button press
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        let buttonText = this.innerHTML;
        makeSound(buttonText);
        buttonAnimation(buttonText);

    });

}
//Detecting keyboard press
document.addEventListener('keydown', function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key){

    switch (key) {
        case 'w':
            let w = new Audio('./sounds/tom-1.mp3');
            w.play();
            break;
        case 'a':
            let a = new Audio('./sounds/tom-2.mp3');
            a.play();
            break;
        case 's':
            let s = new Audio('./sounds/tom-3.mp3');
            s.play();
            break;
        case 'd':
            let d = new Audio('./sounds/tom-4.mp3');
            d.play();
            break;
        case 'j':
            let j = new Audio('./sounds/crash.mp3');
            j.play();
            break;
        case 'k':
            let k = new Audio('./sounds/kick-bass.mp3');
            k.play();
            break;
        case 'l':
            let l = new Audio('./sounds/snare.mp3');
            l.play();
            break;
        default:
            console.log('nothing');
            break;
    }

}

function buttonAnimation(currentKey){
    let activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add('pressed');
    setTimeout(function(){
        activeButton.classList.remove('pressed');
    },200);

}

// constructor functions with method at end
//
// function BellBoy(name, age) {
//     this.name = name;
//     this.age = age;
//     this.clean = function () {
//         alert('moving method and associated function envoked');
//     }
// }
//
// var bellboy1 = new BellBoy('timmy', 19, );
// var bellboy2 = new BellBoy('sam', 29);
//
// console.log(bellboy1.name);
// bellboy2.clean();
