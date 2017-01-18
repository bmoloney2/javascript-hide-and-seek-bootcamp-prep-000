function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector(`#nested .target`)
}

function increaseRankBy(n){
const list = document.getElementById('app').querySelectorAll('ul.ranked-list')
for (var i = 0, l = list.length; i < l; i++) {
  var plusOne = parseInt(list[i]) +1;
  list[i].innerHTML = list;
}
}

function deepestChild(){
  return document.getElementById('grand-node');

}
