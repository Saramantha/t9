player1_name= localStorage.getItem("player1_name");
player2_name= localStorage.getItem("player2_name");
player1_score=0
player2_score=0

function send() {
    number1 = document.getElementById("number1").Value;        
    number2 = document.getElementById("number2").Value;  
    actual_answer = parseInt(number1) *parseInt(number2)
    question_number = "<h4>" + " X "+ number2 + "</h4>";
    inpuit_box = "<br>Resposta : <inpuit type='text' id='inpuit_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Checar</button>";
    row = question_number + inpuit_box + check_button ;
    document.getElementById("output").innerHTML = row;
    
    document.getElementById("number1").Value = "";
    document.getElementById("number2").Value = ""; 
    } 