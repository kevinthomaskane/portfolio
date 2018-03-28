

function htmlRoutes(app, path, express){

    app.use('/', express.static('public'));

    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname + "../public/index.html"));
    });


    
}

module.exports = htmlRoutes;