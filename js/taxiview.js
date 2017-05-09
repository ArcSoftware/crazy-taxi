let View = require('ampersand-view');

module.exports = View.extend({
  
  template: document.querySelector('#taxi-template').innerHTML,
  
  bindings: {
    'model.fuel': '#fuel',
    'model.X': '#X',
    'model.Y': '#Y',
  },
  
  render: function() {
    this.renderWithTemplate();
  },
  
});