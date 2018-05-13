
var db = require("../../models");

function htmlRoutes(app, path, express, nodemailer, smtpTransport){

    app.use('/', express.static('images'));

    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    app.get("/css", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/profile.css"));
    });

    app.post("/views", function(req,res){
        db.View.create({
            city: req.body.city,
            region: req.body.region,
            country: req.body.country
        }).then((response) => {
            res.json(response)
        });
    });

    app.post("/new", (req, res) => {
        console.log(req)
        var message = {
              from: 'kevinthomaskane@gmail.com',
              to: 'kevinthomaskane@gmail.com',
              subject: req.body.name,
              text: req.body.message,
              html: `FROM ${req.body.name} @ EMAIL: ${req.body.email}. MESSAGE: ${req.body.message}`
        };
        var transporter = nodemailer.createTransport(smtpTransport({
              service: 'gmail',
              host: 'smtp.gmail.com',
              auth: {
                user: 'kevinthomaskane@gmail.com',
                pass: 'pippen1993'
            }
        }));
        transporter.sendMail(message, (err, info) => {
              console.log("info", info)
              console.log("message", message)
              res.send(info);
        });
    });
    
}

module.exports = htmlRoutes;
