
var express = require("express");
var MongoClient = require('mongodb')

let app = express();

/*app.get('/',(req,res)=> res.send("hello react JS"));

app.get('/book',(req,res)=> res.send("hello Book"));
*/
app.use(express.static('public'));

let db;

//app.listen(3000);

var mongoPath = "mongodb://localhost/acadgild"
/*MongoClient.connect(mongoPath, (err,database) =>{
	if(err) throw err;
	database.collection("test").find({}).toArray((err,links)=>{
		if(err) throw err;

		console.log(links)
	});
});*/
MongoClient.connect(mongoPath, (err,database) =>{
	if(err) throw err;

	db=database;
	app.listen(3000, () => console.log("listening to port 3000"))
});

app.get("/data/links",(req,res) =>{
	db.collection("test").find({}).toArray((err,links) =>{
		if(err) throw err;

		res.json(links)
	})
})