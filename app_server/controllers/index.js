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
module.exports.newPassword = function(req, res) {
    res.render('changepassword'), { title: tagLine };
}
module.exports.guides = function(req, res) {
    res.render('guides', { title: tagLine });
}
module.exports.guide = function(req, res) {
    res.render('guide', { title: tagLine });
}
module.exports.forum = function(req, res) {
    res.render('forum', { title: tagLine });
}
module.exports.recycle = function(req, res) {
    res.render('recycle', { title: tagLine });
}
module.exports.shop = function(req, res) {
    res.render('shop', { title: tagLine });
}
var texto = `Got a stash of broken stuff or stuffs that you no longer use? \n
                or you've got skills to help us repair what we have received?\n
                Please join our Patron movement to empower the  next generation of inovators.`;
var innovOverlays = [{
        img: "/images/inov-1.jpg",
        title: "What is it?",
        context: `The innovation class is a  program started by ikanik
        to put tech tools and devices in hands of students from schools
         that don't have them at no cost . The program  provides ressources 
         for training the young  generation and helps them to develop there ideas.`
    },
    {
        img: "/images/inov-2.jpg",
        title: "How we do it?",
        context: `The innovation class is funded by ikanik and  other independent organizations and individuals.
        We collect obsolete tech devices and those that need a repairment form our Patrons-individuals and organizations.
       We then repair the broken ones and after verivying there condition against international standards we are ready to give them out.`
    },
    {
        img: "/images/inov-3.jpg",
        title: "Why we do it?",
        context: `We believe that technology is a solution to many of the big problems facing Africa and the world today. 
        But today at least 35.5% of families in developing countries have at least one computer compared to 73% in America.
        The second reason is that  of the ever increasing  and un-used electronic waste. 
        We can't afford to waste  the waste.`
    },
];
module.exports.inovclass = function(req, res) {
    res.render('inovclass', { title: 'The innovation class', contents: innovOverlays, campaign: texto });
}