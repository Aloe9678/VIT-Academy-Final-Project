function check() {
    var c=0;
    var q1=document.quiz.question1.value;
    var q2=document.quiz.question2.value;
    var q3=document.quiz.question3.value;
    var q4=document.quiz.question4.value;
    var q5=document.quiz.question5.value;
    var result=document.getElementById('result');
    var quiz = document.getElementById('quiz');
    if (q1=="A popular programming language created in 1995.") {c++; console.log(q1)}
    if (q2=="A special variable that can hold more than one value at a time.") {c++; console.log(q2)}
    if (q3=="%") {c++; console.log(q3)}
    if (q4=="One of two values: true or false.") {c++; console.log(q4)}
    if (q5=="hu/la") {c++; console.log(q5)}
    quiz.style.display="none";
    if (c<=3) {
        result.textContent=`Your score is ${c}. You can do better!`
    } else {
        result.textContent=`Your score is ${c}. Excellent!`
    }
}