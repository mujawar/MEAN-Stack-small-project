/**
 * Created by arif on 29/3/16.
 */


var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose/'),
    meetupsController = require('./server/controllers/meetups-controller')

mongoose.connect('mongodb://localhost:27017/mean-demo');
app.use(bodyParser());

app.get('/',function(req, res){//get,put,post,delete
    res.sendFile(__dirname + '/client/views/index.html');
});
 app.use('/js',express.static(__dirname + '/client/js'));
//rest api
app.get('/api/meetups',meetupsController.list);
app.post('/api/meetups',meetupsController.create);



app.listen(3000,function(){
    console.log('i am listening........')
})





