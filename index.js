// require is like import . here import express to the express bariable 
const express = require('express');
// deceler the express function 
const app = express();
// then declare the port variable where you want to live your website on that port .
const port = process.env.PORT || 5000;
// app.get() take two parameter first is a route /. and second is a function I can use this function write above or write directly here. this function take two argument first is req (short version of request ) and second is res (short version of the response )
app.get('/', (req, res) => {
	res.send(' here I am now trying to code in node, hello man this is the new journey for me ');
})
const users = [
	{id : 1, name : "abc", email : "abc@gmail.com", phone : '01723456'},
	{id : 2, name : "def", email : "def@gmail.com", phone : '01723456'},
	{id : 3, name : "ghi", email : "ghi@gmail.com", phone : '01723456'},
	{id : 4, name : "jkl", email : "jkl@gmail.com", phone : '01723456'},
	{id : 5, name : "mno", email : "mno@gmail.com", phone : '01723456'},
	{id : 6, name : "pqr", email : "pqr@gmail.com", phone : '01723456'}
]
// to create another route like react route use again app.get()
app.get('/users', (req, res) => {
	res.send(users);
})
//  create another route. Here I set the id dynamically if you give anything after the user that value set as the id value. the id value remain inside  req.params like a object parameter. so you can get the value from there.

app.get('/user/:id', (req, res) => {
	console.log(req.params)
	const id = parseInt(req.params.id); 
	// if i want to get the one object element using the id . then send the id to the users as a property and find the user which remain same id.
	// const user = users[id]; 
	// the better option 
	const user = users.find(u => u.id === id)
	res.send(user);
})
// then use app.listen() that take two parameter one is port another is a optional function 
app.listen(port, () => {
	console.log('listening to port', port);
})
// then run command with node index.js 