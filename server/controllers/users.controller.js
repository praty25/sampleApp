import Users from '../models/users';
import sanitizeHtml from 'sanitize-html';
import jwt from 'jsonwebtoken';
import serverConfig from '../config';
import md5 from 'md5';


export function createUser(req, res) {
  if (!req.body.data.name || !req.body.data.number || !req.body.data.email || !req.body.data.password || !req.body.data.city || !req.body.data.locality) {
    res.status(403).end();
  }
  Users.findOne({
    email:req.body.data.email
  }, function(err, user) {

    if (err) throw err;
    
    if(user) {
      res.json({data: { message: 'Email Id already exists'}})
    }else {
      const newUser = new Users(req.body.data);

      // Let's sanitize inputs
      newUser.name = sanitizeHtml(newUser.name);
      newUser.number = sanitizeHtml(newUser.number);
      newUser.email = sanitizeHtml(newUser.email);
      newUser.password = sanitizeHtml(md5(newUser.password));
      newUser.city = sanitizeHtml(newUser.city).toLowerCase();
      newUser.locality = sanitizeHtml(newUser.locality).toLowerCase();



      newUser.save((err, saved) => {
        if (err) {
          res.status(500).send(err);
        }else{
          res.json({data: { message: 'User registered successfully'}});
        }
      })
    }
  })
}
  


export function checkUser(req, res) {    
  Users.findOne({
    email: req.body.data.email
  }, function(err, user) {

    if (err) throw err;

    if (!user) {
      res.json({ data: {success: false, message: 'Authentication failed. User not found.' }});
    } else if (user) {

     console.log("user doc:",user);
      // check if password matches
      if(md5(req.body.data.password) != user.password) {
        res.json({data: {success: false, message: 'Authentication failed. Wrong password.' }});
      } else {  

          // if password and email matches
          // create a token

          console.log("token is:",serverConfig.secret);
          

          let token = jwt.sign(user, serverConfig.secret);
          res.json({
          data:{
            success: true,
            message: 'enjoy your token!',
            token: token
          }
        });
      }
    }
  })   
}
