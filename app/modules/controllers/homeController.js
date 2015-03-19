var conf = require('../../../config/conf');


var Home = function(){
    this.response = function(action, req, res, next){
        this[action](req, res, next);
    }
};

Home.prototype.home = function(req, res, next){
    console.info('do something');
    res.send('home');
}

module.exports = Home;