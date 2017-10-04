exports = typeof window === 'undefined' ? global : window;

/* eslint prefer-reflect: ["error", { "exceptions": ["call"] }] */

exports.objectsAnswers = {
  alterContext: function(fn, obj) {
    return fn.call(obj);
  },

  alterObjects: function(constructor, greeting) {

  },

  iterate: function(obj) {

  }
};
