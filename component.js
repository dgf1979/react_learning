/** @jsx React.DOM */

var PasswordValidator = React.createClass({
  getDefaultProps: function() {
    return {
      minlength: 8
    };
  },
  getInitialState: function() {
    return {validationMessage: this.validate};
  },
  validate: function() {
    console.log('validate');
    var confirm = React.findDOMNode(this.refs.confirm).value;
    var password = React.findDOMNode(this.refs.password).value;
    var msg = ''
    if (password.length < this.props.minlength) {
      msg = 'Password must be at least ' + this.props.minlength + ' characters long.';
    } else if (password !== confirm) {
      msg = 'Password confirmation does not match.';
    } else {
      msg = 'Ok!';
    }
    return msg;
  },
  handleChange: function(){
    this.setState({
      validationMessage: this.validate()
    })
  },
  render: function(){
    return (
      <div>
        <div>Choose A Password</div>
        <div><span>Password:</span><input type='password' ref='password' onChange={this.handleChange} /></div>
        <div><span>Confirm:</span><input type='password' ref='confirm' onChange={this.handleChange} /></div>
        <div>{this.state.validationMessage}</div>
      </div>
    )
  }
});
