// JavaScript Document
var mongoose = require('mongoose');
//var Schema=mongoose.Schema;
//Lets connect to our database using the DB server URL.
mongoose.connect('mongodb://localhost/lostfound');

//var User = mongoose.model('User', {name: String, roles: Array, age: Number});

var Account =  mongoose.model('Account', {
		"_id"     : { type: Number, required: true },
		"email"   : { type: String, required: true, index: { unique: true } },
		"password": { type: String, required: true }
	});

var Claimed = mongoose.model('Claimed', {
		"_id"     : { type: Number, required: true },
		"accountID": { type: Number, required: true },
		"itemID"   : { type: Number, required: true }
	});

	//module.exports = mongoose.model(Claimed&, ClaimedSchema);
	
	var Item = mongoose.model('Item', {
		"_id"       : { type: Number, required: true },
		"finderID"  : { type: Number, required: true },
		"locationID": { type: Number, reuqired: true },
		"picture"   : { type: String },
		"details"   : { type: String },
		"date"      : { type: Date, required: true },
		"closed"    : { type: Boolean, required: true }
	});

	//module.exports = mongoose.model('Item', ItemSchema);
	
	var Location = mongoose.model('Location', {
		"_id"    : { type: Number, required: true },
		"address": { type: Number, required: true },
		"street" : { type: String, required: true }
	});

	//module.exports = mongoose.model(Location&, LocationSchema);
	
	var User = mongoose.model('User', {
		"_id"      : { type: Number, required: true },
		"accountID": { type: Number, required: true },
		"fName"    : { type: String },
		"lName"    : { type: String },
		"pNum"     : { type: Number }
	});

/**
 * Lets Use our Models
 * */

//Lets create a new user
//var user1 = new User({name: 'modulus admin', age: 42, roles: ['admin', 'moderator', 'user']});

//Some modifications in user object
//user1.name = user1.name.toUpperCase();

//Lets try to print and see it. You will see _id is assigned.
//console.log(user1);

//Lets save it
/*user1.save(function (err, userObj) 
{
  if (err) {
    console.log(err);
  } else {
    console.log('saved successfully:', userObj);
  }
});*/
//mongoose.connection.close();
