DeleteButton = React.createClass({
  propTypes: {
    id: React.PropTypes.string.isRequired
  },

  handleClick: function(event) {
    Messages.remove({_id: this.props.id});
  },

  render: function() {
           return (
              <span onClick={this.handleClick}
                    className="glyphicon glyphicon-remove pointer delete-btn pull-right"
                    aria-hidden="true">
                    </span>
           );
          }
});
