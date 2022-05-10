# node-lighthouse-error-log
A function which calls a lighthouse log api
# Motivation
Instead of calling lighouse log api all the time. Why not to call one function which can manage all our work for logs. 

# Getting started
## What you need before use ?
You need to register with this Light house portal  http://lighthouse.itpathsolutions.com:9011/login. Then you need to add your project with in portal and get your **Project Key** and **Deliverable Key**. Now you have to put these keys into .env file into your peoject's root folder.

# Installation
```js live=true
$ npm i node-lighthouse-error-log
```

# ENV setup
.env
```js live=true
PROJECT_KEY=your project key
DELIVERABLE_KEY=your deliverable key
```

# Usage
```js live=true
const { Log } = require("node-lighthouse-error-log");
```
# Example 

```js live=true
const { Log } = require("node-lighthouse-error-log");

exports.controller = () => {

    try {
        // code
    }
    catch ((error) => {
        this.ErrorLog({
            error: error,
            logType: 5, 
            headers: {
                "Content-Type": "application/json"
            },
            method: "GET",
            endPoint: "http://127.0.0.1:8000/api/test/addLog",
            requestIp: "192.168.1.55"
        }).then(res => {
            console.log(res, "res")
        }).catch(err => {
            console.log(err, "res")
        })
    })
	
};
```
# Props
| Props | Description | Example |
| --- | --- | --- |
| error | Error trace object |
| logType | The value can be 1 for debug, 2 for warning, 3 for notice, 4 for info, 5 for error , default = 5 | 5 |
| method | Http request method | GET, POST, PUT, etc.|
| endPoint | Http API endpoint | http://127.0.0.1:8000/api/test/addLog|
| requestIp | Http request ip address | 192.168.1.1|

# Thanks
Our implementation was inspired by http://lighthouse.itpathsolutions.com:9011/guide/api