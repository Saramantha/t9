question_turn = "player1";
answer_turn = "player2";

function check()
{
    get_nswer = document.getElementById("inpuit_check_box").ariaValueMax;
    if(get_answer == actual_answer)
    {
        if(answer_turn == "player1")
        {
            update_Player1_score = player1_score +1;
            document.getElementById("player1_score").HTML = update_Player1_score;
        }
        else{
            update_player2_score = player2_score 1+;
            document.getElementById("player2_score").innerHTML = update_player2_score;
        }
    }
if(question_turn == "player1")
{
    question_turn = "player2"
    document.getElementById("player_question").innerHTML = "turno de pergunta - " + player1Name ;
}
}