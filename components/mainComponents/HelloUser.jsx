HelloUser = React.createClass({

  render: () => {
    return( <div>
            <div className="container">
              <div className='row'>
               <div className='jumbotron col-md-6 col-md-offset-3'>
                <h2>Hello, {Meteor.user().emails[0].address}!</h2>
                <h3>So now you can set your location to <br/>
                chat with others: </h3>

                <GeoComplete />
                <br />
                   



               </div>
              </div>
            </div>
          </div>
        );
  }
});
