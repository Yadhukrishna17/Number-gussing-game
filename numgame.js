var enterbtn = document.getElementById("enter");
var againbtn = document.getElementById('playagain');
var output = document.getElementById('outputtext');

var randomnum = Math.ceil(Math.random()*100);

function checknumber(){
    var input = document.getElementById('userinput').value;
    if( input == randomnum){
        output.innerHTML =" You guessed right ,it was the random number"
    }else if(input > randomnum && input<100){
        output.innerHTML = " You guessed too high";
    }else if(input < randomnum && input>1){
        output.innerHTML =" You gussed to low";
  
    }else if(isNaN(input)){
        output.innerHTML="Thats not a number!"; 
     }else if(input<1){
            output.innerHTML="It has to be between 1 to 100";

    }else{
        output.innerHTML="Lower, it has to be between 1 to 100";
    }
    }
    enterbtn.addEventListener('click', checknumber);
    againbtn.addEventListener('click', function(){
        location.reload();
    })
    