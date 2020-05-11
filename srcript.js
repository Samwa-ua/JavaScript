/*console.log('Hello World');
    
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

    var newLine = 5;
    console.log(newLine);

    var names = ['John', 'Mark', 'Jane'];
    var years = new Array(1990, 1969, 1948);

    
    names[names.length] = 'Mary';
    console.log(names);

    var John = ['John', 'designer', 1990, false];
    John.push('blue');
    John.unshift('Mr');
    console.log(John); 

    John.pop();
    console.log(John);

    console.log(John.indexOf(1990));

    var isDesigner = John.indexOf('designer') === -1 ? 'John is not a designer' : 'John is a disigner';
    console.log(isDesigner); */

    function tipCalculator (bill) {
        var percentage;

        if (bill < 50) {
            percentage = .2;
        } else if (bill >= 50 && bill < 200) {
            percentage = .15;
        } else {
            percentage = .1
        }
        return percentage * bill;
    }


console.log(tipCalculator(120));

var bills = [124, 48, 268];
var tips = [tipCalculator(bills[0]), 
            tipCalculator(bills[1]),
            tipCalculator(bills[2])];
var finalValues = [bills[0] + tips[0],
                   bills[1] + tips[1],
                   bills[2] + tips[2]
     ];

     console.log(tips);
     console.log(finalValues);