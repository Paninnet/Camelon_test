function tougle() {
  let hide= document.querySelector('.under_header')
  if (hide.style.display==="block") {
    hide.style.display="none"
  }
  else{
    hide.style.display="block"
  }
}

function play() {
  let b=document.querySelector(".game")
  let a =document.querySelector(".intro") .innerHTML="Привет! Вы вошли в игру 'Угдай число от 0 до 100. '"
  if (b.style.display==="block") {
    b.style.display="none"
  }
  else {
    b.style.display="block"


  }



}
var randomN=parseInt(Math.random()*100)
let counter=0
function check() {

  while (true) {
  let ua=+document.querySelector('.user_answer').value

  if (ua>randomN) {
    counter++
    let res=document.querySelector('.result').innerHTML=(`Слишком много`)
    break

  }
  else if (ua<randomN) {
    counter++
    let res=document.querySelector('.result').innerHTML=(`Слишком мало`)
    break

  }
  else if (ua===randomN) {
    counter++
    let res=document.querySelector('.result').innerHTML=(`Молодец, ты угадал. Тебе потребовалось ${counter} попыток`)
    randomN=parseInt(Math.random()*100)
    counter=0
    break
  }
  }
}

let z=document.querySelector('.testing')
for (let i = 1; i <=100; i++) {
  if (i%3==0 && i%5==0) {
  document.write(`${i}+ "A/B Testing; "`)
  }
  else if (i%5==0) {
    document.write(`${i}+ "Testing; "`);
  }
  else if
    (i%3==0) {
    document.write(`${i}+ "A/B; "`);;
  }
}
