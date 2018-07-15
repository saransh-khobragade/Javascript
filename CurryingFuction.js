var Sum1 = function(x) {
    return function(y) {
        return function(z) {
            console.log(x+y+z);
        }
    };
  };
  
  var Sum2 = Sum1(5);
  var Sum3=  Sum2(3);

  Sum3(4);
  Sum1(3)(4)(5);