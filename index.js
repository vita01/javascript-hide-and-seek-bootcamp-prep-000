function getFirstSelector(selector){
let sel=document.querySelectorAll(selector)[0];
  return sel;
}
function nestedTarget(){
  let sel1=document.querySelector('#nested');
  let  sel2=sel1.querySelector('.target');
    return sel2;
}

function increaseRankBy(n){
  var rankedlist= document.querySelectorAll('.ranked-list li')
  for (var i = 0; i < rankedlist.length; i++) {
    rankedlist[i].innerHTML=parseInt(rankedlist[i].innerHTML)+n
  }return rankedlist
//div.className = "alert alert-success";
//div.innerHTML = "<strong>Ура!</strong> Вы прочитали это важное сообщение.";
}
function deepestChild(){

  var node=document.querySelector('#grand-node');
  var nextnode=node.children[0];
  function deep(nextnode){
for(let i=0;i<node.length;i++){
     nextnode=node.children[i];
 if(nextnode.length>1){ deep(nextnode)}
}}
deep(nextnode);
return nextnode;

}
