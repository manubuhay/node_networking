var tcpp = require('tcp-ping');
const axios = require('axios');
var CronJob = require('cron').CronJob;

//Creates POST request if server is down
function server_down(){
axios.post("https://hooks.glip.com/webhook/e8c7f15c-ceb7-474f-a42a-560f70a036a7", {
  "icon": "http://www.qmsacademy.com/wp-content/uploads/2015/10/DevOps-logo.png",
  "activity": "TCP-PING-Hook",
  "title": "APNS DOWN!",
});
}

//Creates POST request if server is down
function server_up(){
axios.post("https://hooks.glip.com/webhook/e8c7f15c-ceb7-474f-a42a-560f70a036a7", {
  "icon": "http://www.qmsacademy.com/wp-content/uploads/2015/10/DevOps-logo.png",
  "activity": "TCP-PING-Hook",
  "title": "APNS UP!",
});
}
//Create cronjob
var job = new CronJob('01 * * * * *', function(){

	tcpp.probe('ec2-34-197-72-10.compute-1.amazonaws.com', 9090, function(err, available){
    	console.log(available);
    		if(available == false)
    			server_down();
			else
				server_up();
		});
},
  true,
  'PHT'
  );
job.start();

//setInterval(function(){
// tcpp.probe('ec2-34-197-72-10.compute-1.amazonaws.com', 9090, function(err, available) {
//     	console.log(available);
//     		if(available == false)
//     			server_down();
// 			else
// 				server_up();
// 		});
//}, 5000);