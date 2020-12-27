document.addEventListener('DOMContentLoaded', function(){
  const matchQuiz = document.getElementById('match-quiz').addEventListener
  ('submit', (e) => {
//span to for append
  const result = document.getElementById('celeb');  
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

//append user name and celeb match
  userName.append(name);
  result.append(elba);
  

  e.preventDefault();
  })
});