// App - main component, represents whole app.
 MessagesList = React.createClass({
  // This mixin makes the getMeteorData method work
  mixins: [ReactMeteorData],
  getInitialState: function() {
    return ({
      location: ''
    });
  },
  componentDidMount: function() {
    var userLocation = Meteor.user().profile.currentLocation;
    console.info('Usr location: ' + userLocation);
    userLocation = userLocation.split(',')[0];
    console.info('Trimmed usr location: ' + userLocation);
    this.setState({location: userLocation});
  },

  // Loads items from the Tasks collection and puts them on this.data.tasks

  getMeteorData: function() {
              return {
                messages: Messages.find( { $text: { $search: this.state.location} } ).fetch()
              };
  },
  // getUserEmail : {
  //   // return Meteor.user().emails[0].address;
  //   return this.props.data.currentUser.emails[0].address;
  // },

  handleSubmit: (event) => {
      event.preventDefault();
      var form = event.target;
      var content = form.querySelector('[name="messageInput"]').value;
      var email = Meteor.user().emails[0].address;

      var hash = CryptoJS.MD5(email);
      var userpicLink = 'http://www.gravatar.com/avatar/'+ hash +'?d=retro&s=300';

        Messages.insert({
          userpicLink: userpicLink,
          user: email,
          text: content,
          createdAt: new Date(), // current time
          location: Meteor.user().profile.currentLocation
        });

    // Clear form
    form.querySelector('[name="messageInput"]').value = "";
  },

  renderMessages: function() {
              return this.data.messages.map( function(message)  {
                console.log('from renderMessages():\n'+ 'rendering message with id: ' + message._id);
                console.log('and typeof id is ' + typeof message._id);
                return <Message message={message} />;
              });
  },

  render: function() {
    return (
      <div>
      <div className="container">
          <div className='row'>
              <h2>Messages in {this.state.location}</h2>
              <div className='bs-example col-md-10 col-md-offset-1'>

                  {this.renderMessages()}

                  <br />
                  <div className="col-lg-12">
                    <form onSubmit={this.handleSubmit}>
                      <div className="input-group">
                        <input type="text" className="form-control"
                                           name="messageInput"
                                           placeholder="type a message" />
                        <span className="input-group-btn">
                          <button className="btn btn-default"  type="submit">Push!</button>
                        </span>
                      </div>
                    </form>
                  </div>
              </div>
          </div>
      </div>
      </div>
    );
  }
});
