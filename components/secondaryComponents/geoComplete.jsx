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
    toastr.info(this.state.userLocation, 'Location set to');
  },

  componentDidMount: function() {
    var that = this;
    // Initialisation of geo input and this.state.userLocation
    if (GoogleMaps.loaded()) {
      $('#geoInput').geocomplete().bind("geocode:result", function(event, result) {
        that.setState({userLocation: result.formatted_address});
      });
    }
  },

  render: function() {
    return (
      <div>
        <input className='col-md-9' id='geoInput'/>
        <h3>So chosen location is:
          <span className='geoResult'> {this.state.userLocation}</span>
        </h3>
        <div onClick={this.saveUserLocation} className='btn btn-default'>Update!</div>

      </div>
    );
  }

});
