var tcpp = require('tcp-ping');
const axios = require('axios');

//Creates POST request
function notify(){
axios.post("https://hooks.glip.com/webhook/46efadc3-5ad7-417b-9c9a-82afdb096d1d", {
  "icon": "http://www.qmsacademy.com/wp-content/uploads/2015/10/DevOps-logo.png",
  "activity": "TCP-PING-Hook",
  "title": "APNS DOWN!",
});
}

tcpp.probe('ec2-34-197-72-10.compute-1.amazonaws.com', 9091, function(err, available) {
    console.log(available);
    if(available == false)
    notify();
	else
	process.exit(0);
});
 
 // This part of the code takes description from the servers
// tcpp.ping({ address: 'ec2-34-197-72-10.compute-1.amazonaws.com' }, function(err, data) {
//     console.log(data); 
// });

