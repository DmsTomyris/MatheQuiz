document.addEventListener('DOMContentLoaded', function () {
    const params = new URLSearchParams(window.location.search);
    const playerName = params.get("name") || "Unbekannt";
    const playerAge = params.get("age") || "0";

        const tasks = [
        { question: '5 + 3', answer: 8 },
        { question: '12 - 7', answer: 5 },
        { question: '4 × 6', answer: 24 },
        { question: '28 ÷ 7', answer: 4 },
        { question: '9 + 6 - 4', answer: 11 },
        { question: '15 ÷ 3 + 2', answer: 7 },
        { question: '(5 × 2) - 3', answer: 7 },
        { question: '20 ÷ 4 + 7', answer: 12 },
        { question: '(3 + 6) × 2', answer: 18 },
      
        { question: '2^2', answer: 4 },
        { question: '√49', answer: 7 },
        { question: '5^2 - 9', answer: 16 },
        { question: '√36 + 8', answer: 14 },
        { question: '(3^2) + 4', answer: 13 },
        { question: '10^2 ÷ 5', answer: 20 },
        { question: '√81 - 2', answer: 7 },
        { question: '2^3 + 7', answer: 15 },
        { question: '(25 ÷ 5)^2', answer: 25 },
        { question: '√100 + 3', answer: 13 },
      
        { question: 'x + 5 = 12', answer: 7 },
        { question: '2x = 18', answer: 9 },
        { question: 'x - 4 = 9', answer: 13 },
        { question: '3x + 2 = 11', answer: 3 },
        { question: '(x ÷ 2) + 3 = 7', answer: 8 },
        { question: '4x - 1 = 15', answer: 4 },
        { question: '√x = 5', answer: 25 },
        { question: '(x ÷ 3) + 2 = 10', answer: 24 },
        { question: '(x + 5) ÷ 2 = 7', answer: 9 },
        { question: '2x + 3 = 17', answer: 7 },
      
        { question: '(x - 2) × 3 = 12', answer: 6 },
        { question: '(x ÷ 4) + 6 = 10', answer: 16 },
        { question: '5x - 7 = 18', answer: 5 },
        { question: '(2x + 4) ÷ 3 = 6', answer: 7 },
        { question: '(x ÷ 2) - 3 = 5', answer: 16 },
        { question: '√(x + 16) = 6', answer: 20 },
        { question: '7x + 3 = 24', answer: 3 },
        { question: '(x - 5) ÷ 2 = 7', answer: 19 },
        { question: '(x ÷ 3) - 2 = 4', answer: 18 },
        { question: '4x - 10 = 14', answer: 6 },
        { question: '√(2x + 1) = 5', answer: 12 },
        { question: '6x + 2 = 38', answer: 6 },
        { question: '(x ÷ 5) + 7 = 9', answer: 10 },
        { question: '(2x - 4) ÷ 2 = 10', answer: 12 },
        { question: '2x - 8 = 0', answer: 4 },
        { question: '(x ÷ 2) - 3 = 8', answer: 22 },
        { question: '(3x + 6) ÷ 2 = 15', answer: 8 },
        { question: '10x - 5 = 95', answer: 10 },
      
        { question: '(x ÷ 2) + 5 = 11', answer: 12 },
        { question: '3x - 12 = 0', answer: 4 },
        { question: '5x - (2x + 1) = 11', answer: 4 },
        { question: '4(x - 3) = 20', answer: 8 },
        { question: '√(3x + 1) = 10', answer: 33 },
        { question: '(x ÷ 3) + 2 = 8', answer: 18 },
        { question: '(2x + 5) - (x - 3) = 10', answer: 2 },
        { question: '√(x + 9) - 2 = 4', answer: 27 },
        { question: '(x ÷ 5) - 3 = 2', answer: 25 },
        { question: '(x - 7) ÷ 2 = 9', answer: 25 },
        { question: '(2x + 1) ÷ 3 = 5', answer: 7 },
        { question: '√(4x - 4) = 8', answer: 17 },
        { question: '5(x - 2) = 3x + 4', answer: 7 },
        { question: '2x + 7 = 21', answer: 7 },
      
        { question: '3x - 4 = 5', answer: 3 },
        { question: '√(x + 25) = 10', answer: 75 },
        { question: '(2x + 6) ÷ 2 = 10', answer: 7 },
        { question: '(x ÷ 4) - (x ÷ 8) = 3', answer: 24 },
        { question: '√(2x - 8) = 6', answer: 22 },
        { question: '(x - 3) ÷ 2 = 7', answer: 17 },
        { question: '2x - 8 = 0', answer: 4 },
        { question: '(x ÷ 3) + 4 = 13', answer: 27 },
        { question: '√(5x - 9) = 6', answer: 9 },
        { question: '(2x - 9) ÷ 3 = 7', answer: 15 },
        { question: '(2x + 1) ÷ 5 = 7', answer: 17 },
        { question: '√(3x - 12) = 6', answer: 16 },
        { question: '(x - 4) ÷ 2 = 6', answer: 16 },
        { question: '2x ÷ 2 = 10', answer: 10 },
        { question: 'x - 25 = 0', answer: 25 },
        { question: '(3x - 3) + 2 = 17', answer: 6 },
        { question: '√(x - 16) = 5', answer: 41 },
        { question: '(x + x) ÷ 2 = 10', answer: 10 },
        { question: '3x - 5 = 10', answer: 5 },
        { question: '(x - 7) ÷ 2 = 10', answer: 27 },
      
        { question: 'x + 2 = 49', answer: 47 },
        { question: '√(x + 4) = 10', answer: 96 },
        { question: '(x - 2) ÷ 3 = 7', answer: 23 },
        { question: 'x + 3x - 28 = 0', answer: 7 },
        { question: '(4x ÷ 3) - 4 = 0', answer: 3 },
        { question: '√(2x + 8) = 10', answer: 46 },
        { question: 'x - 15 = 0', answer: 15 },
        { question: '(3x ÷ 2) - 6 = 3', answer: 6 },
        { question: '(x + 2) ÷ 2 = 5', answer: 8 },
        { question: '√(x - 10) = 4', answer: 26 },
        { question: '(x + x - 6) ÷ 2 = 10', answer: 13 },
              { "question": "x + 7 = 20", "answer": 13 },
  { "question": "2x - 4 = 10", "answer": 7 },
  { "question": "√(x + 9) = 6", "answer": 27 },
  { "question": "x ÷ 3 + 5 = 9", "answer": 12 },
  { "question": "(x - 4) ÷ 2 = 7", "answer": 18 },
  { "question": "√(3x - 2) = 10", "answer": 34 },
  { "question": "x - 8 = 25", "answer": 33 },
  { "question": "(2x + 4) ÷ 3 = 8", "answer": 10 },
  { "question": "√(x + 16) = 11", "answer": 105 },
  { "question": "x ÷ 2 - 5 = 1", "answer": 12 },
  { "question": "x + 12 = 30", "answer": 18 },
  { "question": "(x - 6) ÷ 3 = 5", "answer": 21 },
  { "question": "√(x - 5) = 9", "answer": 86 },
  { "question": "2x + 7 = 19", "answer": 6 },
  { "question": "(x + 8) ÷ 4 = 6", "answer": 16 },
  { "question": "√(2x + 1) = 7", "answer": 24 },
  { "question": "x - 20 = 17", "answer": 37 },
  { "question": "3x ÷ 2 + 1 = 10", "answer": 6 },
  { "question": "(x + 4) ÷ 3 = 9", "answer": 23 },
  { "question": "√(x + 25) = 12", "answer": 119 },
  { "question": "x ÷ 4 - 2 = 5", "answer": 28 },
  { "question": "2x - 11 = 3", "answer": 7 },
  { "question": "(x - 9) ÷ 5 = 4", "answer": 29 },
  { "question": "√(4x + 1) = 9", "answer": 20 },
  { "question": "x + 30 = 55", "answer": 25 },
  { "question": "(x + 10) ÷ 2 = 13", "answer": 16 },
  { "question": "√(x - 21) = 8", "answer": 85 },
  { "question": "x ÷ 6 + 2 = 9", "answer": 42 },
  { "question": "(3x - 6) ÷ 3 = 4", "answer": 6 },
  { "question": "√(5x - 20) = 10", "answer": 24 },
  { "question": "x - 11 = 0", "answer": 11 },
  { "question": "2x + 3 = 25", "answer": 11 },
  { "question": "(x + 2) ÷ 4 = 5", "answer": 18 },
  { "question": "√(x + 7) = 14", "answer": 189 },
  { "question": "x ÷ 2 - 3 = 17", "answer": 40 },
  { "question": "(x - 1) ÷ 2 = 10", "answer": 21 },
  { "question": "√(2x + 4) = 12", "answer": 70 },
  { "question": "x + 40 = 90", "answer": 50 },
  { "question": "3x ÷ 2 - 5 = 13", "answer": 12 },
  { "question": "(x + 6) ÷ 3 = 14", "answer": 36 },
  { "question": "√(x - 15) = 11", "answer": 136 },
  { "question": "x ÷ 5 + 4 = 10", "answer": 30 },
  { "question": "(x - 4) ÷ 2 = 20", "answer": 44 },
  { "question": "√(x + 10) = 18", "answer": 314 },
  { "question": "2x - 9 = 7", "answer": 8 },
  { "question": "(x + 30) ÷ 6 = 9", "answer": 24 },
  { "question": "√(x + 5) = 13", "answer": 164 },
  { "question": "x ÷ 7 - 2 = 6", "answer": 56 },
  { "question": "3x ÷ 2 + 4 = 19", "answer": 10 },
  { "question": "(x - 12) ÷ 3 = 11", "answer": 45 }

      ];

    let currentTaskIndex = 0;
    let currentLevel = 1;
    let score = 0;
    let currentQuestionNumber = 1;
    let totalTasksDone = 0;
    let wrongAnswers = 0;
    const formType = "Gamification";


    function sendDataToFormSubmit() {
        
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
        const levelUpPanel = document.getElementById('levelUpPanel');
        const continueButton = document.getElementById('continueButton');

        totalTasksDone++;

        if (userAnswer === correctAnswer) {
            resultElement.textContent = 'Richtig!';
            resultElement.style.color = 'green';
            score += 5;
        } else {
            resultElement.textContent = 'Falsch!';
            resultElement.style.color = 'red';
            wrongAnswers++;
        }
        document.getElementById("scoreValue").textContent = score;
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

            // Fortschritt sofort senden
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
        sendDataToFormSubmit(); // Daten senden
        window.location.href = 'ende.html'; // Zur Startseite weiterleiten
    });
    document.getElementById('closeButtonPanel').addEventListener('click', function () {
        sendDataToFormSubmit(); // Daten senden
        window.location.href = 'ende.html'; // Zur Startseite weiterleiten
    });
});





