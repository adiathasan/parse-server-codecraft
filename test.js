const Parse = require('parse/node');

Parse.initialize('app');

Parse.serverURL = 'http://localhost:1337/parse';

const Test = Parse.Object.extend('Test');

const Comment = Parse.Object.extend('Comment');

const comment = new Comment();

const test = new Test();

const q = new Parse.Query(test);

const data = {
	name: 'ratul',
	age: 23,
	pointer: 'x1LqJyj6hX',
};

// test
// 	.save(data)
// 	.then((obj) => {
// 		return q.get(obj.id);
// 	})
// 	.then((obj) => {
// 		obj.set('name', 'lula');
// 		return obj.save();
// 	})
// 	.then(() => {
// 		comment.set('message', 'Awesome test');
// 		comment.set('parent', test);
// 		return comment.save();
// 	})
// 	.then((obj) => {
// 		console.log('success on created', obj);
// 	})
// 	.catch((err) => {
// 		console.log(err);
// 	});

q.find()
	.then((tests) => {
		tests[2].increment('age');
		return tests[2].save();
	})
	.then((test) => {
		const { name, age } = test.attributes;
		console.log(name, age, test.id);
	});
