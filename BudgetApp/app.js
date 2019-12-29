var budgetController = (function() {
  var x = 10;
  var add = function(a) {
    return x + a;
  };

  return {
    publicTest: function(b) {
      return add(b);
    }
  };
})();

var UIController = (function(){

  //TODO Code here Some


})();

var mainController = (function(budgetCtrl) {
  var a = 3;

  var x = budgetCtrl.publicTest(a);

  return {
    test: function() {
      console.log(x);
    }
  };
})(budgetController,UIController);
