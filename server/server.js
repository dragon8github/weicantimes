"use strict";
const express = require('express');
const fs = require('fs');
const url = require('url');

let app = express();
let port = 8090;
let result = "";


// all get post
app.all('/ajax/menu/:id', function (req, res) {
  	res.header('Access-Control-Allow-Origin', '*');
	res.header("Content-Type", "text/plain;charset=utf-8");
	let id = req.params.id;
	if(req.url!=="/favicon.ico" && !isNaN(id)) {
	   result = {state:"200",msg:"success",result:fs.readFileSync("../data/menu.json", 'utf8')}; 
	} else {
		result = {state:"500",msg:"shoperId is not defined"}
	}
	res.end(JSON.stringify(result));
})

app.all('/ajax/desk/:id', function (req, res) {
  	res.header('Access-Control-Allow-Origin', '*');
	res.header("Content-Type", "text/plain;charset=utf-8");
	let id = req.params.id;
	if(req.url!=="/favicon.ico" && !isNaN(id)) {
	   result = {state:"200",msg:"success",result:fs.readFileSync("../data/desk.json", 'utf8')}; 
	} else {
		result = {state:"500",msg:"shoperId is not defined"}
	}
	res.end(JSON.stringify(result));
})



var server = app.listen(port, function () {
	console.log("Server Start!");
})