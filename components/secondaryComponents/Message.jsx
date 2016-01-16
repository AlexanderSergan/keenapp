Message = React.createClass({
  propTypes: {
    // Компонент відображає повідомлення, яке отримав через проп
    // За допомогою об’єкту propTypes вказується обов’язковість
    // конкретного пропу.
    message: React.PropTypes.object.isRequired,
    // key: React.PropTypes.string.isRequired

  },

  renderDeleteButton: (message)=> {
    console.log('from renderDeleteButton():\n'+'rendering message:' + JSON.stringify(message));
    if (message.user == Meteor.user().emails[0].address){

      return <DeleteButton id={message._id} />;
    } else return <div></div>;
  },

  render: function() {
    // var deleteButton;
    // if (this.canDelete()) {
    //   deleteButton = <DeleteButton />;
    // }
    return (
      <div className='media chatMessage'>

        {this.renderDeleteButton(this.props.message)}
        <div className='media-left'>
          <img className='media-object userpic-img' src={this.props.message.userpicLink} />
        </div>
        <div className='media-body'>
            <h4 className='media-heading'>{this.props.message.user}</h4>
                <span>{this.props.message.text}</span>

        </div>
      </div>
    );
  }
});
