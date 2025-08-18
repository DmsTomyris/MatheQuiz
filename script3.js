document.addEventListener('DOMContentLoaded', function () {
    const params = new URLSearchParams(window.location.search);
    const playerName = params.get("name") || "Unbekannt";
    const playerAge = params.get("age") || "0";

    const tasks = [
        { question: '3 * 4 + 3?', answer: 15 },
        { question: '5 * 5 - 1?', answer: 24 },
        { question: '12 - 4 * 3?', answer: 0 },
        { question: '15 + 6 * 2?', answer: 27 },
        { question: '18 ÷ 3 + 5 * 2?', answer: 16 },
        // Weitere Aufgaben...
    ];

    let currentTaskIndex = 0;
    let currentLevel = 1;

    let currentQuestionNumber = 1;
    let totalTasksDone = 0;
    let wrongAnswers = 0;
    const formType = "Gamification";
    let dataSent = false; // Flag, um mehrfaches Senden zu verhindern

    // Verstecktes Formular für formsubmit.co
    const form = document.createElement('form');
    form.action = "https://formsubmit.co/ganuge.25@gmail.com";
    form.method = "POST";
    form.style.display = "none";

    // Eingabefelder für das Formular
    const fields = ['name', 'age', 'reached_task', 'wrong_answers', 'form_type', 'total_tasks_done'];
    fields.forEach(field => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = field;
        input.id = `form_${field}`;
        form.appendChild(input);
    });

    document.body.appendChild(form);

    // Funktion zum Senden der Daten
    function sendDataToFormSubmit() {
        if (dataSent) return; // Mehrfaches Senden verhindern
        dataSent = true; // Markiere als gesendet

        // Werte in das Formular einfügen
        document.getElementById('form_name').value = playerName;
        document.getElementById('form_age').value = playerAge;
        document.getElementById('form_reached_task').value = currentQuestionNumber;
        document.getElementById('form_wrong_answers').value = wrongAnswers;
        
        document.getElementById('form_form_type').value = formType;
        document.getElementById('form_total_tasks_done').value = totalTasksDone;

        form.submit(); // Formular absenden
    }

    function loadTask() {
        const task = tasks[currentTaskIndex + 5 * (currentLevel - 1)];
        document.getElementById('task').textContent = task.question;
        document.getElementById('answer').value = '';

    }

    document.getElementById('submit').addEventListener('click', function () {
        const userAnswer = parseInt(document.getElementById('answer').value);
        const correctAnswer = tasks[currentTaskIndex + (currentLevel - 1) * 5].answer;
        const resultElement = document.getElementById('result');
        const levelUpPanel = document.getElementById('levelUpPanel');
        const continueButton = document.getElementById('continueButton');

        if (isNaN(userAnswer)) {
            resultElement.textContent = 'Bitte geben Sie eine gültige Zahl ein!';
            resultElement.style.color = 'red';
            return;
        }

        totalTasksDone++;
        currentQuestionNumber++;

        if (userAnswer === correctAnswer) {
            resultElement.textContent = 'Richtig!';
            resultElement.style.color = 'green';
        } else {
            resultElement.textContent = `Falsch! Die richtige Antwort ist ${correctAnswer}.`;
            resultElement.style.color = 'red';
            wrongAnswers++;
        }

        

        // Level-Up
        if (currentTaskIndex + 1 === 5) {
            levelUpPanel.style.display = 'block';
            continueButton.addEventListener('click', function () {
                levelUpPanel.style.display = 'none';
                loadTask();
            }, { once: true }); // Listener nur einmal ausführen
        }

        currentTaskIndex++;
        if (currentTaskIndex % 5 === 0) {
            currentLevel++;
            currentTaskIndex = 0;
        }

        if (currentQuestionNumber <= tasks.length) {
            loadTask();
        } else {
            resultElement.textContent += ' Alle Aufgaben sind erledigt!';
            document.getElementById('submit').disabled = true;

            // Fortschritt senden und zur Startseite weiterleiten
            
        }
    });

    loadTask();
    sendDataToFormSubmit();

    // Daten senden, wenn die Seite geschlossen wird
    window.addEventListener("beforeunload", sendDataToFormSubmit);
    window.addEventListener("offline", sendDataToFormSubmit);
});