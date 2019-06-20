(function(){
  'use strict';

  var result = document.getElementById('result');

  var input = document.getElementById('input');
  var btn = document.getElementById('btn');
  // var result2ß

  var input2 = document.getElementById('input2');
  var btn2 = document.getElementById('btn2');

btn.addEventListener('click',function(){

var sum = parseFloat(input.value) * 403040;
if(Number.isNaN(sum)===true){
  result.textContent = "半角数字で入力してください"
}else{

  result.textContent = sum　+ '円';
  console.log(input.value);
  console.log(sum);
  console.log(result)
  // alert(sum +'円です');
  console.log(result.textContent);
  console.log(input.type);
}


});
btn2.addEventListener('click',function(){

var sum = parseFloat(input2.value) * 0.00000001;
if(Number.isNaN(sum)===true){
  result.textContent = '半角数字を入力してください'
}else{

  result.textContent = sum　+ 'BTC';
  console.log(input.value);
  console.log(sum);
  console.log(result)
  // alert(sum +'円です');
  console.log(result.textContent);
  console.log(input.type);
}


});


})();
