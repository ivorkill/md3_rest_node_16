var user = require('../controllers/user.controller');

module.exports = function(app) {

	app.get('/', function (req, res) {
  		res.send('Hello Visitor')
	})

    app.route('/users')
        .get(user.list)
		.post(user.create);

    app.route('/users/:userID')
        .get(user.read);

    app.param('userID', user.getUserByID);
};
