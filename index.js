const quizData = {
    quiz0: [
        {
            question: "What does HTML stand for?",
            ans: "Hyper Text Markup Language"
        },
        {
            question: "Who is making the Web standards?",
            ans: "The World Wide Web Consortium"
        },
        {
            question: "How do you write 'Hello World' in an alert box?",
            ans: "alert('Hello World');"
        },
        {
            question: "How do you create a function in JavaScript?",
            ans: "function myFunction()"
        },
        {
            question: "How do you call a function named 'myFunction'?",
            ans: "myFunction()"
        },
    ],
    quiz1: [
        {
            question: "question1",
            ans: "question1ans"
        },
        {
            question: "question2",
            ans: "question2ans"
        },
        {
            question: "How do you write 'Hello World' in an alert box?",
            ans: "alert('Hello World');"
        },
        {
            question: "How do you create a function in JavaScript?",
            ans: "function myFunction()"
        },
        {
            question: "How do you call a function named 'myFunction'?",
            ans: "myFunction()"
        },
    ]
};

//console.log(quizData);

const QuizData = Object.entries(quizData);

QuizData.forEach((val, outerIndex) => {
    const el = document.createElement('div');
    el.classList.add('quiz_main_div');
    el.setAttribute('id', 'quizContainer' + outerIndex);
    const box = document.getElementById('mainDiv');
    box.appendChild(el);

    const quizContainer = document.getElementById('quizContainer' + outerIndex);

    val[1].forEach((questionObj, innerIndex) => {
        const questionElement = document.createElement('div');
        questionElement.id = `Qdiv${outerIndex}${innerIndex}`
        questionElement.innerHTML = `<h2>${questionObj.question}</h2><input type="text" id="answer${outerIndex}${innerIndex}" placeholder="Enter answer" />`;
        quizContainer.appendChild(questionElement);
        
        const right_ans_node = document.createElement('div');
        const right_ans_para = document.createElement("p");        
        const right_ans_text = document.createTextNode("This is new1.");

        right_ans_node.classList.add(`correct_ans_style${outerIndex}${innerIndex}`)
        right_ans_node.classList.add('correct_ans_style')
        right_ans_para.id = `correct_ans${outerIndex}${innerIndex}`;

        right_ans_para.appendChild(right_ans_text);
        right_ans_node.appendChild(right_ans_para)
        questionElement.appendChild(right_ans_node);
    });

    const buttonElement = document.createElement('button');
    buttonElement.setAttribute('id', 'submitBtn' + outerIndex);
    buttonElement.innerHTML = "Submit";
    quizContainer.appendChild(buttonElement);

    const submitBtn = document.getElementById('submitBtn' + outerIndex);

    submitBtn.addEventListener('click', function () {
        console.log('answer' + outerIndex);
        val[1].forEach((question, innerIndex) => {
            let inputValue = document.getElementById(`answer${outerIndex}${innerIndex}`);
            //console.log("Input ", inputValue);
            //console.log("Input Value ", inputValue.value);
            if ((question.ans).trim().toUpperCase() === (inputValue.value).trim().toUpperCase()) {
                inputValue.style.backgroundColor = "#ade5af";
            } else {
                if (inputValue.value !== "") {
                    inputValue.style.backgroundColor = "#ffa29b";
                    document.querySelector(`.correct_ans_style${outerIndex}${innerIndex}`).style.display = "block";
                    document.getElementById(`correct_ans${outerIndex}${innerIndex}`).innerHTML = question.ans;
                    //console.log(question.ans)
                }
            }
        });
    });
});
