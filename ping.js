var ping = require('ping');
 
var hosts = ['ec2-34-197-72-10.compute-1.amazonaws.com', 'google.com', 'yahoo.com'];
hosts.forEach(function(host){
    ping.sys.probe(host, function(isAlive){
        var msg = isAlive ? 'host ' + host + ' is alive' : 'host ' + host + ' is dead';
        console.log(msg);
    });
});