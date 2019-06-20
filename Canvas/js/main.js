(function(){
  'use strict';



  var stage = document.getElementById('stage');
  var ctx;
  var width = 480;
  var height = 260;
  var dpr;

  var x = 100;
  var y = 100;


  if (typeof stage.getContext === 'undefined'){
    return;
  }
  ctx = stage.getContext('2d');
  dpr = window.devicePixelRatio || 1;


  stage.width = width * dpr;
  stage.height = height * dpr;
  ctx.scale(dpr, dpr);
  stage.style.width = width + 'px';
  stage.style.height = height + 'px';





  ctx.strokeRect(100, 50, 100, 60);
  ctx.fillRect(120, 70, 100, 60);
  ctx.clearRect(140, 90, 100, 60);
})();
