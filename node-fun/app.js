const express = require('express');
const app = express();

app.route('/').get((req,res, next) => {
	res.send('Hello World');
})

app.listen(3000, function() {
	console.log('App is running!');
})