window.addEventListener('load', function () {
  let TaxiModel = require('./taximodel');
  let TaxiView = require('./taxiview');

  let rowIndex = 10;
  let columnIndex = 10;
  document.querySelector('#grid').rows[rowIndex].cells[columnIndex].classList.add('highlight');
  // source: 
  // https://stackoverflow.com/questions/10940714/how-do-you-select-a-table-cell-by-its-index

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
    if (taxiModel.fuel > 0 && taxiModel.Y < 10) {
      rowIndex--;
      document.querySelector('#grid').rows[rowIndex].cells[columnIndex].classList.add('highlight');
      document.querySelector('#grid').rows[rowIndex + 1].cells[columnIndex].classList.remove('highlight');
      taxiModel.fuel -= 1;
      taxiModel.Y += 1;
    }
  });

  let downBtn = document.querySelector('#down');
  downBtn.addEventListener('click', function () {
    if (taxiModel.fuel > 0 && taxiModel.Y > -10) {
      rowIndex++;
      document.querySelector('#grid').rows[rowIndex].cells[columnIndex].classList.add('highlight');
      document.querySelector('#grid').rows[rowIndex - 1].cells[columnIndex].classList.remove('highlight');
      taxiModel.fuel -= 1;
      taxiModel.Y -= 1;
    }
  });

  let leftBtn = document.querySelector('#left');
  leftBtn.addEventListener('click', function () {
    if (taxiModel.fuel > 0 && taxiModel.X > -10) {
      columnIndex--;
      document.querySelector('#grid').rows[rowIndex].cells[columnIndex].classList.add('highlight');
      document.querySelector('#grid').rows[rowIndex].cells[columnIndex + 1].classList.remove('highlight');
      taxiModel.fuel -= 1;
      taxiModel.X -= 1;
    }
  });

  let rightBtn = document.querySelector('#right');
  rightBtn.addEventListener('click', function () {
    if (taxiModel.fuel > 0 && taxiModel.X < 10) {
      columnIndex++;
      document.querySelector('#grid').rows[rowIndex].cells[columnIndex].classList.add('highlight');
      document.querySelector('#grid').rows[rowIndex].cells[columnIndex - 1].classList.remove('highlight');
      taxiModel.fuel -= 1;
      taxiModel.X += 1;
    }
  });




}); // close window load