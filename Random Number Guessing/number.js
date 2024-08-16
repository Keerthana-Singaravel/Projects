var guessnumber=document.getElementById("guessnumber")
var result=document.getElementById("result")
var score=document.getElementById("score")
var randomnumber=Math.floor(Math.random()*10)+1
var totalscore=10
function check(){
    var enterednumber = guessnumber.value
    console.log(randomnumber)
    if(randomnumber==enterednumber)
    {
        console.log("Right")
        result.textContent="Right "
        alert("You Won.....")
    }
    else{
        console.log("Wrong")
        result.textContent="Wrong"
        totalscore=totalscore-1
        score.textContent="Score : "+totalscore
    }
}