var React = require('react');

var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var Redirect = Router.Redirect;

var routes = (
    <Route name="app" path="/" handler={require('./components/app')}>
        <DefaultRoute handler={require('./components/home/homePage')} />
         <Route name="authors" handler={require('./components/authors/authorsPage')} />
         <Route name="addAuthor" handler={require('./components/authors/manageAuthorsPage')} />
         <Route name="manageAuthor" path="author/:id" handler={require('./components/authors/manageAuthorsPage')} />

         <Route name="courses" handler={require('./components/courses/coursePage')} />
         <Route name="addCourse" handler={require('./components/courses/manageCoursePage')} />
         <Route name="manageCourse" path="courses/:id" handler={require('./components/courses/manageCoursePage')} />

         <Route name="about" handler={require('./components/about/aboutPage')} />    
         <Redirect from="about-us" to="about" />
         <Redirect from="awthers" to="authors" />
         <Redirect from="about/*" to="about" />
         <NotFoundRoute handler={require('./components/error/notFoundPage')} />
    </Route>
);

module.exports = routes;