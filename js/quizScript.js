const variant1 = document.querySelector('.variant1'),
      variant2 = document.querySelector('.variant2'),
      variant3 = document.querySelector('.variant3'),
      variant4 = document.querySelector('.variant4');
const variantElements = document.querySelectorAll('.variant');
const question = document.getElementById('question'),
      numberOfQuestion = document.getElementById('numberOfQuestion'),
      numberOfAllQuestion = document.getElementById('numberOfAllQuestion');

let indexOfQuestion,
    indexOfPage = 0;

const answersChecker = document.getElementById('answersChecker');
const btnNext = document.getElementById('btnNext');

let score = 0;

const correctAnswers = document.getElementById('correctAnswers'),
      correctAllAnswers = document.getElementById('correctAllAnswers'),
      btnTryAgain = document.getElementById('btnTryAgain');

const questions = [
    {
        question: 'Какое настоящее имя Абая Кунанбаева?',
        variants: [
            'Абдулат',
            'Тамерлан',
            'Ибрагим',
            'Мухаммед',
        ],
        rightAnswer: 2
    },
    {
        question: 'Какое произведение Пушкина перевёл Шакарим Кудайбердиев?',
        variants: [
            'Капитанская дочка',
            'Дубровский',
            'Евгений Онегин',
            'Метель',
        ],
        rightAnswer: 1
    },
    {
        question: 'Когда родился Сакен Сейфуллин?',
        variants: [
            '25 мая 1893',
            '18 марта 1895',
            '7 февраля 1892',
            '15 октября 1894',
        ],
        rightAnswer: 3
    },
    {
        question: 'В устном народном творчестве слово «батыр» означало?',
        variants: [
            'Казах',
            'Солдат',
            'Богатырь',
            'Воин',
        ],
        rightAnswer: 2
    },
    {
        question: 'В 1995 году была создана Ассамблея народа Казахстана. Какова её цель?',
        variants: [
            'Обеспечение общественно-политического согласия в стран',
            'Обеспечение всех малоимущих ',
            'Развитие технологий',
            'Поддержка народа Казахстана',
        ],
        rightAnswer: 1
    },
    {
        question: 'Какой награды в 1999 году был удостоен Город Астана?',
        variants: [
            'Город свободы',
            'Город единства',
            'Город добра',
            'Город мира',
        ],
        rightAnswer: 3
    },
    {
        question: 'Какой город в Казахстане  является самым индустриально-промышленным?',
        variants: [
            'Шымкент',
            'Караганда',
            'Алматы',
            'Петропавловск',
        ],
        rightAnswer: 1
    },
    {
        question: 'Какое название имела Туркестанская область до 2018 года?',
        variants: [
            'Южно-Казахстная область',
            'Северо-Казахстанская область',
            'Западно-Казахстная область',
            'Восточно-Казахстная область',
        ],
        rightAnswer: 0
    },
    {
        question: 'Какой город занимает самую большую территорию в Казахстане?',
        variants: [
            'Нур-Султан',
            'Актау',
            'Шымкент',
            'Кызылорда',
        ],
        rightAnswer: 2
    },
    {
        question: 'В каком году президент принял решение о переводе казахского алфавита на латинский?',
        variants: [
            '2002-2005 гг.',
            '2017-2018 гг.',
            '1994-1995 гг.',
            '2010-2012 гг.',
        ],
        rightAnswer: 1
    },
];

numberOfAllQuestion.innerHTML = questions.length;

const load = () => {
    question.innerHTML = questions[indexOfQuestion].question;

    variant1.innerHTML = questions[indexOfQuestion].variants[0];
    variant2.innerHTML = questions[indexOfQuestion].variants[1];
    variant3.innerHTML = questions[indexOfQuestion].variants[2];
    variant4.innerHTML = questions[indexOfQuestion].variants[3];

    numberOfQuestion.innerHTML = indexOfPage + 1;
    indexOfPage++;
};

let completedAnswers = [];

const randomQuestion = () => {
    let randomNumber = Math.floor(Math.random() * questions.length);
    let hitDuplicate = false;

    if(indexOfPage == questions.length) {
        quizOver();
    } else {
        if (completedAnswers.length > 0) {
            completedAnswers.forEach(item => {
                if(item == randomNumber) {
                    hitDuplicate = true;
                }
            });
            if (hitDuplicate) {
                randomQuestion();
            } else {
                indexOfQuestion = randomNumber;
                load();
            };
        };
        if (completedAnswers == 0) {
            indexOfQuestion = randomNumber;
            load();
        };
    };
    completedAnswers.push(indexOfQuestion);
};

const checkAnswer = el => {
    if (el.target.dataset.id ==  questions[indexOfQuestion].rightAnswer) {
        el.target.classList.add('correct');
        updateAnswerChecker('correct');
        score++;
    } else {
        el.target.classList.add('wrong');
        updateAnswerChecker('wrong');
    };
    disabledVariants();
};

const disabledVariants = () => {
    variantElements.forEach(item => {
        item.classList.add('disabled')
        if (item.dataset.id == questions[indexOfQuestion].rightAnswer) {
            item.classList.add('correct');
        };
    });
};

const enabledVariants = () => {
    variantElements.forEach(item => {
        item.classList.remove('disabled', 'correct', 'wrong');
    });
};

const checkerAnswer = () => {
    questions.forEach(() => {
        const div = document.createElement('div');
        answersChecker.appendChild(div);
    });
};

const updateAnswerChecker = status => {
    answersChecker.children[indexOfPage - 1].classList.add(`${status}`);
};

const validate = () => {
    if(!variantElements[0].classList.contains('disabled')) {
        alert('Пожалуйста, выберите вариант ответа!');
    } else {
        randomQuestion();
        enabledVariants();
    };
};

btnNext.addEventListener('click', validate);


for(variant of variantElements) {
    variant.addEventListener('click', e => checkAnswer(e));
};

const quizOver = () => {
    document.querySelector('.quizModal').classList.add('active');
    document.querySelector('.overlay').classList.add('active');
    correctAnswers.innerHTML = score;
    correctAllAnswers.innerHTML = questions.length;
};

const tryAgain = () => {
    window.location.reload();
};

btnTryAgain.addEventListener('click', tryAgain);

window.addEventListener('load', () => {
    randomQuestion();
    checkerAnswer();
});