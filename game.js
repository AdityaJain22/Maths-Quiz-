player1_name = localStorage.getItem("name_of_player_1");
player2_name = localStorage.getItem("name_of_player_2");
player1_score = 0;
player2_score = 0;
document.getElementById("player-1").innerHTML = player1_name + " : ";
document.getElementById("player-2").innerHTML = player2_name + " : ";
document.getElementById("player-1_score").innerHTML = player1_score ;
document.getElementById("player-2_score").innerHTML = player2_score ;
document.getElementById("player-1_name_QT").innerHTML = "Question Turn - " + player1_name ;
document.getElementById("player-2_name_AT").innerHTML = "Answer Turn - " + player2_name ;
function Submit()
{
    number_1 = document.getElementById("num1").value;
    number_2 = document.getElementById("num2").value;
    actual_answer = parseInt(number_1) * parseInt(number_2);
    question_number = "<h4 id = 'N'>" + number_1 + " X " + number_2 + " </h4> ";
    input_box = "<br>Answer : <input type = 'text' id = 'input_check_box'> ";
    check_button = "<br><br> <button class = 'btn btn-info' onclick = 'check()' > Check </button>";
    row = question_number + input_box + check_button;
    document.getElementById("Question").innerHTML = row;
    document.getElementById("num1").value = "";
    document.getElementById("num1").value = "";
}
var answer_turn = "player1";
var question_turn = "player2";
function check()
{
    get_answer = document.getElementById("input_check_box").value;
    if (get_answer == actual_answer)
    {
        if (answer_turn == "player1")
        {
            update_player1_score = player1_score + 1
            document.getElementById("player1_score").innerHTML = update_player1-score;
        }
        else 
        {
            update_player2_score = player2_score +1;
            document.getElementById("player2_score").innerHTML = update_player2-score
        }
    }
    if (question_turn == "player1") 
    {
        question_turn = "player2";
        document.getElementById("player_question").innerHTML = "Question turn - " + player2_name;
    }
    else 
    {
        question_turn = "player1";
        document.getElementById("player_question").innerHTML = "Question turn -" + player1_name;
    }
    if (answer_turn == "player1") 
    {
        answer_turn = "player2";
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;
    }
    else 
    {
        answer_turn = "player1";
        document.getElementById("player_answer").innerHTML = "Answer turn -" + player1_name;
    }
}