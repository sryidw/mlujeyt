let lastBettingTime = 0; // Добавляем переменную для отслеживания последнего времени "betting"

function getRan(min, max) {
    return Math.random() * (max - min) + min;
}

function checkSignal() {
    let randomNumber1 = getRan(1.3, 5.2).toFixed(2);
    let resultText = `x${randomNumber1}`;
    document.getElementById("responseText").textContent = resultText;
    localStorage.setItem('resultText', resultText);
    document.getElementById('responseText2').textContent = "Сигнал получен!";
    lastBettingTime = Date.now();
}

document.getElementById("signalButton").addEventListener("click", checkSignal);
