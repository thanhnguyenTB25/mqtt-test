var mqtt = require('mqtt');
var options1= {
    clientId:"clientId-ZoJbtIIOCm",
    username:"thanhtbka3",
    password:"thanhnguyen",
    clean:true};
//========================================================
// kết nối với client và in ra thông báo 
var client  = mqtt.connect('mqtt://broker.mqttdashboard.com',options1);
console.log("connected flag "+client.connected);
client.on("connect",function(){	
    console.log("connected  "+client.connected);
})

//=============================================
//nếu connect thành công ==> pub thông điệp
var options2 = {
    retain:true,
    qos:1};
client.publish("testtopic", "test message",options2)

//===========================================
// nếu phía máy khách không thể kết nối==> đóng kết nối
client.on("error",function(error){
    console.log("Can't connect" + error);
    process.exit(1)});
//===============================================
var mesage = "alo may rep tn đi";
var topic = "test_tp1";
var time_id = setInterval(function() {publish(topic,mesage)},4000);
function publish(topic,msg){
   console.log("publishing",msg);
    if (client.connected == true){
        client.publish(topic,msg);
    }
}