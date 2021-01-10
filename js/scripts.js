document.addEventListener('DOMContentLoaded', function(){
  const matchQuiz = document.getElementById('match-quiz');
  matchQuiz.addEventListener('submit', (e) => {

//span for appending 
  const celeb = document.getElementById('celeb');  
  let userName = document.getElementById('user-name');

//quiz input
  let name = document.getElementById('name').value;
  let book = document.getElementById('book').value;
  let marriage = document.getElementById('marriage').value;
  let vacation = document.getElementById('vacation').value;
  let coffee = document.getElementById('coffee').value;

//celebrity matches
  const kravitz = document.getElementById('kravitz');
  const chang = document.getElementById('chang');
  const glover = document.getElementById('glover');
  const elba = document.getElementById('elba');
  const domingo = document.getElementById('domingo');
  const kim = document.getElementById('kim');
  const hardy = document.getElementById('hardy');
  const penn = document.getElementById('penn');

//control flow for celebrity match
  if (marriage=== 'no'&& coffee==='black' && vacation=== 'Bali' || book==='self-help'){
  $(kravitz).show()}
  else if (book === 'fiction'&& marriage=== 'yes'&& coffee==='cream-and-sugar'||vacation==='London'){
  $(chang).show()}
  else if (marriage==='maybe'&& coffee==='cream-and-sugar'){
  $(glover).show()}
  else if (book ==='romance'&& marriage==='maybe'|| vacation==='Tokyo'){
  $(elba).show()}
  else if (book ==='fiction'&& marriage==='no'||vacation==='Paris'){
  $(domingo).show()}
  else if (book ==='history'|| marriage==='yes' && coffee==='black'){
  $(kim).show()}
  else {$(hardy).show()}

//append user name and celeb match
  userName.append(name);
  $('.perfect-match').show();

//hide form
  $('#match-quiz').hide();

  const resetBtn = document.getElementById('resetbtn');
  const resetQuiz = function (){
    matchQuiz.reset();
    $('.perfect-match').hide();
    $('.matches').hide();
    $('#match-quiz').show();
  }
  resetBtn.addEventListener('click', resetQuiz);

  
 
  e.preventDefault();  
 

  });

});