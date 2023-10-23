function info() { 
    var contentHolder = document.getElementById('first-name');
    var contentHolder2 = document.getElementById('mood');
alert ("Castillo Corp welcomes you, " + (document.getElementById('first-name').value)  + "!" + " We're glad you're doing " + (document.getElementById('mood').value));
}

function numberInfo() {
    if (document.getElementById("number").value == 0) {
        alert("not a polygon!");
    }
    if (document.getElementById("number").value == 1 || document.getElementById("number").value == -1) {
        alert("henagon");
    }
    if (document.getElementById("number").value == 2 || document.getElementById("number").value == -2) {
        alert("digon");
    }
    if (document.getElementById("number").value == 3 || document.getElementById("number").value == -3) {
        alert("trigon");
    }
    if (document.getElementById("number").value == 4 || document.getElementById("number").value == -4) {
        alert("tetragon");
    }
    if (document.getElementById("number").value == 5 || document.getElementById("number").value == -5) {
        alert("pentagon");
    }
    if (document.getElementById("number").value == 6 || document.getElementById("number").value == -6) {
        alert("hexagon");
    }
    if (document.getElementById("number").value == 7 || document.getElementById("number").value == -7) {
        alert("heptagon");
    }
    if (document.getElementById("number").value == 8 || document.getElementById("number").value == -8) {
        alert("octagon");
    }
    if (document.getElementById("number").value == 9 || document.getElementById("number").value == -9) {
        alert("enneagon!");
    }
    if (document.getElementById("number").value == 10 || document.getElementById("number").value == -10) {
        alert("decagon");
    }
    if (document.getElementById("number").value >= 11) {
        alert("too big! a wackygon!");
    }
    if (document.getElementById("number").value < 0) {
        alert("too small! a wackygon!");
    }
}
function testScores() {
    var entry;
    var average;
    var total = 0;
    //get 3 scores from user and add them together
    entry = prompt("Enter test score");
    entry = parseInt(entry);
    var score1 = entry;
    total = total + score1;
    entry = prompt("Enter test score");
    entry = parseInt(entry);
    var score2 = entry;
    total = total + score2;
    entry = prompt("Enter test score");
    entry = parseInt(entry);
    var score3 = entry;
    total = total + score3;
    //calculate the average
    average = parseInt(total/3);
    alert("Score 1 = " + score1 +  " Score 2 = " + score2 + " Score 3 = " + score3 + " Average score = " + average);
}
function calculateMpg() {
    var miles = prompt("Enter miles driven");
    miles = parseFloat(miles);
    var gallons = prompt("Enter gallons of gas used");
    gallons = parseFloat(gallons);
    var mpg = miles/gallons;
    mpg = parseInt(mpg);
    alert("Miles per gallon = " + mpg); 
}
function joke() {
    alert("your mom");
}
function insult() {
    alert("you are ugly hahahahahahah");
}