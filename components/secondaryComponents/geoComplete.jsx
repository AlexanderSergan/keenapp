GeoComplete = React.createClass({

  getInitialState: function() {
    return ({
      userLocation: Meteor.user().profile.currentLocation || 'not defined'
    });
  },

  saveUserLocation: function(e) {
    // Updating current user location in db
    Meteor.users.update({ _id: Meteor.userId() },
                        { $set: { 'profile.currentLocation': this.state.userLocation } });

    MDSnackbars.show({ text : 'Location set to ' + this.state.userLocation });
    this.forceUpdate();

  },

  componentDidMount: function() {
    MDSnackbars.init();
    var that = this;
    // Initialisation of geo input and this.state.userLocation
    if (GoogleMaps.loaded()) {
      $('#geoInput').geocomplete().bind("geocode:result", function(event, result) {
        that.setState({userLocation: result.formatted_address});
      });
    }
  },

  render: function() {
    // var snackbarText = 'Location set to ' + this.state.userLocation;
    return (
      <div>
        <div className="form-group">
          <input className='col-md-9 form-control' id='geoInput'/>
        </div>
        <h4>Сurrent location:
          <span> {Meteor.user().profile.currentLocation}</span>
        </h4>
        <a onClick={this.saveUserLocation}
           className='btn btn-primary btn-raised'>Update!</a>


      </div>
    );
  }

});
// data-toggle='md-snackbar'
// data-text={snackbarText}
