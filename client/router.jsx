
FlowRouter.route('/', {
  action: () => {
    const containerElement = document.getElementById('render-target');
    ReactDOM.render(<HelloUser />, containerElement);
  }
});

FlowRouter.route('/messages', {
  action: () => {
    const containerElement = document.getElementById('render-target');
    ReactDOM.render(<MessagesList />, containerElement);
  }
});

FlowRouter.route('/about', {
  action: () => {
    const containerElement = document.getElementById("render-target");
    ReactDOM.render(<About />, containerElement);
  }
});






// How to use:
// FlowRouter.route('/blog/:postId', {
//   action(params) {
//     const containerElement = document.getElementById("app-container");
//     ReactDOM.render(<AppBody postId={params.postId} />, containerElement);
//   }
// });
