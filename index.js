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
  var love = new Array()
  let i = 0;
  console.log('n: ' + n)
  do{
    love.push("I love the Beatles!")
    console.log(love[i])
    i++
  }while(i<=n)
  return love
}
