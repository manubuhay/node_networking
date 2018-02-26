var tcpp = require('tcp-ping');
const axios = require('axios');
var CronJob = require('cron').CronJob;


var srv = [ {host: "ec2-34-197-72-10.compute-1.amazonaws.com", port: 9097},
		    {host: "ec2-54-165-245-68.compute-1.amazonaws.com", port: 4002}, 
		    {host: "ec2-52-7-161-56.compute-1.amazonaws.com", port: 8088},
		    {host: "ec2-52-20-35-81.compute-1.amazonaws.com", port: 8089} 
		  ]

//Creates POST request
function notify(host)
	{
axios.post("https://hooks.glip.com/webhook/2e11e70d-3c99-44ef-89c7-22715dc9da6b", 
		{
  "icon": "http://www.qmsacademy.com/wp-content/uploads/2015/10/DevOps-logo.png",
  "activity": "TCP-PING-Hook",
  "title":  host + " is DOWN!",
		} );
	}

var task = new CronJob('10 * * * * *', 
	function()
		{
		for ( i = 0; i < srv.length; i++)
			{
				let host = srv[i].host, port = srv[i].port
				tcpp.probe(host, port, function(err, available) 
				{
	    			if(available == false)
	    				{
	    				//notify(host);
						console.log(host + " is down!")
						}
				}		   );
	 		}	var j = 0; j = j + 1;
	 			console.log("--------------------------------------------------" + j)
		}, true, 'PHT');
task.start();

// var queue = [ {host: "ec2-34-197-72-10.compute-1.amazonaws.com", port: 9097},
// 		    {host: "ec2-54-165-245-68.compute-1.amazonaws.com", port: 4002}, 
// 		    {host: "ec2-52-7-161-56.compute-1.amazonaws.com", port: 8088},
// 		    {host: "ec2-52-20-35-81.compute-1.amazonaws.com", port: 8089} 
// 		  ]

// function req() {
// 	if (queue.length > 0) {
// 		var obj = queue[0]
// 		var host = obj.host
// 		var port = obj.port
// 		tcpp.probe(host, port, function(err, available) {
// 			if(available == false){
// 			//notify(host);
// 			console.log(host + " is down!")
// 			}
// 			queue.splice(0, 1);
// 			req()
// 		});	
// 	}
// 	else {
// 		return
// 	}
// }


