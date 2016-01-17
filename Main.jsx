Messages = new Mongo.Collection('messages');

if (Meteor.isClient) {
  // This code is executed on the client only

  Meteor.startup(function() {

    GoogleMaps.load({
      key: 'AIzaSyAN-idHYPfeAI6BGwPb8qWBM0Hr0h82Gw0',
      libraries: 'places' // also accepts an array if you need more than one
    });

    // Use Meteor.startup to render the component after the page is ready
      ReactDOM.render(<HelloUser />, document.getElementById('render-target'));
  });
}
