document.addEventListener('DOMContentLoaded', function() {
    const tasks = [
        { question: '3 * 4 + 3?', answer: 15 },
        { question: '5 * 5 - 1?', answer: 24 },
        { question: '12 - 4 * 3?', answer: 0 },
        { question: '15 + 6 * 2?', answer: 27 },
        { question: '18 ÷ 3 + 5 * 2?', answer: 16 },
        { question: '10 + 5 * 2?', answer: 20 },
        { question: '25 - 9 ÷ 3?', answer: 22 },
        { question: '6^2 - 5?', answer: 31 },
        { question: '4 * 10 - 3?', answer: 37 },
        { question: '33 + 2 ÷ 2?', answer: 34 },
        { question: '5 * 5 + 2^3?', answer: 33 },
        { question: '9 + 6 * 2 - 4?', answer: 17 },
        { question: '30 ÷ 5 + 7?', answer: 13 },
        { question: '49 + 6 * 3?', answer: 67 },
        { question: '8 + 2 * 4 - 5?', answer: 11 },
        { question: '5^2 - 4 * 3?', answer: 13 },
        { question: '100 ÷ 4 + 2^3?', answer: 33 },
        { question: '6^2 ÷ 3 + 5?', answer: 17 },
        { question: '81 ÷ 9 + 64?', answer: 73 },
        { question: '53 - 10 ÷ 5?', answer: 51 },
        { question: '12 * 2 - 4 + 3?', answer: 21 },
        { question: '144 ÷ 12 + 3^3?', answer: 21 },
        { question: '125 ÷ 5 + 24?', answer: 49 },
        { question: '7^2 − 64 ÷ 8?', answer: 41 },
        { question: '10^2 ÷ 5 + 3^3', answer: 29 },
    ];
    
    let currentTaskIndex = 0;
    let currentLevel = 1;
    let score = 96; // Initialize score variable


    let startTime = Date.now(); // Startzeit erfassen
    function calculateTimeSpent() { const endTime = Date.now();
                                  
        }
    function saveTimeToFile() { 
        const fs = require('fs'); 
        const timeSpent = calculateTimeSpent(); 
        const timeEntry = `- ${new Date().toISOString()}: ${timeSpent / 1000} Sekunden verbracht\n`;
        fs.appendFile('zeiten.md', timeEntry, (err) => {
        if (err) {
            console.error('Fehler beim Schreiben in die Datei:', err);} 
        else {
            console.log('Zeit erfolgreich in "zeiten.md" gespeichert.');
        }});}
    window.addEventListener('beforeunload', saveTimeToFile);

    
    function loadTask() {
        const task = tasks[currentTaskIndex+5*(currentLevel-1)];
        document.getElementById('task').textContent = task.question; // Aktualisiert die Frage im HTML
        document.getElementById('answer').value = ''; // Setzt das Eingabefeld zurück
        document.getElementById('taskNumber').textContent = `Aufgabe: ${currentTaskIndex + 1} von 5`; // Aktualisiert die Aufgabenanzahl
        document.getElementById('level').textContent = `Level: ${currentLevel}`; // Aktualisiert das Level
        document.getElementById('score').textContent = `${score}% der Spieler machen noch eine Aufgabe!`; // Aktualisiert die Punktzahl
    }

document.getElementById('submit').addEventListener('click', function() {
    document.getElementById('answer').addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            document.getElementById('submit').click(); // Trigger button click on Enter key
        }
    });

        const userAnswer = parseInt(document.getElementById('answer').value);
        const correctAnswer = tasks[currentTaskIndex+(currentLevel-1)*5].answer;
        const resultElement = document.getElementById('result');
        const levelUpPanel = document.getElementById('levelUpPanel');
        const continueButton = document.getElementById('continueButton');
      

        


        
        score -= Math.floor(Math.random() * 7) + 1;; // Increment score by 5 for a correct answer
        const scoreElement = document.getElementById('score');
        scoreElement.classList.add('fadeIn'); // Add animation class
        scoreElement.classList.remove('fadeIn'); // Remove animation class after animation
        setTimeout(() => {
            scoreElement.classList.add('fadeIn'); // Re-add animation class to trigger it again
        }, 10); // Short delay to ensure animation plays again

        


    if (currentTaskIndex+1 === 5) {
        levelUpPanel.style.display = 'block'; // Show the level up panel
    }

        document.getElementById('scor').textContent = `Du bist besser als ${100-score}% der Spieler`; // Update score in the panel
        continueButton.addEventListener('click', function() {
            levelUpPanel.style.display = 'none'; // Hide the panel when continuing
            loadTask(); // Load the next task
        });

        if (userAnswer === correctAnswer) {
            resultElement.textContent = 'Richtig!'; 
            


            resultElement.style.color = 'green';
        } else {
            resultElement.textContent = 'Falsch!';
            resultElement.style.color = 'red';
        }


        // Nächste Aufgabe laden
        currentTaskIndex++;
        if (currentTaskIndex % 5 === 0) {
            currentLevel++; // Erhöht das Level alle 5 Aufgaben
            currentTaskIndex = 0; // Reset task index when level increases
            
            

        }

        if (currentTaskIndex < tasks.length) {
            loadTask(); // Lädt die nächste Aufgabe
        } else {
            resultElement.textContent += ' Alle Aufgaben sind erledigt!';
            document.getElementById('submit').disabled = true; // Deaktiviert den Button nach der letzten Aufgabe
        }
    });

    loadTask(); // Lädt die erste Aufgabe
});
