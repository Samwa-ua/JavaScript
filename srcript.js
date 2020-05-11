console.log('Hello World');
    
var teamJohn = "Team John wins with a score ";
var teamMike = "Team Mike wins with a score ";
var teamMary = "Team Mary wins with a score ";
var scoreJohn = ((116+960+123)/3);
var scoreMike = ((116+900+123)/3);
var scoreMary = ((116+96+165)/3);
    if (scoreMary && scoreJohn < scoreMike) {
        console.log(teamMike + Math.round(scoreMike));
    }
    else if (scoreMike && scoreJohn < scoreMary) {
        console.log(teamMary + Math.round(scoreMary));
    }
    else if (scoreMike && scoreMary < scoreJohn) {
        console.log(teamJohn + Math.round(scoreJohn));
    }
    else if (scoreJohn === scoreMike === scoreMary){
        console.log("It`s a draw!");
    }
    else {
        console.log("Something went wrong")
    }