// add solution here
function theBeatlesPlay(musicians, instruments) {
  var BeatlesPlay[];
  for(let i = 0; i < musicians.length; i++) {
    console.log(musicians[i])
    console.log(instruments[i])
    BeatlesPlay.push(`${musicians[i]} plays the ${instruments[i]})
  }
}
