
var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
const bodyParser=require("body-parser");
var ejs=require("ejs")
var db = require('./database/dbConnection');
const { response } = require('express');
const app=express();
const Country = mongoose.model('countries');
const State = mongoose.model('states');
const City = mongoose.model('cities');
app.set("view engine","ejs")
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

//for country

app.get('/', (req, res)=> {
   
   
    Country.find( (err, response)=> {
      
        if (err) {
            console.log(err)
        }
        res.render('home', { dropdownVals: response })
    });
});

//for state

app.post('/state', (req, res)=> {
    State.find({country_code:req.body.country_code}).then(response=> {
        console.log(response)
        res.status(201).json({
            message:'States fetched successfully.',
           states:response
          });
    });
});

//


app.post('/city', (req, res)=> {
    City.find({state_code:req.body.state_code}).then(response=> {
        res.status(201).json({
            message:'Cities fetched successfully.',
           cities:response
          });
        
       
    });
});

module.exports = router;


app.listen(3000, () => {
    console.log('Express server started at port : 3000');
});