const express = require ("express")
const app = express()

app.get("/", function(req, res){
    res.send("Hello World")
})

app.get("/song", function(req, res){
    res.json({
        "song": "song1",
        "artist": "artist1",
        "album": "album1",
        "duration": "3:45"
    })
})
 
app.listen(3000);