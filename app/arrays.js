exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        return i;
      }
    }
    return -1;
  },

  sum: function(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  },

  remove: function(arr, item) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] !== item) {
        newArr.push(arr[i]);
      }
    }
    return newArr;
  },

  removeWithoutCopy: function(arr, item) {
    var length = arr.length;
    for (var i = 0; i < length; i++) {
      if (arr[i] === item) {
        arr.splice(i, 1);
        i--;
      }
    }
    return arr;
  },

  append: function(arr, item) {
    arr[arr.length] = item;
    return arr;
  },

  truncate: function(arr) {
    arr.splice(arr.length - 1, 1);
    return arr;
  },

  prepend: function(arr, item) {
    var newArr = [ item ];
    for (var i = 0; i < arr.length; i++) {
      newArr.push(arr[i]);
    }
    return newArr;
  },

  curtail: function(arr) {
    arr.splice(0, 1);
    return arr;
  },

  concat: function(arr1, arr2) {
    for (var i = 0; i < arr2.length; i++) {
      arr1.push(arr2[i]);
    }
    return arr1;
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {
    var count = 0;

    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        count++;
      }
    }
    return count;
  },

  duplicates: function(arr) {
    var contained = {};
    var duplicates = [];

    for (var i = 0; i < arr.length; i++) {
      if (contained[arr[i]]) {
        contained[arr[i]]++;
      } else {
        contained[arr[i]] = 1;
      }
    }

    for (var j = 0; j < arr.length; j++) {
      if (contained[arr[j]] > 1 && !duplicates.includes(arr[j])) {
        duplicates.push(arr[j]);
      }
    }

    return duplicates;
  },

  square: function(arr) {
    var newArr = [];

    for (var i = 0; i < arr.length; i++) {
      newArr.push(arr[i] * arr[i]);
    }
    return newArr;
  },

  findAllOccurrences: function(arr, target) {
    var occurences = [];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        occurences.push(i);
      }
    }
    return occurences;
  }
};
