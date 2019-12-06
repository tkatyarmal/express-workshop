var fs = require('fs');


var express = require('express')
var formidable = require('express-formidable')
var app = express()






// app.get('/', function (req, res) {
//     res.send('Yay it works')
// })

// app.get("/chocolate", function (req, res) {
//     res.send("Mm chocolate :O")
// })
app.use(express.static("public"))
app.use(formidable())

app.post("/create-post", function (req, res) {
    console.log('/create-post')
    console.log(req.fields)

    var timestamp = Date.now();
    var content = req.fields.blogpost

    var fileContents = fs.readFileSync(__dirname + '/data/posts.json', 'utf-8');

    var parsedFile = JSON.parse(fileContents);

    parsedFile[timestamp] = content

    console.log(parsedFile);


    //fs.writeFile('post.json', req.fields, function (error) {

    // });

})

app.get("/create-post", function (req, res) {
    res.send("Tejas");
})
app.listen(3000, function () {
    console.log('server is listening on port 3000. Ready to accept requests!')
})


