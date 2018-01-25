var tcpp = require('tcp-ping');
const axios = require('axios');

function notify(){
axios.post("https://hooks.glip.com/webhook/29fcf649-f358-420a-b452-1e5407d6f4f9", {
  "icon": "https://vignette.wikia.nocookie.net/logopedia/images/2/2c/Lazada_Icon.png",
  "activity": "TCP-PING-Hook",
  "title": "DOWN ANG APNS!",
  //"body": "* Location: [The Funky Buddha Lounge](http://www.thefunkybuddha.com)\n*Beer Advocate Rating: [99](http://tinyurl.com/psf4uzq)"
});
}

tcpp.probe('ec2-34-197-72-10.compute-1.amazonaws.com', 9091, function(err, available) {
    console.log(available);
    if(available == false)
    notify();
	else
	process.exit(0);
});
 
// tcpp.ping({ address: 'ec2-34-197-72-10.compute-1.amazonaws.com' }, function(err, data) {
//     console.log(data); 
// });

