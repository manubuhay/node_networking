var tcpp = require('tcp-ping');
const axios = require('axios');

//Creates POST request
function notify(){
axios.post("https://hooks.glip.com/webhook/005dbe1d-7eed-4316-8879-8836042f6cc8", {
  "icon": "http://www.qmsacademy.com/wp-content/uploads/2015/10/DevOps-logo.png",
  "activity": "TCP-PING-Hook",
  "title": "MANU GWAPO",
});
}

tcpp.probe('10.1.55.254', 8009, function(err, available) {
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

