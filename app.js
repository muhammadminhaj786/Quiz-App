//Questions
var quesArray = [
    {
        num: 1,
        question: "HTML stand for",
        Option: {
            a: "Hyper text markup Language",
            b: "Hyper text programming Language",
            c: "Hyper text styling Language",
            d: "Hyper text scripting Language",

        },
        answer: "Hyper text markup Language"
    },
    {
        num: 2,
        question: "Which type of JavaScript Languages is",
        Option: {
            a: "Object-Oriented ",
            b: "Object-Base",
            c: "Assembly Languages",
            d: "high Level",

        },
        answer: "Object-Base"
    },
    // {
    //     num: 3,
    //     question: "The 'function' and  'var' are known as:",
    //     Option: {
    //         a: "Keywords",
    //         b: "Data types",
    //         c: "Declaration statements",
    //         d: "Prototypes",

    //     },
    //     answer: "Declaration statements"
    // }
    // ,
    // {
    //     num: 4,
    //     question: "who is the present president of pakistan",
    //     Option: {
    //         a: "Arif Alvi",
    //         b: "Imran Khan",
    //         c: "Nawaz Sharif",
    //         d: "Zardari",

    //     },
    //     answer: "Arif Alvi"
    // }
    // ,
    // {
    //     num: 5,
    //     question: "How many prayers in a day:",
    //     Option: {
    //         a: "6",
    //         b: "5",
    //         c: "3",
    //         d: "none",

    //     },
    //     answer: "5"
    // },
    // {
    //     num: 6,
    //     question: "How many total surah in quran",
    //     Option: {
    //         a: "113",
    //         b: "114",
    //         c: "112",
    //         d: "111",

    //     },
    //     answer: "114"
    // },
    // {
    //     num: 7,
    //     question: "The correct sequence of HTML tags for starting a webpage is",
    //     Option: {
    //         a: "Head, Title, HTML, body",
    //         b: "HTML, Body, Title, Head",
    //         c: "HTML, Head, Title, Body",
    //         d: "HTML, Title , Head,  Body",

    //     },
    //     answer: "HTML, Head, Title, Body"
    // }
]


//get submit button
var subBtn = document.querySelector(".sub-btn")
//get formwrapper div
var formWrapper = document.querySelector(".formwrapper")
//get start button
var strtbtn = document.querySelector(".btn2")
//get section 2
var formwrapper = document.querySelector(".start")
//get quiz section
var quizBody = document.querySelector(".quizbody")
//get and assign input field in variables
var inpName = document.getElementById("inp_name")
var inpEmail = document.getElementById("inp_email")
var inpRoll = document.getElementById("inp_roll")


//Get question
var Ques = document.getElementById('ques')
//Get options
var Opt = document.getElementById('opt').children

for (var i of Opt) {
    i.setAttribute("onclick", "selectOpt()")
}

//creating a select option function
function selectOpt(){
    
}

//creating a function when user click submit button triger this func
function strtQuiz(){
    // console.log(formWrapper)
    //section 1 hide
    formWrapper.style.display="none"
    //display section 2
    formwrapper.style.display="block"

    //add questin no 1 dynamic
    Ques.innerHTML=quesArray[0].question
    //add options
    Opt[0].innerHTML=quesArray[0].Option.a
    Opt[1].innerHTML=quesArray[0].Option.b
    Opt[2].innerHTML=quesArray[0].Option.c
    Opt[3].innerHTML=quesArray[0].Option.d


}
//get paragraph
var paraName = document.getElementById('para-name')
var paraEmail = document.getElementById('para-email')
var paraRoll = document.getElementById('para-roll')

//creating counter
var counter = 0;
function Counter(){
    counter++
    //conditon
    if(counter<quesArray.length){
        //add questin dynamic
        Ques.innerHTML=quesArray[counter].question
        
        //add options
        Opt[0].innerHTML=quesArray[counter].Option.a
        Opt[1].innerHTML=quesArray[counter].Option.b
        Opt[2].innerHTML=quesArray[counter].Option.c
        Opt[3].innerHTML=quesArray[counter].Option.d
        
       

        var num = document.querySelector('.numb');
        num.innerHTML=counter+1;
    };

    
}

//creating a function when user click start button triger this.
function quizportal(){
    //hide sectoin 2 
    formwrapper.style.display="none"
    //display the quiz section
    quizBody.style.display="block"
    //assign input fields values in paragraph
    paraName.innerHTML = inpName.value
    paraEmail.innerHTML = inpEmail.value
    paraRoll.innerHTML = inpRoll.value


    
}
