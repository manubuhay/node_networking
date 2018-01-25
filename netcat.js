var nc = require("node-cat");
 
var client = nc.createClient("ec2-34-197-72-10.compute-1.amazonaws.com", "9091");
 
client.start(
function(client /* the tcp client returned by net.connect */, rl /* readline instance */, stdin, stdout){
    client.write("STATUS: None of your business");
    stdout.write("Sent status.");
});