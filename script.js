let buttonPrevs = document.querySelectorAll('#carousel button[data-bs-slide="prev"]');
let buttonNexts = document.querySelectorAll('#carousel button[data-bs-slide="next"]');


function hiddenButton() {
    for (const buttonNext of buttonNexts) {
        buttonNext.style.visibility = 'hidden';
    }
    for (const buttonPrev of buttonPrevs) {
        buttonPrev.style.visibility = 'hidden';
    }
}

function showButton() {
    for (const buttonNext of buttonNexts) {
        buttonNext.style.visibility = 'visible';
    }
    for (const buttonPrev of buttonPrevs) {
        buttonPrev.style.visibility = 'visible';
    }
}


function main(){
    let audio = document.getElementById("myAudio").play();
    for (const buttonPrev of buttonPrevs) {
        buttonPrev.addEventListener('click', () => {
            hiddenButton();
            setTimeout(showButton, 200);
        });
    }
    for (const buttonNext of buttonNexts) {
        buttonNext.addEventListener('click', () => {
            hiddenButton();
            setTimeout(showButton, 1000);
        });
    }
}



/* Funzione per il comportamento dei buttons del carousel */
window.onload = main;
