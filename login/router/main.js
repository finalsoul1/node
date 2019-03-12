module.exports = function (app, fs) {

    app.get('/login/:username/:password', function (req, res) {
        var sess = req.session;

        fs.readFile(__dirname + "/../data/user.json", "utf8", function (err, data) {
            var users = JSON.parse(data);
            var username = req.params.username;
            var password = req.params.password;
            var result = {};
            if (!users[username]) {
                result["success"] = 0;
                result["error"] = "not found";
                res.json(result);
                return;
            }

            if (users[username]["password"] == password) {
                result["success"] = 1;
                sess.username = username;
                sess.name = users[username]["name"];
                setTimeout(function () {
                    res.redirect('/')
                }, 3000)
                res.jxson(result);
            } else {
                result["success"] = 0;
                result["error"] = "incorrect";
                res.json(result);
            }
        })
    })

    app.get('/logout', function (req, res) {
        var sess = req.session;
        if (sess.username) {
            req.session.destroy(function (err) {
                if (err) {
                    console.log(err);
                } else {
                    res.redirect('/');
                }
            })
        }
    })

    app.get('/', function (req, res) {
        var sess = req.session;

        res.render('index', {
            title: "MY HOMEPAGE",
            length: 5,
            name: sess.name,
            username: sess.username
        })
    });

}