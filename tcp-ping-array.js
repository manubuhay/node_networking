var tcpp = require('tcp-ping');
const axios = require('axios');

var srv = [ {host: "ec2-34-197-72-10.compute-1.amazonaws.com", port: 9097},
		    {host: "ec2-54-165-245-68.compute-1.amazonaws.com", port: 4002}, 
		    {host: "ec2-52-7-161-56.compute-1.amazonaws.com", port: 8088},
		    {host: "ec2-52-20-35-81.compute-1.amazonaws.com", port: 8089} 
		  ]

//Creates POST request
function notify(host){
axios.post("https://hooks.glip.com/webhook/2e11e70d-3c99-44ef-89c7-22715dc9da6b", {
  "icon": "http://www.qmsacademy.com/wp-content/uploads/2015/10/DevOps-logo.png",
  "activity": "TCP-PING-Hook",
  "title":  host + " is DOWN!",
});
}

for ( i = 0; i < srv.length; i++){
	let host = srv[i].host, port = srv[i].port
	tcpp.probe(host, port, function(err, available) {
    //console.log(available);
    if(available == false){
    notify(host);
	console.log(host + " is down!")
		}
	// else
	// process.exit(0);
	});
}
 
 // This part of the code takes description from the servers
// tcpp.ping({ address: 'ec2-34-197-72-10.compute-1.amazonaws.com' }, function(err, data) {
//     console.log(data); 
// });

// console.log(srv[0].host);
// console.log(srv[1].port);
// console.log(srv[2].port);

