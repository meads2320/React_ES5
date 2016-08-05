$ = jQuery = require('jquery');
var React = require('react');

var About = React.createClass({

    statics: {
        willTransitionTo : function(transition, params, query, callback) {
            if(!confirm('Are you sure you want to read this page?')) { 
                 
            }
            else {
                callback();
            }
        },
         willTransitionFrom : function(transition, component) {
            if(!confirm('Are you sure you want to leave this page?')) { 
          
            }
        }
    },
    render : function() { 
        return (
            <div className="container jumbotron">
                <h1>About</h1>
                <p>
                    This App uses the following technologies: 
                </p>
                <ul>
                    <li>React</li>
                    <li>React Router</li>
                    <li>Flux</li>
                    <li>Node</li>
                    <li>Gulp</li>
                    <li>Browserify</li>
                    <li>Jquery</li>
                    <li>Bootstrap</li>
                </ul>
            </div>
        )
    }
});

module.exports = About;