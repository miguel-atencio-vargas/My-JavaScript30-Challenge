
// Typed.js
const lines = ['hey there!', 'this is my #30 coding challenges', 'from <a href="https://javascript30.com" target="_blank">Wesbos Academy</a>', 'to practice vanilla JS', 'you can check them right now', 'have a great day!'];

let line = document.querySelector('.line-1');
let content = line.querySelector('.c-command__content');

const typed1 = new Typed(content, {
    strings: [lines[0]],
    typeSpeed: 45,
    showCursor: false
});

typed1.complete = function (){
    line = document.querySelector('.line-2');
    line.classList.remove('o-hidde');
    content = line.querySelector('.c-command__content');
    const typed2 = new Typed(content, {
        strings: [lines[1]],
        typeSpeed: 45,
        showCursor: false
    });
    typed2.complete = function(){
        line = document.querySelector('.line-3');
        line.classList.remove('o-hidde');
        content = line.querySelector('.c-command__content');
        const typed3 = new Typed(content, {
            strings: [lines[2]],
            typeSpeed: 40,
            showCursor: false
        });
        typed3.complete = function () {
            line = document.querySelector('.line-4');
            line.classList.remove('o-hidde');
            content = line.querySelector('.c-command__content');
            const typed4 = new Typed(content, {
                strings: [lines[3]],
                typeSpeed: 60,
                showCursor: false
            });
            typed4.complete = function () {
                line = document.querySelector('.line-5');
                line.classList.remove('o-hidde');
                content = line.querySelector('.c-command__content');
                const typed5 = new Typed(content, {
                    strings: [lines[4]],
                    typeSpeed: 45,
                    showCursor: false
                });
                typed5.complete = function () {
                    document.querySelector('.c-carousel').classList.remove('o-hidde');                    
                    line = document.querySelector('.line-6');
                    line.classList.remove('o-hidde');
                    content = line.querySelector('.c-command__content');
                    const typed6 = new Typed(content, {
                        strings: [lines[5]],
                        typeSpeed: 45
                    });
                    
                    
                }
            }
        }
    }
}



const card = document.querySelectorAll('.c-card');
function onClickCard(){
    this.querySelector('.c-card-item__buttons').classList.toggle('o-hidde');
    this.querySelector('.c-card-item__img').classList.toggle('o-blur');
}

card.forEach(e => {
    e.addEventListener('click', onClickCard);
});


