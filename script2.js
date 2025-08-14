document.addEventListener('DOMContentLoaded', function() {

    const params = new URLSearchParams(window.location.search);
    const playerName = params.get("name") || "Unbekannt";
    const playerAge = params.get("age") || "0";

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
    let score = 0;
    let currentQuestionNumber = 1;
    let totalTasksDone = 0;
    let wrongAnswers = 0;
    const formType = "Gamification";

    // Funktion zum Senden der Daten an getform.io
    function sendProgress() {
        const data = new FormData();
        data.append("name", playerName);
        data.append("age", playerAge);
        data.append("reached_task", currentQuestionNumber);
        data.append("wrong_answers", wrongAnswers);
        data.append("score", score);
        data.append("form_type", formType);
        navigator.sendBeacon("https://getform.io/f/bmdmdrga", data);
    }

    function loadTask() {
        const task = tasks[currentTaskIndex + 5 * (currentLevel - 1)];
        document.getElementById('task').textContent = task.question;
        document.getElementById('answer').value = '';
        document.getElementById('score').textContent = `Punkte: ${score}`;
    }

    document.getElementById('submit').addEventListener('click', function() {
        const userAnswer = parseInt(document.getElementById('answer').value);
        const correctAnswer = tasks[currentTaskIndex + (currentLevel - 1) * 5].answer;
        const resultElement = document.getElementById('result');
        const levelUpPanel = document.getElementById('levelUpPanel');
        const continueButton = document.getElementById('continueButton');

        totalTasksDone++;
        currentQuestionNumber++;

        if (userAnswer === correctAnswer) {
            resultElement.textContent = 'Richtig!';
            resultElement.style.color = 'green';
            score += 5;
        } else {
            resultElement.textContent = 'Falsch!';
            resultElement.style.color = 'red';
            wrongAnswers++;
        }

        document.getElementById('score').textContent = `Punkte: ${score}`;

        if (currentTaskIndex + 1 === 5) {
            levelUpPanel.style.display = 'block';
            continueButton.addEventListener('click', function() {
                levelUpPanel.style.display = 'none';
                loadTask();
            });
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
            sendProgress();
            setTimeout(() => {
                window.location.href = "index.html";
            }, 800);
        }

        // Daten bei jeder Antwort senden
        sendProgress();
    });

    loadTask();

    // Auch bei Schließen oder Offline senden
    window.addEventListener("beforeunload", sendProgress);
    window.addEventListener("offline", sendProgress);
});
