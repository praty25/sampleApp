import Users from '../models/users';
import sanitizeHtml from 'sanitize-html';
import jwt from 'jsonwebtoken';
import serverConfig from '../config';


export function createUser(req, res) {
  if (!req.body.userData.name || !req.body.userData.number || !req.body.userData.email || !req.body.userData.password) {
    res.status(403).end();
  }

  const newUser = new Users(req.body.userData);

  // Let's sanitize inputs
  newUser.name = sanitizeHtml(newUser.name);
  newUser.number = sanitizeHtml(newUser.number);
  newUser.email = sanitizeHtml(newUser.email);
  newUser.password = sanitizeHtml(newUser.password);
  

  
  newUser.save((err, saved) => {
    if (err) {
    	res.status(500).send(err);
    }else{
    	res.json({ userData: saved });
    }
  });
}

export function checkUser(req, res) {
  Users.findOne({
    email: req.body.data.email
  }, function(err, user) {

    if (err) throw err;

    if (!user) {
      res.json({ data: {success: false, message: 'Authentication failed. User not found.' }});
    } else if (user) {

      // check if password matches
      if (user.password != req.body.data.password) {
        res.json({data: {success: false, message: 'Authentication failed. Wrong password.' }});
      } else {  

          // if password and email matches
          // create a token

          console.log("token is:",serverConfig.secret);
          

          let token = jwt.sign(user, serverConfig.secret);
          res.json({
          data:{
            success: true,
            message: 'Enjoy your token!',
            token: token
          }
        });
      }
    }
  })   
}
