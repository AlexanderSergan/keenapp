GeoComplete = React.createClass({

  getInitialState: function() {
    return({
      userLocation: Meteor.user().profile.currentLocation || 'not defined'
    });
  },

  saveUserLocation: function(e) {
    // Meteor.users.update({});
    Meteor.users.update( { _id: Meteor.userId() },{$set: {'profile.currentLocation': this.state.userLocation}});
    toastr.info(this.state.userLocation, 'Location set to');
  },

  componentDidMount: function() {
    var that = this;
    if (GoogleMaps.loaded()) {
      $('#geoInput').geocomplete()
          .bind("geocode:result", function(event, result){
            // $('.geoResult').append('<span>' + "Result: " + result.formatted_address + '</span>');
            // this.state.userLocation = result.formatted_address;
            that.setState({
              userLocation: result.formatted_address
            });


            console.info('userLocation set to ' + result.formatted_address +
            '\nand the result is ' + JSON.stringify(result) );
          });
    }
  },

  render: function() {
    return(<div>
      <input className='col-md-6' id='geoInput'/>
      <h3>so chosen location is: <br />
      <span className='geoResult'>{this.state.userLocation}</span></h3>
      <div onClick={this.saveUserLocation} className='btn btn-default'>Save</div>

    </div>);
  }

});
