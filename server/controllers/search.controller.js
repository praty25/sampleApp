import Users from '../models/users';

export function searchData(req, res) {
	if(req.body.data.city && !req.body.data.locality){
		Users.find({city: req.body.data.city}, function(err, doc) {
			res.json({data: doc});
		})
	} else if(req.body.data.locality && !req.body.data.city){
		Users.find({locality: req.body.data.locality}, function(err, doc) {
			res.json({data: doc})
		})
	} else if(req.body.data.city && req.body.data.locality){
		Users.find({city: req.body.data.city, locality: req.body.data.locality },function(err, doc){
			if(err) {
				console.log("err",err)
			} else if(doc){
				res.json({data : doc});
			} 
		}) 
	} 
} 