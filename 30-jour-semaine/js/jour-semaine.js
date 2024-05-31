'use strict';
document.addEventListener('DOMContentLoaded', () => {
const JOURS_FR = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche']
const JOURS_EN = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
 
console.log("Bonjour");
const languageCheckbox = document.getElementById("language");
        const dayNumberInput = document.getElementById("dayNumber");
        const dayDisplay = document.getElementById("dayDisplay");
        let selectedLanguage = "fr";
        let selectedDayNumber = 0;
        let label= document.querySelector("[for='dayNumber']");
        console.log(languageCheckbox);
 
 
        languageCheckbox.addEventListener("change", () => {
                if (languageCheckbox.checked) {
                    selectedLanguage = "en";
                } else {
                    selectedLanguage = "fr";
                }
            updateDayDisplay();
 
 
        });
 
        
        dayNumberInput.addEventListener("input", () => {
            selectedDayNumber = parseInt(dayNumberInput.value, 10);
            updateDayDisplay();
        });
 
    
        function updateDayDisplay() {
            if (selectedDayNumber >= 0 && selectedDayNumber <= 6) {
                let dayName;
                    if (selectedLanguage === "fr") {
                        dayName = JOURS_FR[selectedDayNumber];
                    } else {
                        dayName = JOURS_EN[selectedDayNumber];
                    }
                label.textContent = ` ${dayName}`;
            }
        }
 
        
        updateDayDisplay();
});