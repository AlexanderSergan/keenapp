GeoComplete = React.createClass({

  getInitialState: function() {
    return({
      userLocation: 'not defined'
    });
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
            console.log(this);
            console.log(that);
            console.log('userLocation set to ' + result.formatted_address +
            '\nand the result is ' + JSON.stringify(result) );
          });
    }
  },

  render: function() {
    return(<div>
      <input className='' id='geoInput'/>
      <h3>so chosen location is: <br />
      <span className='geoResult'>{this.state.userLocation}</span></h3>

    </div>);
  }

});
