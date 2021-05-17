//****************** questions*********** */
window.onload = function () {
    show(0);
    let name = sessionStorage.getItem("name");

    document.querySelector(".name").innerHTML = "  " + name;

}

let questions = [
    {
        id: 1,
        question: "Q1. A computer can not boot if it does not have the _____",
        answer: "Operating system",
        options: [
            "Compiler",
            "Loader",
            "Operating system",
            "Assembler"
        ]
    },
    {
        id: 2,
        question: "Q2. By default your documents print in ________ mode",
        answer: "Portrait",
        options: [
            "Landscape",
            "Portrait",
            "Page Setup",
            " Print View"
        ]
    },
    {
        id: 3,
        question: "Q3. MS-Word is an example of _____",
        answer: "Application software",
        options: [
            "An operating system",
            "A processing device",
            "Application software",
            "An input device"
        ]
    },
    {
        id: 4,
        question: "Q4. Who is the father of ‘C’ programming language?",
        answer: "Dennis Ritchie",
        options: [
            "Dennis Ritchie",
            "Prof Jhon Kemeny",
            "Thomas Kurtz",
            "Bill Gates"
        ]
    },
    {
        id: 5,
        question: "Q5. The lowest form of Computer language is called",
        answer: "Machine Language",
        options: [
            "BASIC",
            "FORTRAN",
            "Machine Language",
            "COBOL"
        ]
    }

]

function submitForm(e) {
    e.preventDefault();
    // let name =  document.getElementById("uname").value;

    //  store name of user
    // sessionStorage.setItem("name",name);

    let name = document.forms["myForm"]["name"].value;

    sessionStorage.setItem("name", name);

    location.href = "quiz.html";

}
// window.onload = function myFunction() {
//     let name = sessionStorage.getItem("name");

//     document.querySelector(".name").innerHTML = name;

//   }

let question_count = 0;
let point = 0;
sessionStorage.setItem("points", point);
function next() {
    
    let user_answer = document.querySelector("li.option.active").innerHTML;

    //*********** check user answer  *******************************/
    if (user_answer == questions[question_count].answer) {
        point += 10;
        sessionStorage.setItem("points", point);
    }

    if (question_count == questions.length - 1) {
        location.href = "end.html";
        return;
    }



    question_count++;
    show(question_count);
}

function show(count) {
    let question = document.getElementById("questions");
    question.classList.add("quebox");

    // question.innerHTML = "<h2>" + questions[count].question + "</h2>";
    question.innerHTML = `
    <h2>${questions[count].question}</h2>
    <ul class="option_group">
    <li class="option">${questions[count].options[0]}</li>
    <li class="option">${questions[count].options[1]}</li>
    <li class="option">${questions[count].options[2]}</li>
    <li class="option">${questions[count].options[3]}</li>
</ul>
    `;
    toggleActive();
}

function toggleActive() {
    let option = document.querySelectorAll("li.option");

    for (let i = 0; i < option.length; i++) {
        option[i].onclick = function () {
            for (let j = 0; j < option.length; j++) {
                if (option[j].classList.contains("active")) {
                    option[j].classList.remove("active");
                }
            }
            option[i].classList.add("active");
        }
    }
}


// ************************ back button disable
// window.history.forward();
// function noBack()
// {
//     window.history.forward();
// }

function preventBack() { window.history.forward(); }  
setTimeout("preventBack()", 0);  
window.onunload = function () { null }; 