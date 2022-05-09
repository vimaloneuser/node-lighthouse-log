# How to installation
```js live=true
$ npm i node-lighthouse-log
```

# Usage
```js live=true
const {Log} = require("node-lighthouse-log");
```
# Live code example 

```js live=true
const {Log} = require("node-lighthouse-log");

exports.controller = () => {

try{
  // code
}
catch(error=>{
  this.ErrorLog({
		vp: "Project key",
		vd: "Deliverable key",
		logType: 5, // The value can be 1 for debug, 2 for warning, 3 for notice, 4 for info, 5 for error
		message: "Message to log" , // message you want to log
		filename:"D://src/controller.js", // file name with full path where you are putting log event
		lineNumber: 3 // "Liner number",
		headers :{
      "Content-Type":"application/json"
    },
		method:"GET",
		endPoint: "http://127.0.0.1:8000/api/test/addLog", // api endpoint
		tags: "['platform'=>'Node.js','version'=>'14.0']", // server and technologies information 
		ip: "192.168.1.55" 
	}).then(res => {
		console.log(res, "res")
	}).catch(err => {
		console.log(err, "res")
	})
})
	
};
```