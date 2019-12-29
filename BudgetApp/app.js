//Budget Controller
var budgetController = (function() {})();

var UIController = (function() {
  var DOMstrings = {
    inputType: ".add__type",
    description: ".add__description",
    value: ".add__value"
  };

  return {
    getInput: function() {
      return {
        type: document.querySelector(DOMstrings.inputType).value,
        description: document.querySelector(DOMstrings.description).value,
        value: document.querySelector(DOMstrings.value).value
      };
    }
  };
})();

var mainController = (function(budgetCtrl) {
  var controlAddItem = function() {
    //TODO 1. Get the filed Data
    var input = UIController.getInput();
    console.log(input);

    //TODO 2. Add the item to budget controller

    //TODO 3. Add the item to the UI

    //TODO 4. Calculate the budget

    //TODO 5. Display the budget on the UI
  };

  document.querySelector(".add__btn").addEventListener("click", controlAddItem);

  document.addEventListener("keypress", function(event) {
    if (event.keyCode === 13 || event.which === 13) {
      controlAddItem();
    }
  });
})(budgetController, UIController);
