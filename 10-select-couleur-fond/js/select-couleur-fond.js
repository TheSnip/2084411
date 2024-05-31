'use strict'

// Le domContent crst pour actualiser la page
document.addEventListener('DOMContentLoaded', (event) => {
    const colorSelect = document.getElementById('colorSelect');

 // L'evenement d'écoute quand tu nousallos cliquer pour changer la photo
    colorSelect.addEventListener('change', (event) => {
        document.body.style.backgroundColor = event.target.value;
    });
});
