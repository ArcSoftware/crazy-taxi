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

  let taxiModel = new TaxiModel();
  taxiModel.fuel = 25;
  taxiModel.X = 0;
  taxiModel.Y = 0;

  let taxiView = new TaxiView({
    el: document.querySelector('#taxi-view'),
    model: taxiModel,
  });

  taxiView.render();


}); // close window load