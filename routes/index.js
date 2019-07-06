var maxNum = 300;
var express = require('express');
var passport = require('passport');
var Account = require('../models/account');
var router = express.Router();
var async = require('async');
var crypto = require('crypto');
var mongoose = require('mongoose');
var nodemailer = require('nodemailer');
const mailjet = require ('node-mailjet').connect("eb0edeaa5f2edc36859d4a593b25f5d7", "914768a07800efac40cff59162e751c9")

var Keys = {};  
var Machines = {};//Objects used to store the machine values

router.get('/', function (req, res) {
      if (req.user == undefined){
        res.render('index', { user : req.user });
    }else{
        res.render('index', { user : req.user ,test:req.user.level});
    }
});

router.get('/forgot', function(req, res) {
    res.render('pages/forgot', {
      user: req.user
    });
  });

 router.post('/forgot', function(req, res, next) {
    async.waterfall([
      function(done) {
        crypto.randomBytes(20, function(err, buf) {
          var token = buf.toString('hex');
          done(err, token);
        });
      },
      function(token, done) {
        Account.findOne({ email: req.body.email }, function(err, user) {
          if (!user) {
           
            req.flash('error', 'No account with that email address exists.');
            return res.redirect('/forgot');
          }
         
          user.resetPasswordToken = token;
          user.resetPasswordExpires = Date.now() + 3600000; // 1 hour
  
          user.save(function(err) {
            done(err, token, user);
          });
        });
      },
      function(token, user, done) {
        
        const request = mailjet
    .post("send", {'version': 'v3.1'})
    .request({
        "Messages":[
                {
                        "From": {
                                "Email": "james.lyons@wade.co.uk",
                                "Name": "Me"
                        },
                        "To": [
                                {
                                        "Email": user.email,
                                        "Name": "You"
                                }
                        ],
                        "Subject": "Password Reset link For WadeDCS",
                        "TextPart": "Greetings from Mailjet!",
                        "HTMLPart": 
                        'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
                        'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
                        'http://' + req.headers.host + '/reset/' + token + '\n\n' +
                        'If you did not request this, please ignore this email and your password will remain unchanged.\n'
                }
        ]
    })
request
    .then((result) => {
        console.log(result.body)
    })
    .catch((err) => {
        console.log(err.statusCode)
    })
        
    
       

          req.flash('info', 'An e-mail has been sent to ' + user.email + ' with further instructions.');
          res.render('index');
          done('done');
          
      }
    ], function(err) {
      if (err) return next(err);
        //res.redirect('/');
    });
  });

  router.get('/reset/:token', function(req, res) {
    Account.findOne({ resetPasswordToken: req.params.token, resetPasswordExpires: { $gt: Date.now() } }, function(err, user) {
      if (!user) {
        req.flash('error', 'Password reset token is invalid or has expired.');
        return res.redirect('/forgot');
      }
      res.render('pages/reset', {
        user: req.user
      });
    });
  });

 router.post('/reset/:token', function(req, res) {
    async.waterfall([
        function(done) {
            Account.findOne({ resetPasswordToken: req.params.token, resetPasswordExpires: { $gt: Date.now() } }, function(err, user) {
            if (!user) {
                req.flash('error', 'Password reset token is invalid or has expired.');
                return res.redirect('back');
            }
         
            Account.findById(user._id, function(err, user) {
                user.setPassword(req.body.password, function(err) {
                    if (err) { 
                        console.log(err);
                    }
                    user.save(function(err) {
                        if (err) {
                            console.log(err)
                        }//handle error
                        else //handle success
                        {
                            user.resetPasswordToken = undefined;
                            user.resetPasswordExpires = undefined;
                        }
                    });
                });
            });

            user.save(function(err) {
                req.logIn(user, function(err) {
                    done(err, user);
                });
            });
        });
    },
    function(user, done) {
        req.flash('success', 'Success! Your password has been changed.');
        done();
    }], 
    function(err) {
      res.redirect('/');
    });
});

router.get('/index', function (req, res) {
    res.render('index', { user : req.user });
});

router.get('/input', function (req, res) {
    res.render('pages/input/input', { user : req.user });
});

router.get('/unAuth', function (req, res) {
    res.render('pages/unAuth', { user : req.user });
});

router.get('/output', function (req, res) {
    res.render('pages/output', { user : req.user });
});

router.get('/pcm', function (req, res) {
    console.log("NEW")
    //console.log(req)
    console.log(req.user)
    if (req.user == undefined){
        res.render('pages/unAuth', { user : req.user });
    }else{
        console.log("ok")
        console.log(req.user._doc.level)
        if (req.user._doc.level > 0)
        {
            res.render('pages/pcm', { user : req.user });
        }else{
            res.render('pages/unAuth', { user : req.user });
        }
    }
});

router.get('/input/sacmi', function (req, res) {

    if (req.user == undefined){
        
        res.redirect("../unAuth");
       
    }else{

        if (req.user._doc.level >=5)
        {

            Account.find({}, function(err, users) {
                var userMap = {};
              
                users.forEach(function(user) {
                    userMap[user._id] = user;
                });
               
                res.render('pages/input/sacmi', { user : req.user });
            });
        }else{
           
            res.redirect("../unAuth");
           
        }
      
    }
});

router.get('/admin', function (req, res) {


    if (req.user == undefined){
        
        res.render('pages/unAuth', { user : req.user });
    }else{
        console.log("ok")
        console.log(req.user._doc.level)
        if (req.user._doc.level >=10)
        {

            Account.find({}, function(err, users) {
                var userMap = {};

              
                users.forEach(function(user) {
                  userMap[user._id] = user;
                });
               
                res.render('admin/admin', { user : req.user });
            });
        }else{
           
            res.render('pages/unAuth', { user : req.user });
        }
      
    }
});

router.get('/admin-users', function (req, res) {


    if (req.user == undefined){
        
        res.render('pages/unAuth', { user : req.user });
    }else{
        console.log("ok")
        console.log(req.user._doc.level)
        if (req.user._doc.level >=10)
        {

            Account.find({}, function(err, users) {
                var userMap = {};

              
                users.forEach(function(user) {
                  userMap[user._id] = user;
                });
               
                res.render('admin/users', { user : req.user });
            });
        }else{
           
            res.render('pages/unAuth', { user : req.user });
        }
      
    }
});

router.get('/admin/data', function (req, res) {

    Account.find({}, function(err, users) {
        
        var userMap = {};

        users.forEach(function(user) {

            userMap[user._id] = user;
            if (userMap[user._id]["resetPasswordExpires"] != null) {
                userMap[user._id]["resetPasswordExpires"]="";
            }
            if (userMap[user._id]["resetPasswordToken"] != null) {
                userMap[user._id]["resetPasswordToken"]="";
            }
        });
      
        data={};

        data["allUsers"] = userMap;
        data["UserCount"] = users.length;

        res.status(200).send(data);
    });
});

router.get('/register', function(req, res) {
    res.render('pages/register', { });
});

router.post('/register', function(req, res) {
    
    Account.register(new Account({ username : req.body.username,email : req.body.email ,name : req.body.name,level:0 }), req.body.password, function(err, account) {
        if (err) {
            console.log(err)
            return res.render('pages/register', { account : account });
        }

        passport.authenticate('local')(req, res, function () {
            res.redirect('/');
        });
    });
});

router.get('/login', function(req, res) {
    res.render('pages/login', { user : req.user });
});

router.post('/login', passport.authenticate('local'), function(req, res) {
    res.redirect('/');
});

router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});

router.get('/ping', function(req, res){
    res.status(200).send("pong!");
});

router.get('/update', function(req, res){
   
    if (req.query.Machine == undefined){        
    }else{
        console.log(req.query.Machine +" Updated.");
        
        var localCopy = Machines[req.query.Machine];

        if (localCopy == undefined){ localCopy= {}};

        localCopy[req.query.Key] = req.query.Value;

        if (req.query.Key == "LActualPressure"){

            var LActualPressures = localCopy.LActualPressures;

            if (LActualPressures == undefined){
                
                LActualPressures = [];
            }

            LActualPressures.push(req.query.Value/10);

            if (LActualPressures.length > maxNum)
            {
                LActualPressures.shift();
            }

            localCopy.LActualPressures = LActualPressures;
        }


        if (req.query.Key == "LNominalPressure"){

            var LNominalPressures = localCopy.LNominalPressures;

            if (LNominalPressures == undefined){
                
                LNominalPressures = [];
            }

            LNominalPressures.push(req.query.Value/10);

            if (LNominalPressures.length > maxNum)
            {
                LNominalPressures.shift();
            }

            localCopy.LNominalPressures = LNominalPressures;
        }

        Machines[req.query.Machine] = localCopy;

        //console.log(Machines);
    }
   // console.log("4");
    res.status(200).send(Machines);
});

module.exports = router;