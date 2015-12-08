// App component - represents the whole app
App = React.createClass({
  getMessages: function() {
              return [
                { _id: 1, text: "This is message 1" },
                { _id: 2, text: "This is message 2" },
                { _id: 3, text: "This is message 3" }
              ];
  },

  renderMessages: function() {
              return this.getMessages().map( function(message)  {
                return <Message key={message._id} message={message} />;
              });
  },

  render: function() {
    return (
        //header
        <div>
        <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed"
                    data-toggle="collapse" data-target="#navbar"
                    aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">KeenApp</a>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
              <li className="active"><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li><a href='#'>Login</a></li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container">
          <div className='row'>
              <div className='jumbotron col-md-6 col-md-offset-3'>
                  <h1>Hello from App component, functionality will be here</h1>
              </div>
          </div>
      </div>
      </div>



    );
  }
});
