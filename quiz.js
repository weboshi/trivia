//Array of Questions and Answers
var questions = [
        {
            Question: "Which dessert is best?", 
            answers: {a:"pie", b:"pudding", c:"flan", d:"lava cake"},
            answer: "c", 
                }, 
        { 
            Question: "Which color is best?", 
            answers: {a:"Blue", b:"Green", c:"Red", d:"Yellow"},
            answer: "c",
                },
        {
            Question: "What is the highest grossing anime movie of all time?",
            answers: {a:"Spirited Away", b:"Howl's Moving Castle", c:"Your Name(Kimi no na wa)", d:"Princess Mononoke"},
            answer: "c",
                },
        {
            Question: "Which of the following is NOT a Studio Trigger anime?",
            answers: {a:"Kisnaiver", b:"Little Witch Academia", c:"Kill la Kill", d:"Diebuster"},
            answer: "d",
                },
        {
            Question: "If you had $70.00, you could purchase...?",
            answers: {a:"PUBG and Overwatch(Standard)", b:"Yeezy 350 Breds, Worn Twice", c:"2x Gamecube Controllers(New)", d: "Beyerdynamic DT770 Headphones"},
            answer: "a",
                },
        {
            Question: "Which day is considered universal chest day for gym-goers?",
            answers: {a:"Monday", b:"Tuesday", c:"Wednesday", d:"Everyday"},
            answer: "a",
                },
        {
            Question: "Which animation studio is recognized for their consistent production quality and large eye designs?",
            answers: {a: "A-1 Pictures", b: "Madhouse", c:"Shaft", d:"Kyoto Animation"},
            answer: "d",
            },
        ];

//Starts the quiz by displaying the questions with the answers as radio buttons
function startQuiz() {
    for (i = 0; i < questions.length; i++) {
    
    $("#question-display").append("<p>" + questions[i].Question + "</p>")

    $("#question-display").append("<p><input type='radio' name='question' value='a'/> A: " + questions[i].answers.a+ "</p>")

    $("#question-display").append("<p><input type='radio' name='question' value='b'/> B: " + questions[i].answers.b+ "</p>")

    $("#question-display").append("<p><input type='radio' name='question' value='c'/> C: " + questions[i].answers.c+ "</p>")

    $("#question-display").append("<p><input type='radio' name='question' value='d'/> D: " + questions[i].answers.d+ "</p>")
   
    };
}
var correct = 0;

//Check answer function pulls value from the radio button selections and compares it to array of correct answers.
function checkAnswers() {

    //Array of Correct Answers
    var correctAnswers = [c, c, c, d, a, a, d]
    //Pulls values of radio selection and stores
    var answerChosen = document.querySelector('input[name=question]:checked').value;
    //New array for radio selected answers
    selectedAnswers = new Array();
    // pushes radio selected answers into array
    selectedAnswers.push(answerChosen)
    //For loop that compares the arrays
    for (i = 0; i < correctAnswers.length; i++) {
        correctAnswer[i] == answerChosen[i];
        correct++;
        
}
//End Quiz function triggers at end of interval, clears page and shows correct answers.
function endQuiz() {
    $("#question-display").empty;
    $("#time-remaining").empty;
    $("#time-remaining").append("<p>Correct Answers: " + correct + "</p>")
}
}

startQuiz()

