const correctAnswers = ['B','B','A','A'];
const form = document.querySelector('.quiz-form');
const result=document.querySelector('.result')
form.addEventListener('submit',function(e){
e.preventDefault();

let score=0;
const userAnswers= [ form.q1.value, form.q2.value, form.q3.value, form.q4.value]
//check answers

userAnswers.forEach( function(answer,index){
  if(answer === correctAnswers[index]){
    score += 25;
  }
    
});

scrollTo(0,0); //alert(`You scored ${score}%` );
  result.querySelector('span').textContent = `${score}%`; 
  result.classList.remove('d-none');
  let output = 0;
  const timer= setInterval(function(){
    result.querySelector('span').textContent = `${output}%`;
    if(output === score){
      clearInterval(timer);
    }
    output++;
  },25);


});
