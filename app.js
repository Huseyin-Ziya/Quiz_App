const quizData= [
    {
        question: ' Hangi bitki türü,  bir çiçek açma döneminde sadece bir kez açar ve sonra ölür, bu bitki türü "ölü çiçek" olarak da bilinir?',
        a: 'Agave',
        b: 'Lotus',
        c: 'Orkide',
        d: 'Gül',
        e: 'Zambak',
        correct: 'a',
    },
    {
        question: 'Hangi gezegenin yüzeyinde "Olympus Mons" adlı, güneş sistemindeki en büyük volkan bulunmaktadır?',
        a: 'Venüs',
        b: 'Mars',
        c: 'Jupiter',
        d: 'Satürn',
        e: 'Merkür',
        correct: 'b',
    },
    {
        question: 'Dünyanın en derin okyanusu hangisidir?',
        a: 'Atlantik Okyanusu',
        b: 'Hint Okyanusu',
        c: 'Arktik Okyanusu',
        d: 'Pasifik Okaynusu',
        e: 'Güney Okyanusu',
        correct: 'd',
    },
    {
        question: 'Hangi nehir, dünyanın en uzun nehirlerinden biri olarak kabul edilir ve Afrikadan doğar?',
        a: 'Amazon Nehri',
        b: 'Ganj Nehri',
        c: 'Nil Nehri',
        d: 'Mississippi Nehri',
        e: 'Yangtze Nehri',
        correct: 'c',
    },
    {
        question: '"Mona Lisa" tablosu hangi ünlü sanatçı tarafından yapılmıştır?',
        a: 'Michelangelo',
        b: 'Raphael',
        c: 'Caravaggio',
        d: 'Titian',
        e: 'Leonardo da Vinci',
        correct: 'e',
    },
]

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const e_text = document.getElementById('e_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz(){
    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
    e_text.innerText = currentQuizData.e
}

function deselectedAnswers(){
    answerEls.forEach((answerEl => answerEl.checked = false))
}

function getSelected(){
    let answer

    answerEls.forEach((answerEl) => {
        if(answerEl.checked){
            answer = answerEl.id
        }
    })
    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()

    //console.log(answer)

    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++
        }
        currentQuiz++
        if(currentQuiz<quizData.length){
            loadQuiz()
        }else {
            quiz.innerHTML = `
            <h2> Test Tamamlandı, ${score * 20} Puan Aldınız🥳 </h2>
            <button class="submit" onClick="location.reload()"> Tekrar Dene 🌀  </button>
      
          `
        }
    }
})



