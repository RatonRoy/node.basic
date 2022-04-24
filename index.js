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
// then use app.listen() that take two parameter one is port another is a optional function 
app.listen(port, () => {
	console.log('listening to port', port);
})
// then run command with node index.js 