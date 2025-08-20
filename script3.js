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
        { question: '10 + 5 * 2?', answer: 20 },
        { question: '25 - 9 ÷ 3?', answer: 22 },
        { question: '6^2 - 5?', answer: 31 },
        { question: '4 * 10 - 3?', answer: 37 },
        { question: '33 + 2 ÷ 2?', answer: 34 },

        // Easy tasks
        { question: '3 + 4?', answer: 7 },
        { question: '5 * 2?', answer: 10 },
        { question: '12 - 8?', answer: 4 },
        { question: '15 ÷ 3?', answer: 5 },
        { question: '6 + 7?', answer: 13 },

        // Slightly harder tasks
        { question: '8 * 3 - 5?', answer: 19 },
        { question: '20 ÷ 4 + 6?', answer: 11 },
        { question: '9 * 2 + 7?', answer: 25 },
        { question: '18 - 6 ÷ 2?', answer: 15 },
        { question: '10 + 5 * 2?', answer: 20 },

        // Medium difficulty
        { question: '25 - 9 ÷ 3?', answer: 22 },
        { question: '6^2 - 5?', answer: 31 },
        { question: '4 * 10 - 3?', answer: 37 },
        { question: '33 + 2 ÷ 2?', answer: 34 },
        { question: '(8 + 4) * 2?', answer: 24 },

        // Harder tasks
        { question: '50 ÷ (5 + 5)?', answer: 5 },
        { question: '7 * (8 - 3)?', answer: 35 },
        { question: '9^2 - 20?', answer: 61 },
        { question: '(15 ÷ 3) + 4 * 2?', answer: 11 },
        { question: '20 - (5 * 3)?', answer: 5 },

        // Advanced tasks
        { question: '8 * (7 + 2) - 10?', answer: 62 },
        { question: '50 ÷ (5 + 5) + 6?', answer: 11 },
        { question: '(12 * 3) - (15 ÷ 3)?', answer: 33 },
        { question: '18 ÷ (2 + 1) + 7?', answer: 13 },
        { question: '(25 + 5) * 2?', answer: 60 },

        // Very advanced tasks
        { question: '30 - (6 ÷ 2) + 8?', answer: 35 },
        { question: '40 ÷ (8 ÷ 2) + 9?', answer: 14 },
        { question: '(6 * 6) - (10 ÷ 2)?', answer: 31 },
        { question: '14 + (7 * 3) - 5?', answer: 30 },
        { question: '(21 ÷ 3) + (8 * 2)?', answer: 25 },

        // Expert-level tasks
        { question: '10 * (4 - 2) + 15?', answer: 35 },
        { question: '(9 * 5) + (6 ÷ 2)?', answer: 48 },
        { question: '(16 ÷ 4) + (12 * 2)?', answer: 28 },
        { question: '(8 * 8) - (20 ÷ 4)?', answer: 60 },
        { question: '50 - (10 ÷ 2) + (5 * 3)?', answer: 60 },

        // Challenge tasks
        { question: '(7 * 7) + (3 * 2)?', answer: 55 },
        { question: '(18 ÷ 3) + (10 * 2)?', answer: 26 },
        { question: '(12 * 2) - (8 ÷ 4)?', answer: 23 },
        { question: '(25 + 15) ÷ (5 + 5)?', answer: 4 },
        { question: '(30 - 9) ÷ (3 + 3)?', answer: 3 }
    ];

    let currentTaskIndex = 0;
    let currentLevel = 1;
    let currentQuestionNumber = 1;
    let totalTasksDone = 0;
    let wrongAnswers = 0;
    const formType = "Gamification";
    let dataSent = false; // Flag, um mehrfaches Senden zu verhindern

    function sendDataToFormSubmit() {
        if (dataSent) return;
        dataSent = true;
    
        const formData = new FormData();
        formData.append("name", playerName);
        formData.append("age", playerAge);
        formData.append("reached_task", currentQuestionNumber);
        formData.append("wrong_answers", wrongAnswers);
        formData.append("form_type", formType);
        formData.append("score", score);
        formData.append("total_tasks_done", totalTasksDone);
    
        // Mit fetch senden
        fetch("https://formsubmit.co/8285afc7daf819da1887c55e23317ab8", {
            method: "POST",
            body: formData,
            keepalive: true
        })
        .then(response => console.log("Data sent via FormSubmit:", response.ok))
        .catch(error => console.error("Error sending data:", error));
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

        totalTasksDone++;

        if (userAnswer === correctAnswer) {
            resultElement.textContent = 'Richtig!';
            resultElement.style.color = 'green';
        } else {
            resultElement.textContent = 'Falsch!';
            resultElement.style.color = 'red';
            wrongAnswers++;
        }

        currentTaskIndex++;
        currentQuestionNumber++;

        if (currentTaskIndex % 5 === 0) {
            // Punkte auch im Panel anzeigen
            document.getElementById("scor").textContent = "Punkte: " + score;

            // Panel einblenden
            levelUpPanel.style.display = "block";
            currentLevel++;
            currentTaskIndex = 0;
        }

        if (currentQuestionNumber <= tasks.length) {
            loadTask();
        } else {
            resultElement.textContent += ' Alle Aufgaben sind erledigt!';
            document.getElementById('submit').disabled = true;
            sendDataToFormSubmit();
        }
    });

    loadTask();

    // Bestätigungsfenster beim Schließen der Seite
    window.addEventListener("beforeunload", function (event) {
        sendDataToFormSubmit();
        
    });

    continueButton.addEventListener("click", function () {
        levelUpPanel.style.display = "none";
        loadTask(); // nächste Aufgabe erst hier laden
    });

    document.getElementById('closeButton').addEventListener('click', function () {
        sendDataToFormSubmit();
        window.location.href = 'ende.html';
    });
    document.getElementById('closeButtonPanel').addEventListener('click', function () {
        sendDataToFormSubmit(); // Daten senden
        window.location.href = 'ende.html'; // Zur Startseite weiterleiten
    });
});

