const qns = [
    {
        'que': 'Which of the following is a markup language',
        'a': 'HTML',
        'b': 'CSS',
        'c': 'JS',
        'd': 'PHP',
        'correct': 'a'
    }
    ,
    {
        'que': 'Which year javascript has launched',
        'a': '1996',
        'b': '1995',
        'c': '1994',
        'd': 'none of the above',
        'correct': 'b'
    }
    ,
    {
        'que': 'What is the full form of CSS',
        'a': 'Chowmein Soup Sausage',
        'b': 'Comprehensive super sheet',
        'c': 'Cascading Style Sheet',
        'd': 'Corect Style Section',
        'correct': 'c'
    }
    ,
    {
        'que': 'JS is a which type of language',
        'a': 'Programming',
        'b': 'Scripting',
        'c': 'Boaring',
        'd': 'All of the aboove',
        'correct': 'b'
    }
    ,
    {
        'que': 'Why JS is so Popular',
        'a': 'Modern frameworks',
        'b': 'Open standards and community',
        'c': 'Omni-platform',
        'd': 'All of the above',
        'correct': 'a'
    }
]

let idx = 0;
const ques = document.getElementById("queBox");
const option = document.querySelectorAll(".optn");
let total = qns.length;
let right = 0, wrong = 0;

const loadQue = () => {
    const data = qns[idx];
    // console.log(data);
    ques.innerText = `${idx + 1}) ${data.que}`;
    option[0].nextElementSibling.innerText = data.a;
    option[1].nextElementSibling.innerText = data.b;
    option[2].nextElementSibling.innerText = data.c;
    option[3].nextElementSibling.innerText = data.d;
}

const submitQuiz = () => {
    const data = qns[idx];
    const res = getAnswer();
    if (res === data.correct) {
        right++;
    }
    else {
        wrong--;
    }
    idx++;
    loadQue();
    return;
}

const getAnswer = () => {
    option.forEach((input) => {
        if (input.checked) {
            return input.value;
        }
    })
}

loadQue();