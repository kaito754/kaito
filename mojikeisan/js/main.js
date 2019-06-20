(function(){
  'use strict';

var comment = document.getElementById('comment');
var label = document.getElementById('label');
var btn = document.getElementById('btn');
var LIMIT = 30;
var WARNING = 10;

label.innerHTML = LIMIT;


comment.addEventListener('keyup', function(){
  var remaining = LIMIT - this.value.length;
  label.innerHTML = remaining;
  if(remaining < WARNING){
    label.className = "warning";
    console.log('warning');
  } else {
    label.className = '';
  }
});
btn.addEventListener('click', function() {
    this.className = 'clicked';
    console.log('クリックされました！');
    this.innerHTML = 'ウイルスに感染しました'
    comment.className = 'pushed2';
    comment.value = 'ウイルスの真骨頂みせたろか？？？';

}, false);




})();
