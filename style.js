const start=document.getElementById("start");
const quiz=document.getElementById("quiz");
const result=document.getElementById("result");
const question=document.getElementById("question");
const options=document.getElementById("options");
const startBtn=document.getElementById("startBtn");
const nextBtn=document.getElementById("nextBtn");

const data=[
["Capital of India?",["Delhi","Mumbai","Goa","Chennai"],0],
["2+2=?",["3","4","5","6"],1],
["HTML stands for?",["Markup","Language","Hyper Text Markup Language","None"],2],
["Sun rises from?",["West","East","North","South"],1],
["5×3?",["10","15","8","20"],1],
["Water formula?",["CO2","H2O","O2","NaCl"],1],
["Which fruit?",["Potato","Apple","Onion","Carrot"],1],
["CSS used for?",["Logic","Style","Database","Server"],1],
["JS is?",["Language","Fruit","Animal","Car"],0],
["Earth is?",["Flat","Round","Cube","Triangle"],1]
];

let i=0,score=0,attempt=0,selected=null;

startBtn.onclick=()=>{
start.style.display="none";
quiz.style.display="block";
loadQuestion();
};

function loadQuestion(){
selected=null;
question.innerHTML=(i+1)+". "+data[i][0];
options.innerHTML="";

data[i][1].forEach((opt,index)=>{
let div=document.createElement("div");
div.className="option";
div.innerHTML=opt;

div.onclick=()=>{
document.querySelectorAll(".option").forEach(o=>o.style.background="#eee");
div.style.background="#9ec5ff";
selected=index;
};

options.appendChild(div);
});
}

nextBtn.onclick=()=>{
if(selected!==null){
attempt++;
if(selected===data[i][2]) score++;
}

i++;

if(i<data.length){
loadQuestion();
}else{
showResult();
}
};

function showResult(){
quiz.style.display="none";
result.style.display="block";

result.innerHTML=
"<h2>Quiz Finished 🎉</h2>"+
"Total Questions: "+data.length+"<br><br>"+
"Attempted: "+attempt+"<br><br>"+
"Correct: "+score+
"<br><br><button onclick='restartQuiz()'>Start Again</button>";
}

function restartQuiz(){
i=0;
score=0;
attempt=0;
selected=null;

result.style.display="none";
start.style.display="block";
}