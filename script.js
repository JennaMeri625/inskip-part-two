let yourName = prompt("Welcome to GC mini golf!  What is your name?");
let holeCount = prompt("Welcome " + yourName + "!  Would you like to play 3 or 6 holes?");
while (holeCount !== 3 || holeCount !== 6) {
    holeCount = prompt("Please, tell me, would you like to play 3 or 6 holes?");
    if (holeCount == 3 || holeCount == 6) break;
}

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

//End Results console.log

if (score < 0) {
    console.log("Great job, " + yourName + "!  Your total par was: " + score + ".");
}
if (score == 0) {
    console.log("Good game, " + yourName + ".  Your total par was: 0.");
}
if (score > 0) {
    console.log("Nice try, " + yourName + "...  Your total par was: +" + score + ".");
}