var React = require('react');

var SelectDropdown = React.createClass({
    propTypes: {
        name: React.PropTypes.string.isRequired,
        label: React.PropTypes.string.isRequired,
        onChange: React.PropTypes.func.isRequired,
        placeholder: React.PropTypes.string,
        value: React.PropTypes.string,
        error: React.PropTypes.string,
        initializer :React.PropTypes.array
    },
    render : function() { 
        var wrapperClass= 'form-group';
        if(this.props.error && this.props.error.length > 0) {
            wrapperClass += " " + 'has-error';
        }   
        return (
           <div className={wrapperClass}>
           <label htmlFor={this.props.name}>{this.props.label}</label>
           <select className="form-control"
                        name={this.props.name} 
                        onChange={this.props.onChange}
                        placeholder={this.props.placeholder} 
                        value={this.props.value} >
                         {this.props.initializer}
            </select>
            </div>
        )
    }
});

module.exports = SelectDropdown;