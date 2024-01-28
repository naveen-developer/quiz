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
            question: "She ___ a dog",
            ans: "She has a dog"
        },
        {
            question: "Does she ___ a son",
            ans: "Does she have a son"
        },
        {
            question: "Does they ___ a business in Dubai",
            ans: "Does they have a business in Dubai"
        },
        {
            question: "It ___ 3 tyres",
            ans: "It has 3 tyres"
        },
        {
            question: "My car ___ a full tank of petrol",
            ans: "My car has a full tank of petrol"
        },
        {
            question: "She ___ a headache",
            ans: "She has a headache"
        },
        {
            question: "Shinto doesn’t ___ long hair",
            ans: "Shinto doesn’t have long hair"
        },
        {
            question: "How many sisters does he ___ ",
            ans: "How many sisters does he have"
        },
        {
            question: "How many legs does a spider 🕷 ___ ",
            ans: "How many legs does a spider 🕷have"
        },
        {
            question: "Doctors ___ a separate canteen ",
            ans: "Doctors have a separate canteen"
        },
    ],
    quiz2: [
        {
            question: "అతనికి పిల్లలు లేరు",
            ans: "They don't have children"
        },
        {
            question: "దీనికి ప్రత్యేక ఎంపిక ఉంది",
            ans: "It has special feature"
        },
        {
            question: "జేమ్స్‌కు ఎస్‌.బి.ఐ బ్యాంక్‌లో ఖాతా ఉంది",
            ans: "James has account in SBI bank."
        },
        {
            question: "అతనికి ఎంతమంది సోదరులు ఉన్నారు?",
            ans: "How many friends does he have ?"
        },
        {
            question: "వైజాగ్లో వారికి అపార్ట్‌మెంట్ ఉందా?",
            ans: "Does they have appartment in vizag ?"
        },
    ],
    quiz3: [
        {
            question: "నిన్న ఒక Wedding function ఉన్నింది. నేను వెళ్ళాను.కాని నేను ఏ ఆహారం కూడా తినలేదు. నేను అనారోగ్యంతో ఉన్నాను.",
            ans: "There was a wedding function yesterday. I went but I didn't have food last night because I am sick."
        },
        {
            question: "నిన్న నాకు సినిమాకి వెళ్ళే ప్లాన్ ఉన్నింది. నా దగ్గర డబ్బులు లేవు. నేను మా అమ్మని డబ్బులు అడిగాను. అమ్మ దగ్గర డబ్బులు లేవు.",
            ans: "I had a plan to go to cinema yesterday. I don't have money. I asked my mother for money. She doesn't have money."
        },
    ],
    quiz4: [
        {
            question: "మీరు ఆహారం తిన్నారా?",
            ans: "Did you have food ?"
        },
        {
            question: "అతను lunch చేశాడా?  (భోజనం)",
            ans: "Did he have lunch"
        },
        {
            question: "రాజు భోజనం తినలేదు",
            ans: "Raju didn't have food"
        },
        {
            question: "ఈ రోజు మీకు duty ఉన్నిందా",
            ans: "Did you have duty today?"
        },
        {
            question: " నాకు ఏ ఆశ లేదు",
            ans: "I don't have any hope"
        },
        {
            question: "ఈ రోజు నాకు meeting లేదు",
            ans: "I don't have meeting today"
        },
        {
            question: "ఈ రోజు ఆమెకు class లేదు",
            ans: "she doesn't have class today"
        },
        {
            question: "నా దగ్గర డబ్బు లేదు",
            ans: "I don't have money"
        },
        {
            question: "నేను ఉదయం చిప్స్ తిన్నాను",
            ans: "I ate  chips in the morning"
        },
        {
            question: "నేను నిన్న రాత్రి ఆహారం తినలేదు",
            ans: "I didn't eat food last night"
        },
    ],
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
            if ((question.ans).trim().toUpperCase() === (inputValue.value).trim().toUpperCase()) {
                inputValue.style.backgroundColor = "#ade5af";
            } else {
                if (inputValue.value !== "") {
                    inputValue.style.backgroundColor = "#ffa29b";
                    document.querySelector(`.correct_ans_style${outerIndex}${innerIndex}`).style.display = "block";
                    document.getElementById(`correct_ans${outerIndex}${innerIndex}`).innerHTML = question.ans;
                }
            }
        });
    });
});
