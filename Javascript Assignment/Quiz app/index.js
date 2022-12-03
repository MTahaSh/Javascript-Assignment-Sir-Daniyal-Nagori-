const prompt = require('prompt-sync')({sigint:true});

const quiz_q = {
    Q1: "what is the value of Pi?",

    a: 3.14,
    b: 1.23,
    c: 2,
    correct1: 'a'
,

    Q2: "What does 6 raise to the power of 0 equal?",
    
        a2:1,
        b2:0,
        c2:"undefine",
    correct2: 'a2'
}



for (let i = 0; i < 2; i++) {
  

switch(i)
{
    case 0:
        console.log(quiz_q["Q1"]);
        console.log("a: " + quiz_q["a"] + "\nb: " + quiz_q["b"] + "\nc: " + quiz_q["c"]);
        correct = quiz_q["correct1"];
        user_answer = prompt("Enter your ans: ");

        if(user_answer === correct)
        {
            console.log("The answer is correct!");
        }
        else {
            console.log("The answer is wrong");
        }
        break;

    case 1:
        console.log(quiz_q["Q2"]);
        console.log("a: " + quiz_q["a2"] + "\nb: " + quiz_q["b2"] + "\nc: " + quiz_q["c2"]);
        correct = quiz_q["correct1"];
        user_answer = prompt("Enter your ans: ");

        if(user_answer === correct)
        {
            console.log("The answer is correct!");
        }
        else {
            console.log("The answer is wrong");
        }    


}

}