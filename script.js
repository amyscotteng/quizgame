



/////////////////////////////
//Array 
(function() {
    function Question(quest, answers, right) {
        this.quest = quest;
        this.answers = answers;
        this.right = right;

}
    
//This shows the question    
    
Question.prototype.showQuestion = function() {
    console.log(this.quest);
    
    for (var i = 0; i < this.answers.length; i++) {
        console.log(i + ': ' + this.answers[i]);
    }
}  

//This checks the answers from the user's input into the prompt
Question.prototype.checkAns = function(answer) {
    if (answer === this.right) {
            console.log('That is correct! You gained 1 point!');
        
    } else {
        console.log('Sorry but that\'s the wrong answer. You didn\'t lose a point, though!')
    }
}
    
//List of possible questions
var firstQ = new Question ('Who is the founder of Microsoft?', ['Linus Torvalds', 'Steve Jobs', 'Bill Gates'], 2);
    
var secondQ = new Question ('What was the first version of Windows called?', ['Windows 1.0', 'Windows XP', 'Windows 3.1'], 0);

var thirdQ = new Question ('What was the name of the amazing skiing game that first appeared on Windows 3.0?', ['Microsoft Ski', 'SkiFree', 'SkiRace'], 1);

var questions = [firstQ, secondQ, thirdQ];
    
//This displays a random question from the three possible questions
var n = Math.floor(Math.random() * questions.length);

questions[n].showQuestion();

//This is the prompt where the user selects the number for the correct answer in the console    
var answer = parseInt(prompt('Which of the following is the correct answer?'));

questions[n].checkAns(answer);


})();



//This makes it so questions are displayed randomly instead of in order



(function() {
    function Question(quest, answers, right) {
        this.quest = quest;
        this.answers = answers;
        this.right = right;
}
    
 
Question.prototype.showQuestion = function() {
    console.log(this.quest);
    
    for (var i = 0; i < this.answers.length; i++) {
        console.log(i + ': ' + this.answers[i]);
    }
} 
 
Question.prototype.checkAns = function(ans, callback) {
    var poi;
    if (ans === this.right) {
       console.log('That is correct! You gained 1 point!');
       poi = callback(true); 
        
    } 
    
    else {
        console.log('Sorry but that\'s the wrong answer. You didn\'t lose a point, though!');
        poi = callback(false); 
    }
    
    this.cScore(poi);
}
 
    Question.prototype.cScore = function(score) {
        console.log('Your current score is: ' + score);
        console.log('-----');
    }
    
    
var firstQ = new Question ('Who is the founder of Microsoft?', ['Linus Torvalds', 'Steve Jobs', 'Bill Gates'], 2);
    
var secondQ = new Question ('What was the first version of Windows called?', ['Windows 1.0', 'Windows XP', 'Windows 3.1'], 0);
 
var thirdQ = new Question ('What was the name of the skiing game that first appeared on Windows 3.0?', ['Microsoft Ski', 'SkiFree', 'SkiRace'], 1);
 
var questions = [firstQ, secondQ, thirdQ];
    
function score() {
    var poi = 0;
        return function(right) {
            if (right) {
                poi++;
            }
            return poi;
        }
    }
    var keepPoints = score();
    
    
function nextQuestion() {
 
    var n = Math.floor(Math.random() * questions.length);
        questions[n].showQuestion();
 
        var answer = prompt('Which of the following is the correct answer? If you\'d like to end the game simply type exit :)');
 
        if(answer !== 'exit') {
            questions[n].checkAns(parseInt(answer), keepPoints);
            
            nextQuestion();
        }
    }
    
    nextQuestion();
    
})();
