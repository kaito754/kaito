'use strict';

{
  const div = document.querySelector('div');

  document.addEventListener('mousemove', function(e) {
    div.textContent = `${e.clientX}:${e.clientY}`;
  });

const a =document.querySelector('a');
const span = document.querySelector('span');

a.addEventListener('click',function(e){
  e.preventDefault();
  a.classList.add('hidden');
  span.classList.remove('hidden');

})
}
