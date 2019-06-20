(function(){

var box1 = document.getElementById('box1');
var box2 = document.getElementById('box2');
var box3 = document.getElementById('box3');
var text = document.getElementById('text');

var contents = [
  'http://www.nishinokana.com/sp/assets/img/top/kv.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1q4dFAn5d00MMpiqQe3wEHH3APOS_uzYCXtjUzz28zj2C9922',
  'http://cdn.helloproject.com/img/artist/o/6e6059e38d8b2773168986575b06b7eb8a85bb23.jpg',

];
box1.addEventListener('click',function(){
  if(this.className.indexOf('shake')=== -1){
    console.log(-1)
    this.className='shake';
    text.textContent='会いたくて震えるわ'
    text.style.color="pink";
  }else{
    this.className='';
  }


});
box2.addEventListener('click',function(){
  if(this.className.indexOf('shake2')=== -1){
    console.log(-1)
    this.className='shake2';
    text.textContent='そばにいるわよ'
    text.style.color="red";
  }else{
    this.className='';
  }


});
box3.addEventListener('click',function(){
  if(this.className.indexOf('shake3')=== -1){
    console.log(-1)
    this.className='shake3';
    this.src='https://rr.img.naver.jp/mig?src=http%3A%2F%2Flucifer_yoshi.c.blog.so-net.ne.jp%2F_images%2Fblog%2F_e6d%2Flucifer_yoshi%2Fbizyo20saisyuukai4-52f44.jpg%3Fc%3Da0&twidth=1000&theight=0&qlt=80&res_format=jpg&op=r'
    text.textContent='オーバーリアクションワイプの矢口';
    text.style.color="yellow";
  }else{
    this.className='';
  }


});




})();
