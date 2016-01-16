var LoginButtons = BlazeToReact('loginButtons');

MyNewTmpl = React.createClass({
  render: function() {
    return <div>
              <li>
                <a href='#'>
                  <LoginButtons />
                </a>
              </li>
            </div>;
  }
});
