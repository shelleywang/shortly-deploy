// var db = require('../config');
var db = require('../mongoConfig');
var mongo = require('mongoose');
var crypto = require('crypto');
var Promise = require('bluebird');

// var Link = db.Model.extend({
//   tableName: 'urls',
//   hasTimestamps: true,
//   defaults: {
//     visits: 0
//   },
//   initialize: function(){
//     this.on('creating', function(model, attrs, options){
//       var shasum = crypto.createHash('sha1');
//       shasum.update(model.get('url'));
//       model.set('code', shasum.digest('hex').slice(0, 5));
//     });
//   }
// });

var Link = mongo.model('link', db.urls);

// db.urls.statics.hash = function(){
//   var shasum = crypto.createHash('sha1');
//   shasum.update(model.get('url'));
//   model.set('code', shasum.digest('hex').slice(0, 5));
// }


module.exports = Link;
