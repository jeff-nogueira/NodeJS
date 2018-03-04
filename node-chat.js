ar net = require('net'); 
 var carrier = require('carrier'); 
 var connections = []; 
 
 var server = net.createServer(function(conn){
   
   connections.push(conn);
   
   conn.on('close', function(){
     var pos = connections.indexOf(conn);
     if(pos >= 0){
       connections.splice(pos, 1);
     }
   });
   
   conn.write('Node ChatnName: ');
   
   var username;
   
   carrier.carry(conn, function(line){
     
     if(!username){
       username = line;
       conn.write("Hi! "+ username +"\n");
       return;
     }
    
     if(line == 'end' || line == 'quit' || line == 'exit'){
       conn.end();
       return;
     }
     
     var feedback = username +": "+ line +"\n";
     
     connections.forEach(function(one_connection){
       one_connection.write(feedback);
     });
   });
 });
 
 server.listen(4000);
 
 console.log("Servidor mini-chat em execução.");