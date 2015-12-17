// App - main component, represents whole app.
MessagesList = React.createClass({
  // This mixin makes the getMeteorData method work
  mixins: [ReactMeteorData],

  // Loads items from the Tasks collection and puts them on this.data.tasks

  getMeteorData: function() {
              return {
                messages: Messages.find({}).fetch()
              };
  },

  handleSubmit: (event) => {
      event.preventDefault();
      var form = event.target;
      var content = form.querySelector('[name="messageInput"]').value;
      console.log(content);

        Messages.insert({
          text: content,
          createdAt: new Date() // current time
        });
    // Clear form
    // React.findDOMNode(this.refs.textInput).value = "";
  },

  renderMessages: function() {
              return this.data.messages.map( function(message)  {
                return <Message key={message._id} message={message} />;
              });
  },

  render: function() {
    return (
      <div>
      <div className="container">
          <div className='row'>
              <div className='jumbotron col-md-10 col-md-offset-1'>




                  <Flag />
                  <Flag value='6' />

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
