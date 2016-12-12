import Users from '../models/users';

export function searchData(req, res) {
	console.log("requested data",req.body.data.city,req.body.data.locality);
	Users.find({city: req.body.data.city.toLowerCase()}, function(err, doc){
		if(err) {
			console.log("err",err)
		} else {
			res.json({data : doc})
		}
	})
} 