
var db = require("../../models")

var counter = 0;

function htmlRoutes(app, path, express){

    app.use('/', express.static('images'));

    app.get("/", function(req, res) {
        counter++
        db.View.update({
            num: counter
        },{where: {id: 1}
        }
    ).then((data)=>{
        console.log(data)
    })
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    app.get("/css", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/profile.css"));
    });
}

module.exports = htmlRoutes;