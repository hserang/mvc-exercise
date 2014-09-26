//top level lib namespace
var Base = {};

// need to create lib of helpers
var __ = {};

Base.Model = function() {
  this.attrs = {};
};

Base.Model.prototype = {
  get: function(key) {
    // need case for to check for 0 or no key set as well
    if (typeof attrs[key] !== "undefined") {
      //do some error thing
    }

    return attrs[key];
  },

  set: function(key, val) {
    // need to validate input
    // need to add eventing system
    attrs[key] = val;
  }

};
