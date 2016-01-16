// TODO: delete blaze templates, set route as state


FlowRouter.route('/', {
  action: () => {
    const containerElement = document.getElementById('render-target');
    setActive('HomeBtn');
    ReactDOM.render(<HelloUser />, containerElement);
  }
});

FlowRouter.route('/messages', {
  action: () => {
    const containerElement = document.getElementById('render-target');
    setActive('MessagesBtn');
    if (!!Meteor.user()) {
      ReactDOM.render(<MessagesList />, containerElement);
    } else {
      ReactDOM.render(<UnAuthMessagesList />, containerElement);
    }
  }
});

FlowRouter.route('/about', {
  action: () => {
    const containerElement = document.getElementById('render-target');
    setActive('AboutBtn');
    ReactDOM.render(<About />, containerElement);
  }
});

var setActive = (element)=> {
  document.getElementById('HomeBtn').className = '';
  document.getElementById('MessagesBtn').className = '';
  document.getElementById('AboutBtn').className = '';
  document.getElementById(element).className = 'active';

};






// How to use:
// FlowRouter.route('/blog/:postId', {
//   action(params) {
//     const containerElement = document.getElementById("app-container");
//     ReactDOM.render(<AppBody postId={params.postId} />, containerElement);
//   }
// });
