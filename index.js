const axios = require("axios");

exports.Log = ({
    error, method, endPoint, requestIp, headers, logType
}) => {
    return new Promise((resolve, reject) => {
        if (!process.env.PROJECT_KEY || !process.env.DELIVERABLE_KEY)
            reject("PROJECT_KEY or DELIVERABLE_KEY is not defined in .env file");
        if (!error || !endPoint || !method || !requestIp) {
            reject("Missing 'error' or 'method' or 'endPoint' or 'requestIp' ");
            return;
        }
        const [filename, line, column] = error.stack.match(/\/([\/\w-_\.]+\.js):(\d*):(\d*)/);
        const body = {
            vp: process.env.PROJECT_KEY,
            vd: process.env.DELIVERABLE_KEY,
            o: logType ? logType : 5,
            a: JSON.stringify({
                b: {
                    c: error?.message,
                    d: filename,
                    f: column,
                    g: 0,
                    h: "Error",
                },
                i: error.stack,
                k: headers,
                m: endPoint,
                n: method,
                j: process.versions
            }),
            r: requestIp
        }

        axios.post("http://192.168.1.152/lighthouseLumen/public/add-log", body, {
            headers: {
                "Content-Type": "application/json"
            }
        }).then(response => {
            resolve(response)
        })
            .catch(error => {
                reject(error)
            });
    });
}