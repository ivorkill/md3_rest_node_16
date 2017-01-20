var user = require('../controllers/user.controller');

module.exports = function(app) {

	app.get('/', function (req, res) {
  		res.send('Hello Visitor')
	})

    app.route('/users')
        .get(user.list)
<<<<<<< HEAD
		.post(user.create);
=======
        .post(user.changeName, user.create);
>>>>>>> 6263409f123420f925f916964f5f4f6509e436f3

    app.route('/users/:userID')
        .get(user.read);

    app.param('userID', user.getUserByID);
};
