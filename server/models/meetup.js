/**
 * Created by arif on 30/3/16.
 */

var mongoose = require('mongoose');

module.exports = mongoose.model('meetup',{
  name:{type:String}

});
