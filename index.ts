const axios = require("axios");

exports.Log = ({
    vp,
    vd,
    logType,
    ip,
    message,
    filename,
    lineNumber,
    headers = {},
    endPoint,
    method,
    tags
}) => {
    return new Promise((resolve, reject) => {
        if (!vp || !vd || !logType || !endPoint || !method || !message || !filename || !lineNumber) {
            reject("These are required proprties vp , vd , logType , log , endPoint , method , message , filename , lineNumber");
            return;
        }
        const body = {
            vp,
            vd,
            o: logType,
            a: JSON.stringify({
                b: {
                    c: message,
                    d: filename,
                    f: lineNumber,
                    g: 0,
                    h: "Error",
                },
                k: headers,
                m: endPoint,
                n: method,
                j: tags
            }),
            r: ip
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