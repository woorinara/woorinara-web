Router.configure({
    layoutTemplate: 'mainLayout',
    notFoundTemplate: 'notFound'

});

//
// Example pages routes
//

Router.route('/dashboard', function () {
    this.render('dashboard');
});

Router.route('/chatbot', function () {
    this.render('chatbot');
});

Router.route('/blog', function () {
    this.render('blog');
});

Router.route('/article', function () {
    this.render('article');
});

Router.route('/timeline', function () {
    this.render('timeline');
});

Router.route('/members', function () {
    this.render('members');
});

Router.route('/activity', function () {
    this.render('activity');
});

Router.route('/profile', function () {
    this.render('profile');
});

Router.route('/landing', function () {
    this.render('landing');
    this.layout('blankLayout')
});

Router.route('/', function () {
    Router.go('chatbot');
});
