const express        = require("express"),
      bodyParser     = require("body-parser"),
      app            = express();

// Setting up bodyParser to use json and set it to req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

app.set("view engine", "ejs");


app.get('/', function(req, res){
	res.send("Yuhuuuuuuuuuuuuu!!");
})
app.get('/login', function(req, res){
	res.render('login')
})




app.post('/entry', function(req, res){
	console.log('Post request recieved!')
})

// Starting the app on PORT 8080
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    // eslint-disable-next-line
     console.log( `listening on port:`+PORT);
});