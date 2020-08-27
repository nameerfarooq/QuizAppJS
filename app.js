
var quizmain = document.getElementById("quizmain")
quizmain.style.display = "none";

var threediv = document.getElementById("startdiv3")
threediv.style.display = "none";

var onediv = document.getElementById("startdiv1")
// onediv.style.display = "none"


var student;


function startQuiz(){
    var stdName = document.getElementById("nameInput")
    student = stdName.value;
    onediv.style.display = "none"
    quizmain.style.display = "block";
    QuestionsDisplay()
    
}

// ----------------------------------------------------------------------

var Questions = [{question : "Python is based on ?",
                options : ["Compiler","Assembler","Interpreter","None of the above"],
                answer : "Interpreter"},
                {question : "father of computer is ?",
                options : ["charles babbage","Markzuckerburg","steve Jobs","John Nappier"],
                answer : "charles babbage"},
                {question : "1 Terabyte consists of ?",
                options : ["1 gigabyte","1 picobyte","1 megabyte","1 bit"],
                answer : "1 gigabyte"},
                {question : "JavaScript is a ?",
                options : ["German Language","Chinese Language","English Language","Programming Language"],
                answer : "Programming Language"},
                {question : "Django is a Framework of ?",
                options : ["PHP","Python","C++","JavaScript"],
                answer : "Python"},
                {question : "DOM stands for ?",
                options : ["Document Object Model","Data Object Model","Data Oriented Model","Dual Object Model"],
                answer : "Document Object Model"}];

var score = 0;
var q = 0;

var ans;


function QuestionsDisplay(){
    
    var que = Questions[q].question
    var quex = document.createTextNode(que)
    var abc = document.getElementById("ques")
    abc.innerHTML = ""
    abc.appendChild(quex)
    
    
    var op1 = Questions[q].options[0]
    var op1a = document.createTextNode(op1)
    var op1b = document.getElementById("o1")
    op1b.innerHTML = ""
    op1b.appendChild(op1a)



    var op2 = Questions[q].options[1]
    var op2a = document.createTextNode(op2)
    var op2b = document.getElementById("o2")
    op2b.innerHTML = ""
    op2b.appendChild(op2a)



    var op3 = Questions[q].options[2]
    var op3a = document.createTextNode(op3)
    var op3b = document.getElementById("o3")
    op3b.innerHTML = ""
    op3b.appendChild(op3a)



    var op4 = Questions[q].options[3]
    var op4a = document.createTextNode(op4)
    var op4b = document.getElementById("o4")
    op4b.innerHTML = ""
    op4b.appendChild(op4a)



    ans = Questions[q].answer

    
    btnNextQ = document.getElementById("cqbtn")
    btnNextQ.disabled = true;

    


    
    
    
}


function cc(e){
    removeactive()
    e.setAttribute("class","active")
    // console.log(e)
    
}

function removeactive(){
    var one =   document.getElementById("o1")
    one.removeAttribute("class","active")
    var two = document.getElementById("o2")
    two.removeAttribute("class","active")
    var three = document.getElementById("o3")
    three.removeAttribute("class","active")
    var four = document.getElementById("o4")
    four.removeAttribute("class","active")
    

}




function Enter(){
    var x = document.getElementsByClassName("active")[0].innerHTML;
    
    buttonEnter = document.getElementById("btnenter")
    buttonEnter.disabled = true;

    btnNextQ.disabled = false;
    if(x == ans){
        score++;
        
        document.getElementsByClassName("active")[0].setAttribute("class","correct")
        
        
    }
    else{
        document.getElementsByClassName("active")[0].setAttribute("class","uncorrect")
    }
}

function resultDisp(){
    
    var NameOfStd = document.getElementById("skn")
    var nameA = document.createTextNode(student)
    NameOfStd.appendChild(nameA)
    console.log(NameOfStd)
    console.log(nameA)


    var scorefinal = document.getElementById("sspan")
    var finalScore = score;
    var scorenode = document.createTextNode(finalScore)
    console.log(scorefinal)
    console.log(finalScore)
    console.log(scorenode)
    scorefinal.appendChild(scorenode)
}

// resultDisp()

function nextq(){
    // console.log(Questions.length)
    if(q < Questions.length-1){
        q++;
        // console.log(q)
        removeactive()
        buttonEnter.disabled = false;
        QuestionsDisplay()
        
        if(q == Questions.length-1){
            document.getElementById("cqbtn").innerHTML = "view result"
            // alert("no more questions")
        }
    }
    else{
        
        resultDisp()
        quizmain.style.display = "none";
        threediv.style.display = "block";
        
        // window.location.assign("result.html")
        
    }
    
}

// QuestionsDisplay()