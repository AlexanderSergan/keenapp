GeoComplete = React.createClass({

  componentDidMount: function() {
    if (GoogleMaps.loaded()) {
      $('geoInput').geocomplete();
    }
  },

  render: function() {
    return(<input id='geoInput'/>);
  }

});
