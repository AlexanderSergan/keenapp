Flag = React.createClass({

  getResult: function() {
    return this.props.value || 2 + 2;
  },

  render: function() {
    return <span className='btn btn-success'> {this.getResult()} </span>;
  }
});
