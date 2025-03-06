document.addEventListener("DomContentLoaded", ( ) => {
    const questionElement = document.getElementById("question");
    const buttons = document.querySelectorAll (".answer.btn");
    const scoreElement = document.getElementById("score");

    let currentQuestion = 0;
    let score = 0;

    const questions = [
        {
            question: "Vad står HTML för?",
            answers: ["HyperText Makrup Language", "HighText Machine Language", "Home Tool Markup Language", "Hyperlinks Text Management Language"],
            correct: 0
        },
        {
            question: "Vilket år skapades JavaScript?",
            answers: ["1995", "2000", "1990", "1985"],
            correct: 0
        }
    ];
    function loadQuestion() {
        const q = questions[currentQuestion];
        questionElement.textContent = q.question;
        buttons.forEach((buttons, index) =>{
            buttons.textContent = q.answers[index]
            buttons.onclick = () => {
                if (index === q.correct) {
                    score++;
                    scoreElement.textContent = `Poäng: ${score}`;
                }
                currentQuestion++;
                if(currentQuestion < questions.length) {
                    loadQuestion();
                }else {
                    questionElement.textContent = "Spelet är slut!";
                    buttons.forEach(btn => btn.style.display = "none");
                }
            };
        });
    }

    loadQuestion();
});