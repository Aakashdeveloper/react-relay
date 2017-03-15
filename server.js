
var express = require("express");

let app = express();

/*app.get('/',(req,res)=> res.send("hello react JS"));

app.get('/book',(req,res)=> res.send("hello Book"));
*/
app.use(express.static('public'));

app.listen(3000);