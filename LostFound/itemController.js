app.post('/addItem',funvtion(req,res){
		new Item({
		"name"	  : req.body.name,    //I have used the body tag here but there was no body tag in the UI. 
		"finderID"  : //not sure how to get this
		"locationID": req.body.location,
		"picture"   : req.body.imageURL,
		"details"   : req.body.detail,
		"date"      : req.body.date,
		"closed"    : { type: Boolean, required: true }
			}).save(function(err,doc){
					if(err) res.json(err);
					else res.send('Successfully Inserted');				
				})
	});
