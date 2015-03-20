var passport = require('passport'),
    userModel = require('../app/modules/models/UserModel'),
    conf = require('./conf'),
    TwitterStrategy = require('passport-twitter').Strategy;

var passportModule = function(){

    var self = this;
    self.model = new userModel();

    passport.serializeUser(function(user, done){
        done(null, user);
    });

    passport.deserializeUser(function(obj, done){
        done(null, obj);
    });


    passport.use(new TwitterStrategy({
        consumerKey: conf.twitterCredentials.key,
        consumerSecret: conf.twitterCredentials.secret,
        callbackURL: '/auth/twitter/callback'
    },
    function(token, tokenSecret, profile, done){

        //data profile
        var dataProfile = {
            provider_id : profile.id,
            provider    : profile.provider,
            name        : profile.displayName,
            photo       : profile.photos[0].value
        }

        self.model.findAndUpdate(dataProfile, done);
    }));

};

module.exports = passportModule;