HelloUser = React.createClass({

  

  render: () => {
    return( <div>

                <h2>Hello, {Meteor.user().emails[0].address}!</h2>
                <h3>You can set/update your location to <br/>
                chat with others: </h3>

                <GeoComplete />
                <br />





          </div>
        );
  }
});
