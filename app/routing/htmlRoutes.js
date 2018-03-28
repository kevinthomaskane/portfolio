

function htmlRoutes(app, path, express){

    app.use('/', express.static('images'));

    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    app.get("/css", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/profile.css"));
    });
}

module.exports = htmlRoutes;