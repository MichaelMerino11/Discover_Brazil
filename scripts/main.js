document.getElementById('quiz-form').addEventListener('submit', async function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const q1 = document.getElementById('q1').value.toLowerCase();
    const q2 = document.getElementById('q2').value.toLowerCase();
    const q3 = document.getElementById('q3').value.toLowerCase();
    const q4 = document.getElementById('q4').value.toLowerCase();
    const q5 = document.getElementById('q5').value.toLowerCase();

    let score = 0;

    if (q1 === 'portugués' || q1 === 'portugues') score++;
    if (q2 === 'carnaval') score++;
    if (q3 === 'catolicismo') score++;
    if (q4 === 'feijoada') score++;
    if (q5 === 'fútbol' || q5 === 'futbol') score++;

    const response = await fetch('http://localhost:3000/submit-quiz', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, score }),
    });

    if (response.ok) {
        document.getElementById('result').innerText = `Gracias, ${username}. Tu puntaje es ${score} de 5.`;
    } else {
        document.getElementById('result').innerText = 'Hubo un problema al compartir los resultados. Intenta de nuevo.';
    }
});
