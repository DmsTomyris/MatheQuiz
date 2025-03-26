document.addEventListener('DOMContentLoaded', function() {
    const tasks = [
        { question: 'Was ist 3 * 4 + 3?', answer: 15 },
        { question: 'Was ist 5 * 5 - 1?', answer: 24 }
    ];
    
    let currentTaskIndex = 0;

    function loadTask() {
        const task = tasks[currentTaskIndex];
        document.querySelector('p').textContent = task.question;
        document.getElementById('answer').value = '';
        document.getElementById('result').textContent = '';
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
            loadTask();
        } else {
            resultElement.textContent += ' Alle Aufgaben sind erledigt!';
            document.getElementById('submit').disabled = true; // Deaktiviert den Button nach der letzten Aufgabe
        }
    });

    loadTask(); // Erste Aufgabe laden
});
