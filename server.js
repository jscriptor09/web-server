var express = require('express');
var app=express();
var PORT = process.env.PORT || 3000;

//important to put middleware at the top
var middleware = require('./middleware.js');
//
app.use(middleware.logger);
app.use(middleware.requireAuthentication);


//can impose middle at action level
app.get('/about',middleware.requireAuthentication, function(req,res){
   res.send('about Us!!')
});

app.use(express.static(__dirname + '/public'));
app.listen(PORT, function(){
    console.log('Express server stated on port '  + PORT);
});