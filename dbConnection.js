var mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:admin@cluster0.qubsi.mongodb.net/Mydata', { useNewUrlParser: true }, (err) => {
    if (!err) { console.log('MongoDB Connection Succeeded.') }
    else { console.log('Error in DB connection : ' + err) }
});

var countrySchema = mongoose.Schema({
    country_code: String,
    country_name: String
});

var stateSchema = mongoose.Schema({
    state_code: String,
    state_name: String,
    country_code: String,
});

var citySchema = mongoose.Schema({
    city_code: String,
    city_name: String,
    state_code: String,
});

mongoose.model("countries", countrySchema, "countries");
mongoose.model("states", stateSchema, "states");
mongoose.model("cities", citySchema,"cities");

exports.use = function (modelName) {
    return mongoose.model(modelName);
};