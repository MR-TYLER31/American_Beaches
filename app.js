const express = require('express')
const app = express()
const port = 5000
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

var beaches = [
    {name: "Carlsbad State Beach", image: "https://live.staticflickr.com/71/160357812_513fe67e01_m.jpg"},
    {name: "Pacific Beach", image: "https://farm7.staticflickr.com/6160/6167233098_7e5f03bb81_m.jpg"},
    {name: "Ocean Beach", image: "https://farm1.staticflickr.com/75/189895400_6aa2214bcc_m.jpg"},
    {name: "Carlsbad State Beach", image: "https://live.staticflickr.com/71/160357812_513fe67e01_m.jpg"},
    {name: "Pacific Beach", image: "https://farm7.staticflickr.com/6160/6167233098_7e5f03bb81_m.jpg"},
    {name: "Ocean Beach", image: "https://farm1.staticflickr.com/75/189895400_6aa2214bcc_m.jpg"},
    {name: "Carlsbad State Beach", image: "https://live.staticflickr.com/71/160357812_513fe67e01_m.jpg"},
    {name: "Pacific Beach", image: "https://farm7.staticflickr.com/6160/6167233098_7e5f03bb81_m.jpg"}
]

// Root page
app.get('/', function(req, res) {
 res.render('landing');
});

// Beaches page
app.get('/beaches', function(req, res) {
    res.render('beaches', {beaches: beaches});
});


app.post('/beaches', function(req, res) {
    // Get Data from form and add to beaches array
    var name = req.body.name
    var image = req.body.image
    var newBeach = {name: name, image: image}
    beaches.push(newBeach)
    // redirect back to beaches page
    res.redirect('/beaches');

});

// shows the form page
app.get('/beaches/new', function(req, res) {
    res.render('new.ejs');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))