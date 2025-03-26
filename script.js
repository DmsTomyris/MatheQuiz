document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('submit').addEventListener('click', function() {

    const userAnswer = parseInt(document.getElementById('answer').value);
    const correctAnswer = 18;

    const resultElement = document.getElementById('result');
    if (userAnswer === correctAnswer) {
        resultElement.textContent = 'Richtig!';
        resultElement.style.color = 'green';
    } else {
        resultElement.textContent = 'Falsch!';
        resultElement.style.color = 'red';
    }
    });
});
