// App - main component, represents whole app.
App = React.createClass({
  // This mixin makes the getMeteorData method work
  mixins: [ReactMeteorData],

  // Loads items from the Tasks collection and puts them on this.data.tasks

  getMeteorData: function() {
              return {
                messages: Messages.find({}).fetch()
              };
  },

  renderMessages: function() {
              return this.data.messages.map( function(message)  {
                return <Message key={message._id} message={message}  />;
              });
  },

  render: function() {
    return (
      <div>
      <div className="container">
          <div className='row'>
              <div className='jumbotron col-md-6 col-md-offset-3'>
                
                  <Flag />
                  <Flag value='6' />

                  {this.renderMessages()}
              </div>
          </div>
      </div>
      </div>
    );
  }
});
