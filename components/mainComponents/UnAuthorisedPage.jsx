UnAuthorisedPage = React.createClass({

  render: function() {
        return(
          <div>
          <div className="container">
              <div className='row'>
                  <div className='col-md-10 col-md-offset-1'>
                  <h2>Hello, %username%!</h2>
                  <h3>You must register via login/pwd to see this page.</h3>
                  </div>
              </div>
          </div>
          </div>
        );


  }
});
