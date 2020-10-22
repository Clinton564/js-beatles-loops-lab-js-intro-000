// add solution here
function theBeatlesPlay(musicians, instruments) {
  var beatlesPlay = new Array()
  for(let i = 0; i < musicians.length; i++) {
    beatlesPlay.push(musicians[i] + " plays " + instruments[i])
  }
  return beatlesPlay
}

function johnLennonFacts(facts){
  let i = 0
  while(i < facts.length){
    facts[i] = facts[i] + '!!!'
    i++
  }
  return facts
}

function iLoveTheBeatles(n) {
  var love
  do{
    love.push("I love the Beatles!")
  }while(0>5)
  return love
}

