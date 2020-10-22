// add solution here
function theBeatlesPlay(musicians, instruments) {
  var beatlesPlay[];
  for(let i = 0; i < musicians.length; i++) {
    console.log(musicians[i])
    console.log(instruments[i])
    beatlesPlay.push("${musicians[i]} plays the ${instruments[i]}")
    console.log(beatlesPlay[i])
  }
}
