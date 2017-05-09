window.addEventListener('load', function () {

  let t = document.querySelector('#test');
  let c = document.querySelector('.r5 :nth-child(5)');
  
  t.addEventListener('click', function () {
    console.log('clicked');
    c.classList.add('highlight');
  });

});
