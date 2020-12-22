const Parse = require('parse/node');

Parse.initialize('app');

Parse.serverURL = 'http://localhost:1337/parse';

const User = Parse.Object.extend('User');

const user = new User();

const q = new Parse.Query('User');

q.equalTo('username', 'adiat');

q.containedIn('username', ['adiat']);

q.find()
	.then((users) => {
		users.map((user) => {
			console.log(user.get('username'));
		});
	})
	.catch((err) => {
		console.log(err);
	});
