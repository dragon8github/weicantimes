"use strict";
const http = require('http');
const fs = require('fs');
const url = require('url');


let result = "";
let port = 8090;

const onRequest = (req,res) => {
	res.writeHead(200,{'Content-Type':'text/plain;charset=utf-8','Access-Control-Allow-Origin':"*"})
	let shoperId = encodeURI(url.parse(req.url,true).query.shoperId);
	 if(req.url!=="/favicon.ico" && !isNaN(shoperId)) {
		result= JSON.stringify({state:"500",msg:"success",result:fs.readFileSync("../data/shoperInfo.json",'utf8')});
	} else {
		result = JSON.stringify({state:"500",msg:"shoperId is not defined"});
	}
	res.write(result);
	res.end();
}


http.createServer(onRequest).listen(port);  
console.log("Server Start!");