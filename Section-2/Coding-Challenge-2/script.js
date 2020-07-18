console.log('Connected')

var jScore = 89 + 120 + 103;
var mScore = 116 + 94 + 123;
var maryScore = 97 + 134 + 105;

var avgJScore = jScore/3;
var avgMScore = mScore/3;
var avgMaryScore = maryScore/3;

if(avgJScore > avgMScore && avgJScore > avgMaryScore) {
    console.log('John\'s team is winner with score: ' + avgJScore);
} else if(avgMScore > avgJScore && avgMScore > avgMaryScore) {
    console.log('Mike\'s team is winner with score: ' + avgMScore)
} else if(avgMaryScore > avgJScore && avgMaryScore > avgMScore) {
    console.log('Mary\'s team is winner with score: ' + avgMaryScore)
} else {
    console.log('It\'s a draw!!!');
}
 
// if(avgJScore > avgMScore) {
//     console.log('John\'s team is winner with score: ' + avgJScore);
// } else if(avgJScore < avgMScore) {
//     console.log('Mike\'s team is winner with score: ' + avgMScore);
// } else {
//     console.log('It\'s a draw!!!');
// }