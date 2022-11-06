var mqtt = require('mqtt');

var settings = {
    port: 1883,
    host: '192.168.125.253',
    keepalive: 1000,
};
const client = mqtt.connect(settings);
// khai báo những kênh sub với topic sẽ sử dụng
client.subscribe("an");
client.subscribe("minh");
client.subscribe("thanh");
// const topic = 'esp32/output'
client.on('connect', () => {
    console.log('Connected MQTT')

    // client.subscribe([topic], () => {
    //     console.log(`Subscribe to topic "${topic}"`)
    // })
    // client.publish(topic, "Tin dau tien", { qos: 0, retain: false }, (error) => {
    //     if (error) {
    //         console.error(error)
    //     }
    // })

})
// client.on('message', function (topic, message) {
//     console.log(topic + ":", message.toString())
// })

client.on('message', function (topic, message) {
    console.log("------------------------------------");
    // if (topic === "esp32/dulieu") {
    //     console.log('led1: ', message.toString());
    // }
    if (topic === "an") {
        console.log(message.toString());   // nếu topic là output in ra terminal chuỗi tin nhận đc
    }
    if (topic === "minh") {
        console.log(message.toString());   // nếu topic là output in ra terminal chuỗi tin nhận đc
    }
    if (topic === "thanh") {
        console.log(message.toString());   // nếu topic là output in ra terminal chuỗi tin nhận đc
    }
});
