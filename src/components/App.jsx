import React, { PropTypes } from 'react';

function App(props) {
  return (
    <div>
      {props.children}
    </div>
  );
}

App.propTypes = {
  children: PropTypes.element,
};

export default App;
