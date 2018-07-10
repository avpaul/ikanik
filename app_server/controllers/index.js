var tagLine = 'IKANIK Don\'t waste the waste';

module.exports.home = function(req, res) {
    res.render('home', { title: tagLine });
}

module.exports.login = function(req, res) {
    res.render('login', { title: tagLine });
}
module.exports.signup = function(req, res) {
    res.render('signup', { title: tagLine });
}