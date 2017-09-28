exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    var newStr = '';
    var count = 0;

    for (var i = 0; i < str.length; i++) {
      if (str[i] !== newStr[newStr.length - 1] && str[i] === str[i + 1]) {
        while (count < amount) {
          newStr += str[i];
          count++;
        }
        count = 0;
      }
      if (str[i] !== str[i - 1] && str[i] !== str[i + 1]) {
        newStr += str[i];
      }
    }
    return newStr;
  },

  wordWrap: function(str, cols) {
    var newStr = '';

    for (var i = 0; i < str.length; i++) {
      var twoAhead = str[i + 2];
      if (str[i] === ' ' && twoAhead !== ' ') {
        newStr += '\n';
      } else {
        newStr += str[i];
      }
    }
    return newStr;
  },

  reverseString: function(str) {
    var newStr = '';
    for (var i = str.length - 1; i >= 0; i--) {
      newStr += str[i];
    }

    return newStr;
  }
};
