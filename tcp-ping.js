var tcpp = require('tcp-ping');
const axios = require('axios');

function notify(){
axios.post("https://hooks.glip.com/webhook/ad559b30-c392-468d-a0c5-ec8d808a95fc", {
  "icon": "https://vignette.wikia.nocookie.net/logopedia/images/2/2c/Lazada_Icon.png",
  "activity": "Shem",
  "title": "Test Hook",
  //"body": "* Location: [The Funky Buddha Lounge](http://www.thefunkybuddha.com)\n*Beer Advocate Rating: [99](http://tinyurl.com/psf4uzq)"
});
}

tcpp.probe('ec2-34-197-72-10.compute-1.amazonaws.com', 9090, function(err, available) {
    console.log(available);notify();
});
 
// tcpp.ping({ address: 'ec2-34-197-72-10.compute-1.amazonaws.com' }, function(err, data) {
//     console.log(data); 
// });

