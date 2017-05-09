// window.addEventListener('load', function () {
//   let t = document.querySelector('#test');
//   let c = document.querySelector('.r5 :nth-child(5)');

//   t.addEventListener('click', function () {
//     console.log('clicked');
//     c.classList.add('highlight');
//   });
// });
// test the click button to highlight table cell

window.addEventListener('load', function () {
  let TaxiModel = require('./taximodel');
  let TaxiView = require('./taxiview');

  document.querySelector('#zero').classList.add('highlight');

  let taxiModel = new TaxiModel();
  taxiModel.fuel = 25;
  taxiModel.X = 0;
  taxiModel.Y = 0;

  let taxiView = new TaxiView({
    el: document.querySelector('#taxi-view'),
    model: taxiModel,
  });

  taxiView.render();


  let upBtn = document.querySelector('#up');
  upBtn.addEventListener('click', function () {
    if (taxiModel.fuel > 0) {
      document.querySelector('#zero').classList.remove('highlight');
      taxiModel.fuel -= 1;
      taxiModel.Y += 1;
    }
  });

  let downBtn = document.querySelector('#down');
  downBtn.addEventListener('click', function () {
    if (taxiModel.fuel > 0) {
      document.querySelector('#zero').classList.remove('highlight');
      taxiModel.fuel -= 1;
      taxiModel.Y -= 1;
    }
  });

  let leftBtn = document.querySelector('#left');
  leftBtn.addEventListener('click', function () {
    if (taxiModel.fuel > 0) {
      document.querySelector('#zero').classList.remove('highlight');
      taxiModel.fuel -= 1;
      taxiModel.X -= 1;
    }
  });

  let rightBtn = document.querySelector('#right');
  rightBtn.addEventListener('click', function () {
    if (taxiModel.fuel > 0) {
      document.querySelector('#zero').classList.remove('highlight');
      taxiModel.fuel -= 1;
      taxiModel.X += 1;
    }
  });








}); // close window load