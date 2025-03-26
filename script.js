document.addEventListener('DOMContentLoaded', function() {
    const tasks = [
        { question: 'Was ist 3 * 4 + 3?', answer: 15 },
        { question: 'Was ist 5 * 5 - 1?', answer: 24 },
        { question: 'Was ist 12 - 4 * 3?', answer: 0 },
        { question: 'Was ist 15 + 6 * 2?', answer: 27 },
        { question: 'Was ist 18 ÷ 3 + 5 * 2?', answer: 16 },
        { question: 'Was ist 10 + 5 * 2?', answer: 20 },
        { question: 'Was ist 25 - 9 ÷ 3?', answer: 22 },
        { question: 'Was ist 6^2 - 5?', answer: 31 },
        { question: 'Was ist 4 * 10 - 3?', answer: 37 },
        { question: 'Was ist 33 + 1 ÷ 2?', answer: 27 },
        { question: 'Was ist 5 * 5 + 2^3?', answer: 33 },
        { question: 'Was ist 9 + 6 * 2 - 4?', answer: 17 },
        { question: 'Was ist 30 ÷ 5 + 7?', answer: 13 },
        { question: 'Was ist 49 + 6 * 3?', answer: 25 },
        { question: 'Was ist 8 + 2 * 4 - 5?', answer: 11 },
        { question: 'Was ist 5^2 - 4 * 3?', answer: 13 },
        { question: 'Was ist 100 ÷ 4 + 2^3?', answer: 33 },
        { question: 'Was ist 6^2 ÷ 3 + 5?', answer: 17 },
        { question: 'Was ist 81 ÷ 9 + 64?', answer: 17 },
        { question: 'Was ist 53 - 10 ÷ 5?', answer: 123 },
        { question: 'Was ist 12 * 2 - 4 + 3?', answer: 23 },
        { question: 'Was ist 144 ÷ 12 + 3^3?', answer: 27 }
    ];
    
    let currentTaskIndex = 0;

    function loadTask() {
        const task = tasks[currentTaskIndex];
        document.querySelector('p').textContent = task.question; // Aktualisiert die Frage im HTML
        document.getElementById('answer').value = ''; // Setzt das Eingabefeld zurück
        document.getElementById('result').textContent = ''; // Setzt das Ergebnis zurück
    }

    document.getElementById('submit').addEventListener('click', function() {
        const userAnswer = parseInt(document.getElementById('answer').value);
        const correctAnswer = tasks[currentTaskIndex].answer;

        const resultElement = document.getElementById('result');
        if (userAnswer === correctAnswer) {
            resultElement.textContent = 'Richtig!';
            resultElement.style.color = 'green';
        } else {
            resultElement.textContent = 'Falsch!';
            resultElement.style.color = 'red';
        }

        // Nächste Aufgabe laden
        currentTaskIndex++;
        if (currentTaskIndex < tasks.length) {
            loadTask(); // Lädt die nächste Aufgabe
        } else {
            resultElement.textContent += ' Alle Aufgaben sind erledigt!';
            document.getElementById('submit').disabled = true; // Deaktiviert den Button nach der letzten Aufgabe
        }
    });

    loadTask(); // Lädt die erste Aufgabe
});
