function getFirstSelector(selector){
let sel=document.querySelectorAll(selector)[0];
  return sel;
}
function nestedTarget(){

  //let sel=document.getElementsByClassName("target");
   let sel=document.getElementById('nested').getElementsByClassName('target');
  return sel;
}

function increaseRankBy(n){
  let ul='ranked-list'
  var ul = document.getElementsByClassName('ranked-list');
for(let i=0;i<n;n++){
  var li = document.createElement('li');

  ul.appendChild(li);
  }
//div.className = "alert alert-success";
//div.innerHTML = "<strong>Ура!</strong> Вы прочитали это важное сообщение.";
}
function deepestChild(){}
