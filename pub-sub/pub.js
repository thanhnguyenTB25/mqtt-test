
var mqtt = require('mqtt'); // module MQTT tren Nodejs "npm install mqtt" trong terminal vscode

var settings = {
    port: 1883,             // cong mac dinh
    host: '192.168.125.253',    // ip Laptop 
    keepalive: 100,        // chờ 1000 lần kết nối
};
const client = mqtt.connect(settings);  // cấu hình cho giao thức


client.on('connect', () => {       // kết nối thành công
    console.log('Connected MQTT')

    // có kết nối là gửi liên tục (1tin)/(5s)
    //setInterval(function () {
        //const button = ["on", "off"];
        //const out = `but1: ${button[Math.floor(Math.random() * button.length)]} but2: ${button[Math.floor(Math.random() * button.length)]}`;
        //lấy ngẫu nhiên phần tử của mảng => chuyển thành chuỗi 
        const out = "Nguyen Tien Thanh";
        const topic = "thanh";        // topic : output
        client.publish(topic, out, { qos: 0, retain: false }, (error) => {
            if (error) {
                console.error(error)
            }
            // console.log(topic + ":", butout);
        })
    }, 5000);
//})


 // client.publish(topic, clientId, { qos: 0, retain: false }, (error) => {
    //     if (error) {
    //         console.error(error)
    //     }
    // })

    //     function startTime() {
    //         const today = new Date();
    //         const button = ["on", "off"];
    //         const butout = `but1: ${button[Math.floor(Math.random() * button.length)]} but2: ${button[Math.floor(Math.random() * button.length)]}`;
    //         const topic = "output";
    //         client.publish(topic, butout, { qos: 0, retain: false }, (error) => {
    //             if (error) {
    //                 console.error(error)
    //             }
    //             // console.log(topic + ":", butout);
    //         })
    //         setTimeout(startTime, 5000);
    //     }
    //     startTime();