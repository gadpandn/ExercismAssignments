var TwoFer = function () {};

TwoFer.prototype.twoFer = function (who) {
  // your code goes here
  // You will have to use the parameter who
  // in some way. In this example, it is just
  // returned, but your solution will have to
  // use a conditional.

    var str = "One for you, one for me.";
    var regExp = /you/;
    if(who) {
      who = str.replace(regExp,who);
    } else {
      who = str;
    }
    return who;
  }
module.exports = TwoFer;
