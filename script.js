let yourName = prompt("Welcome to GC mini golf!  What is your name?");
let holeCount = prompt("Welcome " + yourName + "!  Would you like to play 3 or 6 holes?");

let total = 0;

if (holeCount == 3) {
    par = 9;
}
if (holeCount == 6) {
    par = 18;
}
for (let i = 0; i < holeCount; i++) {
    let holescore = Number( prompt("How many putts for hole " + [i+1] +"?")); total += holescore;
}
let score = total-par;

if (score < 0) {
    console.log("Great job, " + yourName + "!  Your total par was: " + score + ".");
}
if (score == 0) {
    console.log("Good game, " + yourName + ".  Your total par was: 0.");
}
if (score > 0) {
    console.log("Nice try, " + yourName + "...  Your total par was: +" + score + ".");
}




/*If even with par, the console log reads: "Good game, (user’s name). Your total par was: 0"
If under par, the console log reads: "Great job, (user’s name)! Your total par was: -(par)"
If over par, the console log reads: "Nice try, (user’s name)... Your total par was: +(par)"*/