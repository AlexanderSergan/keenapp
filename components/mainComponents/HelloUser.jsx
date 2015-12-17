HelloUser = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData: ()=> {
    return {
      currentUser: Meteor.user()
    };
  },

  getUserEmail: function() {
    // return Meteor.user().emails[0].address;
    return this.props.data.currentUser.emails[0].address;
  },


  render:()=> {
    return <div>
            <div className="container">
              <div className='row'>
               <div className='jumbotron col-md-6 col-md-offset-3'>
                <h1>Hello {this.getUserEmail}!</h1>
               </div>
              </div>
            </div>
          </div>;
  }
});
