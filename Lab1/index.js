/*
This runs the server alone, nothing else?
*/

const express = require('express')
const app = express()
const port = 8000

var bodyParser  = require('body-parser');

const { MongoClient } = require("mongodb");
const uri = "mongodb://testUser:test@127.0.0.1:27017/mydb";

app.use(bodyParser.urlencoded());

app.use(bodyParser.json());

app.use(express.static('public'))

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render(__dirname + "/myWebPage.ejs")
})

app.post('/saveQuote', (req, res) => {
  console.log("Name: " + req.body.n);
  console.log("Salary: " + req.body.s);
  console.log("Days: " + req.body.d);

  var n = req.body.n
  var s = req.body.s
  var d = req.body.d

  // Database stuff
    // Create a new MongoClient
    const client = new MongoClient(uri);
    async function run() {
    try {
        //Write databse Insert/Update/Query code here..
        var dbo = client.db("mydb");
        var myobj = { quoteName: n, salary: s, days: d }; //******CHECK!!!****
        await dbo.collection("quotes").insertOne(myobj, function(err, res) {
            if (err) {
                console.log(err); 
                throw err;
            }
            console.log("1 quote inserted");
        }); 
        console.log('End the database stuff');

    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
    }
    run().catch(console.dir);

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// Database stuff
// Create a new MongoClient
const client = new MongoClient(uri);
async function run() {
try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();
    // Establish and verify connection
    await client.db("admin").command({ ping: 1 });
    console.log("Connected successfully to server");
    console.log('Start the database stuff');
    //Write databse Insert/Update/Query code here..
console.log('End the database stuff');

} finally {
    // Ensures that the client will close when you finish/error
    await client.close();
}
}
run().catch(console.dir);
