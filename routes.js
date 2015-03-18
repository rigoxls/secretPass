var controllersManager = require('./app/default/controllers/controllersManager');

var Routes = function(app){
    var controllers = [];

    for(var cm incontrollersManager){
        controllers[cm] = new controllersManager[cm];
    }

    app.expressServer.get('/home', function(req, res, next){
        controllers['homeController'].response('home', req, res, next);
    })

}

module.exports = Routes;