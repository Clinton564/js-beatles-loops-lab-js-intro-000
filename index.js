// add solution here
function theBeatlesPlay(musicians, instruments) {
  var beatlesPlay = new Array()
  for(let i = 0; i < musicians.length; i++) {
    beatlesPlay.push(musicians[i] + " plays " + instruments[i])
  }
  return beatlesPlay
}
