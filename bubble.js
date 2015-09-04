/** @jsx React.DOM */

var OuterThing = React.createClass({
  handleInnerButtonClick: function() {
    console.log('Parent sees that button in Child has been clicked');
  },
  render: function() {
    return (
      <InnerThing onButtonClick={this.handleInnerButtonClick}/>
    )
  }
});

var InnerThing = React.createClass({
  handleClick: function() {
    console.log('Child button clicked');
    this.props.onButtonClick();
  },
  render: function() {
    return (
      <button onClick={this.handleClick}>Click meeeeeee!</button>
    )
  }
});
