var tcpp = require('tcp-ping');
 
tcpp.probe('ec2-34-197-72-10.compute-1.amazonaws.com', 9090, function(err, available) {
    console.log(available);process.exit(0);
});
 
// tcpp.ping({ address: 'ec2-34-197-72-10.compute-1.amazonaws.com' }, function(err, data) {
//     console.log(data); 
// });

