'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const numberInput = document.getElementById('numberInput');
    const numberDiv = document.getElementById('numberDiv');


    const updateImage = (number) => {
    
        if (number >= 0 && number <= 9) {
            const imgElement = document.createElement('img');
            imgElement.src = `image/${number}.jpg`;
            imgElement.alt = `Image chiffre ${number}`;


            numberDiv.innerHTML = '';
            numberDiv.appendChild(imgElement);
        }
    };

    
    numberInput.addEventListener('input', (event) => {
        const number = parseInt(event.target.value, 10);
        updateImage(number);
    });

    numberInput.addEventListener('keyup', (event) => {
        const number = parseInt(event.target.value, 10);
        updateImage(number);
    });
    updateImage(parseInt(numberInput.value, 10));
});
