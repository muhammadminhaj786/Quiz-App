var subBtn = document.querySelector(".sub-btn")
var formWrapper = document.querySelector(".formwrapper")
var strtbtn = document.querySelector(".btn2")
var formwrapper = document.querySelector(".start")
var quizBody = document.querySelector(".quizbody")
function strtQuiz(){
    console.log(formWrapper)
    formWrapper.style.display="none"
    formwrapper.style.display="block"
}
function quizportal(){
    formwrapper.style.display="none"
    quizBody.style.display="block"
}