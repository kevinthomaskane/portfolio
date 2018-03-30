
var db = require("../../models")

function htmlRoutes(app, path, express){

    app.use('/', express.static('images'));

    app.get("/", function(req, res) {
        db.View.create().then((data)=>{
        console.log(data)
    })
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    app.get("/css", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/profile.css"));
    });

    app.post("/new", (req, res)=>{
        db.Message.create(req.body).then((data)=>{
            res.json(data)
        })
    })
}

module.exports = htmlRoutes;
